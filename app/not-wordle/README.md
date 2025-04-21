# Wordle Clone

This is a simple Wordle clone that runs a Python script in the browser using Next.js API routes.

## How It Works

1. The game is implemented in Python (`lib/game.py` and `lib/game_api.py`)
2. The Next.js API route (`app/api/game/route.ts`) communicates with the Python script
3. The game UI (`app/game/page.tsx`) provides a terminal-like interface for playing the game

## Game Rules

- You have 5 guesses to guess a 5-letter word
- After each guess, you'll see:
  - Letters in the correct position (green)
  - Letters in the wrong position (yellow)
- The game ends when you guess the word or run out of guesses

## Technical Details

- The game state is stored in memory on the server
- Each game session has a unique ID
- The word list is stored in `public/files/words.txt`

## Requirements

- Python 3.x
- Node.js and npm
- Next.js

## Running the Game

1. Make sure Python is installed and accessible from the command line
2. Start the Next.js development server with `npm run dev`
3. Navigate to `/game` in your browser
4. Start playing! 