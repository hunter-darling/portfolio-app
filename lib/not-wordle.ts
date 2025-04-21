import fs from 'fs';
import path from 'path';

// Types
export interface GameState {
  wordToGuess: string;
  turns: number;
  maxTurns: number;
  gameOver: boolean;
}

export interface GuessResult {
  correct: boolean;
  message: string;
  correctLetters: string[];
  outOfPlaceLetters: string[];
}

// Store game state in memory (in a real app, you'd use a database)
const games: Record<string, GameState> = {};

/**
 * Load words from the words.txt file
 */
export function loadWords(): string[] {
  try {
    // Get the absolute path to the words.txt file
    const wordsFilePath = path.join(process.cwd(), 'public', 'files', 'words.txt');
    console.log(`Loading words from: ${wordsFilePath}`);
    
    const wordFile = fs.readFileSync(wordsFilePath, 'utf8');
    const words = wordFile.split('\n').map(line => line.trim().toUpperCase()).filter(word => word.length === 5);
    console.log(`Loaded ${words.length} words`);
    return words;
  } catch (error) {
    console.error(`Error loading words: ${error}`);
    // Fallback to a small list of words if there's an error
    return ["ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN"];
  }
}

/**
 * Initialize a new game and return the word to guess
 */
export function initializeGame(): string {
  const wordList = loadWords();
  const wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(`Selected word to guess: ${wordToGuess}`);
  return wordToGuess;
}

/**
 * Check a guess against the word to guess and return the result
 */
export function checkGuess(wordToGuess: string, wordGuessed: string): GuessResult {
  if (wordGuessed === wordToGuess) {
    return {
      correct: true,
      message: `Congratulations, you guessed the right word: ${wordToGuess}`,
      correctLetters: wordToGuess.split(''),
      outOfPlaceLetters: []
    };
  }
  
  if (wordGuessed.length !== 5) {
    return {
      correct: false,
      message: "Oops! Try again with a 5 letter word.",
      correctLetters: [],
      outOfPlaceLetters: []
    };
  }
  
  const lettersToGuess = wordToGuess.split('');
  const lettersGuessed = wordGuessed.split('');
  const correctLettersGuessed = ['-', '-', '-', '-', '-'];
  const outOfPlaceLettersGuessed = new Set<string>();
  
  // First pass: find correct letters in correct positions
  for (let i = 0; i < 5; i++) {
    if (lettersGuessed[i] === lettersToGuess[i]) {
      correctLettersGuessed[i] = lettersGuessed[i];
      lettersToGuess[i] = '-';  // Mark as used
    }
  }
  
  // Second pass: find letters in wrong positions
  for (let i = 0; i < 5; i++) {
    if (correctLettersGuessed[i] === '-') {
      const indexOnWordToGuess = lettersToGuess.indexOf(lettersGuessed[i]);
      if (indexOnWordToGuess >= 0) {
        outOfPlaceLettersGuessed.add(lettersGuessed[i]);
        lettersToGuess[indexOnWordToGuess] = '-';  // Mark as used
      }
    }
  }
  
  return {
    correct: false,
    message: "Keep guessing!",
    correctLetters: correctLettersGuessed,
    outOfPlaceLetters: Array.from(outOfPlaceLettersGuessed)
  };
}

/**
 * Handle a new game request
 */
export function handleNewGame(gameId: string): { status: string; message: string; gameId?: string } {
  if (!gameId) {
    console.error("Error: No game_id provided for new_game action");
    return {
      status: 'error',
      message: 'Game ID is required for new_game action'
    };
  }
  
  const wordToGuess = initializeGame();
  games[gameId] = {
    wordToGuess,
    turns: 0,
    maxTurns: 5,
    gameOver: false
  };
  
  console.log(`Created new game with ID: ${gameId}, word: ${wordToGuess}`);
  console.log(`Games after new_game: ${JSON.stringify(games)}`);
  
  return {
    status: 'success',
    message: '',
    gameId
  };
}

/**
 * Handle a guess request
 */
export function handleGuess(gameId: string, guess: string): {
  status: string;
  message: string;
  correct?: boolean;
  correctLetters?: string[];
  outOfPlaceLetters?: string[];
  turnsLeft?: number;
  word?: string;
} {
  if (!gameId) {
    console.error("Error: No game_id provided for guess action");
    return {
      status: 'error',
      message: 'Game ID is required for guess action'
    };
  }
  
  const wordGuessed = guess.toUpperCase();
  
  if (!games[gameId]) {
    console.error(`Game not found with ID: ${gameId}`);
    console.error(`Available games: ${Object.keys(games)}`);
    console.error(`Games state: ${JSON.stringify(games)}`);
    return {
      status: 'error',
      message: `Game not found with ID: ${gameId}. Start a new game first.`
    };
  }
  
  const game = games[gameId];
  console.log(`Processing guess for game ${gameId}: ${wordGuessed}`);
  console.log(`Game state: ${JSON.stringify(game)}`);
  
  if (game.gameOver) {
    return {
      status: 'error',
      message: 'Game is already over. Start a new game.'
    };
  }
  
  if (game.turns >= game.maxTurns) {
    game.gameOver = true;
    // Get the result for the final guess to show correct/incorrect letters
    const result = checkGuess(game.wordToGuess, wordGuessed);
    return {
      status: 'game_over',
      message: `Game over! The word was: ${game.wordToGuess}`,
      word: game.wordToGuess,
      correctLetters: result.correctLetters,
      outOfPlaceLetters: result.outOfPlaceLetters
    };
  }
  
  const result = checkGuess(game.wordToGuess, wordGuessed);
  game.turns += 1;
  
  if (result.correct) {
    game.gameOver = true;
    console.log(`Player won game ${gameId} in ${game.turns} turns`);
    return {
      status: 'success',
      message: result.message,
      correct: true,
      correctLetters: result.correctLetters,
      outOfPlaceLetters: result.outOfPlaceLetters,
      turnsLeft: game.maxTurns - game.turns
    };
  }
  
  if (game.turns >= game.maxTurns) {
    game.gameOver = true;
    console.log(`Player lost game ${gameId}`);
    // Get the result for the final guess to show correct/incorrect letters
    const result = checkGuess(game.wordToGuess, wordGuessed);
    return {
      status: 'game_over',
      message: `Game over! The word was: ${game.wordToGuess}`,
      word: game.wordToGuess,
      correctLetters: result.correctLetters,
      outOfPlaceLetters: result.outOfPlaceLetters
    };
  }
  
  console.log(`Guess processed for game ${gameId}, turns left: ${game.maxTurns - game.turns}`);
  return {
    status: 'success',
    message: result.message,
    correct: false,
    correctLetters: result.correctLetters,
    outOfPlaceLetters: result.outOfPlaceLetters,
    turnsLeft: game.maxTurns - game.turns
  };
}

/**
 * Handle a request from the Next.js app
 */
export function handleRequest(requestData: { action: string; game_id?: string; guess?: string }): {
  status: string;
  message: string;
  gameId?: string;
  correct?: boolean;
  correctLetters?: string[];
  outOfPlaceLetters?: string[];
  turnsLeft?: number;
  word?: string;
} {
  // Debug logging
  console.log(`Received request: ${JSON.stringify(requestData)}`);
  
  const { action, game_id, guess } = requestData;
  
  // Debug logging
  console.log(`Action: ${action}, Game ID: ${game_id}`);
  console.log(`Current games: ${Object.keys(games)}`);
  
  if (action === 'new_game') {
    return handleNewGame(game_id || '');
  } else if (action === 'guess') {
    return handleGuess(game_id || '', guess || '');
  } else {
    console.error(`Invalid action: ${action}`);
    return {
      status: 'error',
      message: 'Invalid action'
    };
  }
} 