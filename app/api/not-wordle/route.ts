import { NextRequest, NextResponse } from 'next/server';
import { handleRequest } from '../../../lib/not-wordle';

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

    // Prepare the request data
    const requestData = {
      action,
      game_id,
      guess
    };

    console.log(`Processing request: ${JSON.stringify(requestData)}`);

    // Handle the request using our TypeScript implementation
    const response = handleRequest(requestData);
    
    // Return the response
    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 