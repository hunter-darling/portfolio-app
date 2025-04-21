'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

// Define types for our game state
type GuessResult = {
  guess: string;
  correctLetters: string[];
  outOfPlaceLetters: string[];
  message: string;
  correct?: boolean;
};

export default function GamePage() {
  const [gameId, setGameId] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [outOfPlaceLetters, setOutOfPlaceLetters] = useState<string[]>([]);
  const [turnsLeft, setTurnsLeft] = useState(5);
  const [guessHistory, setGuessHistory] = useState<GuessResult[]>([]);
  const [actualWord, setActualWord] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [playerWon, setPlayerWon] = useState<boolean>(false);

  // Start a new game
  const startNewGame = useCallback(async () => {
    setIsLoading(true);
    setGameOver(false);
    setPlayerWon(false);
    setMessages([]);
    setCorrectLetters([]);
    setOutOfPlaceLetters([]);
    setTurnsLeft(5);
    setGuessHistory([]);
    setActualWord('');
    
    const newGameId = uuidv4();
    console.log('Starting new game with ID:', newGameId);
    setGameId(newGameId);
    
    try {
      const response = await fetch('/api/not-wordle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'new_game',
          game_id: newGameId,
        }),
      });
      
      const data = await response.json();
      console.log('New game response:', data);
      
      if (data.status === 'success') {
        setMessages([data.message]);
        console.log(`Game started with ID: ${newGameId}`);
        console.log('Current game ID in state:', gameId);
      } else {
        setMessages([`Error: ${data.message}`]);
        console.error(`Failed to start game: ${data.message}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages([`Error: ${errorMessage}`]);
      console.error(`Error starting game: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize game on page load
  useEffect(() => {
    const initializeGame = async () => {
      try {
        await startNewGame();
      } catch (error) {
        console.error('Failed to initialize game:', error);
        setMessages(['Failed to initialize game. Please try refreshing the page.']);
      }
    };
    initializeGame();
  }, [startNewGame]);

  // Scroll to bottom of terminal when messages change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages, guessHistory]);

  // Focus input field when game is not over
  useEffect(() => {
    if (!gameOver && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameOver, guessHistory]);

  // Handle user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  // Submit a guess
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gameId || isLoading || gameOver) return;
    
    if (input.length !== 5) {
      setMessages([...messages, 'Please enter a 5-letter word.']);
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log(`Submitting guess with game ID: ${gameId}`);
      const response = await fetch('/api/not-wordle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'guess',
          game_id: gameId,
          guess: input,
        }),
      });
      
      const data = await response.json();
      console.log(`Guess response:`, data);
      
      if (data.status === 'success') {
        // Add the guess to history
        const newGuess: GuessResult = {
          guess: input,
          correctLetters: data.correctLetters || [],
          outOfPlaceLetters: data.outOfPlaceLetters || [],
          message: data.message,
          correct: data.correct
        };
        
        setGuessHistory([...guessHistory, newGuess]);
        setMessages([...messages, `Your guess: ${input}`, data.message]);
        setCorrectLetters(data.correctLetters || []);
        setOutOfPlaceLetters(data.outOfPlaceLetters || []);
        setTurnsLeft(turnsLeft - 1);
        
        if (data.correct) {
          setGameOver(true);
          setPlayerWon(true);
          setActualWord(input);
        }
      } else if (data.status === 'game_over') {
        // Add the final guess to history before showing game over
        const finalGuess: GuessResult = {
          guess: input,
          correctLetters: data.correctLetters || [],
          outOfPlaceLetters: data.outOfPlaceLetters || [],
          message: data.message,
          correct: false
        };
        
        setGuessHistory([...guessHistory, finalGuess]);
        setMessages([...messages, `Your guess: ${input}`, data.message]);
        setGameOver(true);
        setPlayerWon(false);
        setTurnsLeft(0);
        
        // Extract the word from the message if available
        if (data.word) {
          setActualWord(data.word);
        }
      } else {
        setMessages([...messages, `Error: ${data.message}`]);
        console.error(`Error with guess: ${data.message}`);
        
        // If the game ID is not found, start a new game
        if (data.message.includes('Game not found')) {
          console.log('Game not found, starting a new game');
          setTimeout(startNewGame, 2000);
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages([...messages, `Error: ${errorMessage}`]);
      console.error(`Error submitting guess: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  // Render a guess row
  const renderGuessRow = (guess: GuessResult, index: number) => {
    // Create an array of all letters in the guess
    const allLetters = guess.guess.split('');
    
    // Create a map to track which letters have been processed
    const processedLetters = new Map<string, number[]>();
    
    // First, identify all positions of each letter in the guess
    allLetters.forEach((letter, i) => {
      if (!processedLetters.has(letter)) {
        processedLetters.set(letter, []);
      }
      processedLetters.get(letter)?.push(i);
    });
    
    return (
      <div key={index} className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-white mr-2">Guess {index + 1}:</span>
        </div>
        
        <div className="flex mb-2">
          {allLetters.map((letter, i) => {
            // Determine the color based on whether the letter is correct or in the wrong position
            let bgColor = 'bg-gray-700'; // Default color for incorrect letters
            
            // Check if this letter is in the correct position
            if (guess.correctLetters[i] === letter) {
              bgColor = 'bg-cyan-600'; // Correct letter in correct position
            } 
            // Check if this letter is in the wrong position (but not already marked as correct)
            else if (guess.outOfPlaceLetters.includes(letter)) {
              // Count how many times this letter appears in the word to guess
              const letterPositions = processedLetters.get(letter) || [];
              const letterIndex = letterPositions.indexOf(i);
              
              // Only mark as out of place if we haven't exceeded the number of occurrences
              if (letterIndex < guess.outOfPlaceLetters.filter(l => l === letter).length) {
                bgColor = 'bg-orange-400'; // Letter in wrong position
              }
            }
            
            return (
              <div 
                key={i} 
                className={`w-10 h-10 flex items-center justify-center mr-1 rounded ${bgColor} text-white font-bold`}
              >
                {letter}
              </div>
            );
          })}
        </div>
        
        <div className="text-sm text-gray-400 mt-1">
          {guess.message}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-16 mb-24">
      <div className="mb-6">
        <Link 
          href="/projects" 
          className="inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center">Not-Wordle</h1>
      
      <div 
        ref={terminalRef}
        className="bg-black dark:bg-gray-800 text-cyan-400 p-4 rounded-lg h-96 overflow-y-auto font-mono mb-4"
      >
        <div className="mb-2">
          Welcome to (Definitely Not Just a Rip-Off of) Wordle AKA Not-Wordle! One 5 letter word, 5 guesses. Good Luck!
        </div>
        
        {/* Display guess history */}
        {guessHistory.length > 0 && (
          <div className="mt-4 border-t border-gray-700 pt-4">
            <h2 className="text-xl font-bold mb-2">Guess History</h2>
            {guessHistory.map((guess, index) => renderGuessRow(guess, index))}
          </div>
        )}
        
        {/* Display game over message */}
        {gameOver && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h2 className={playerWon ? "text-xl font-bold mb-2 text-cyan-400" : "text-xl font-bold mb-2 text-orange-400"}>
              {playerWon
                ? "Congratulations!"
                : "Game Over!"
              }
            </h2>
            <p className={playerWon ? "text-cyan-400" : "text-orange-400"}>
              {playerWon 
                ? "You've guessed the word!" 
                : "You've run out of guesses!"}
            </p>
            <p className="text-white mt-2">
              The word was: <span className="text-cyan-400 font-bold">{actualWord || correctLetters.join('')}</span>
            </p>
          </div>
        )}
        
        {!gameOver && (
          <div className="flex items-center mt-4">
            <span className="text-white mr-2">$</span>
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                maxLength={5}
                className="bg-transparent border-none outline-none text-white w-full"
                placeholder="Enter your guess..."
                disabled={isLoading || gameOver}
                autoFocus
              />
            </form>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm">
          Turns left: {turnsLeft}
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={startNewGame}
            className={`bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded ${gameOver ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
            disabled={isLoading}
          >
            {gameOver ? 'Play Again' : 'Restart Game'}
          </button>
        </div>
      </div>
    </div>
  );
} 