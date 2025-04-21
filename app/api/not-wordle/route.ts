import { NextRequest, NextResponse } from 'next/server';
import { spawn, ChildProcess } from 'child_process';
import path from 'path';

// Store the Python process to maintain game state between requests
let pythonProcess: ChildProcess | null = null;

// Initialize the Python process
function initializePythonProcess() {
  if (!pythonProcess) {
    const scriptPath = path.join(process.cwd(), 'lib', 'not-wordle-api.py');
    pythonProcess = spawn('python', [scriptPath]);
    
    // Handle process errors
    pythonProcess.on('error', (error: Error) => {
      console.error('Python process error:', error);
      pythonProcess = null;
    });
    
    // Handle process exit
    pythonProcess.on('close', (code: number) => {
      console.log(`Python process exited with code ${code}`);
      pythonProcess = null;
    });
  }
  return pythonProcess;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, game_id, guess } = body;

    // Validate input
    if (!action) {
      return NextResponse.json(
        { error: 'Action is required' },
        { status: 400 }
      );
    }

    if (!game_id && action !== 'new_game') {
      return NextResponse.json(
        { error: 'Game ID is required for this action' },
        { status: 400 }
      );
    }

    // Prepare the request data for the Python script
    const requestData = {
      action,
      game_id,
      guess
    };

    console.log(`Sending request to Python: ${JSON.stringify(requestData)}`);

    // Get the Python process
    const process = initializePythonProcess();
    if (!process) {
      return NextResponse.json(
        { error: 'Failed to initialize Python process' },
        { status: 500 }
      );
    }

    // Run the Python script as a child process
    return new Promise<Response>((resolve) => {
      let dataString = '';

      // Send the request data to the Python script
      if (process.stdin) {
        process.stdin.write(JSON.stringify(requestData) + '\n');
      } else {
        console.error('Python process stdin is null');
        return resolve(NextResponse.json(
          { error: 'Failed to communicate with Python process' },
          { status: 500 }
        ));
      }

      // Collect data from the Python script
      if (process.stdout) {
        process.stdout.on('data', (data: Buffer) => {
          dataString += data.toString();
          console.log(`Python stdout: ${data.toString()}`);
        });
      } else {
        console.error('Python process stdout is null');
        return resolve(NextResponse.json(
          { error: 'Failed to communicate with Python process' },
          { status: 500 }
        ));
      }

      // Collect errors from the Python script
      if (process.stderr) {
        process.stderr.on('data', (data: Buffer) => {
          console.error(`Python stderr: ${data.toString()}`);
        });
      }

      // Handle process completion
      const timeout = setTimeout(() => {
        console.error('Python process timed out');
        resolve(
          NextResponse.json(
            { error: 'Python process timed out' },
            { status: 500 }
          )
        );
      }, 5000);

      // Handle the response
      const handleResponse = () => {
        clearTimeout(timeout);
        try {
          // Split the response by newlines and take the last valid JSON
          const responses = dataString.split('\n').filter(line => line.trim() !== '');
          const lastResponse = responses[responses.length - 1];
          
          if (!lastResponse) {
            throw new Error('No valid response from Python script');
          }
          
          const responseData = JSON.parse(lastResponse);
          console.log(`Python response: ${JSON.stringify(responseData)}`);
          resolve(NextResponse.json(responseData));
        } catch (error) {
          console.error(`Failed to parse Python output: ${dataString}`);
          resolve(
            NextResponse.json(
              { error: 'Failed to parse Python script output' },
              { status: 500 }
            )
          );
        }
      };

      // Listen for the end of the response
      process.stdout.once('data', () => {
        setTimeout(handleResponse, 100);
      });
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 