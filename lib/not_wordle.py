import random
import sys
import json
import os

def load_words():
    """Load words from the words.txt file"""
    try:
        # Get the absolute path to the words.txt file
        words_file_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'files', 'words.txt')
        print(f"Loading words from: {words_file_path}", file=sys.stderr)
        
        with open(words_file_path, 'r') as word_file:
            words = [line.rstrip().upper() for line in word_file]
            print(f"Loaded {len(words)} words", file=sys.stderr)
            return words
    except FileNotFoundError:
        print(f"Words file not found at: {words_file_path}", file=sys.stderr)
        # Fallback to a small list of words if file not found
        return ["ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN"]
    except Exception as e:
        print(f"Error loading words: {str(e)}", file=sys.stderr)
        # Fallback to a small list of words if there's an error
        return ["ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN"]

def initialize_game():
    """Initialize a new game and return the word to guess"""
    word_list = load_words()
    word_to_guess = random.choice(word_list)
    print(f"Selected word to guess: {word_to_guess}", file=sys.stderr)
    return word_to_guess

def check_guess(word_to_guess, word_guessed):
    """Check a guess against the word to guess and return the result"""
    if word_guessed == word_to_guess:
        return {
            "correct": True,
            "message": f"Congratulations, you guessed the right word: {word_to_guess}",
            "correct_letters": list(word_to_guess),
            "out_of_place_letters": []
        }
    
    if len(word_guessed) != 5:
        return {
            "correct": False,
            "message": "Oops! Try again with a 5 letter word.",
            "correct_letters": [],
            "out_of_place_letters": []
        }
    
    letters_to_guess = list(word_to_guess)
    letters_guessed = list(word_guessed)
    correct_letters_guessed = ['-', '-', '-', '-', '-']
    out_of_place_letters_guessed = set()
    
    # First pass: find correct letters in correct positions
    for i in range(5):
        if letters_guessed[i] == letters_to_guess[i]:
            correct_letters_guessed[i] = letters_guessed[i]
            letters_to_guess[i] = '-'  # Mark as used
    
    # Second pass: find letters in wrong positions
    for i in range(5):
        if correct_letters_guessed[i] == '-':
            try:
                index_on_word_to_guess = letters_to_guess.index(letters_guessed[i])
                if index_on_word_to_guess >= 0:
                    out_of_place_letters_guessed.add(letters_guessed[i])
                    letters_to_guess[index_on_word_to_guess] = '-'  # Mark as used
            except ValueError:
                pass
    
    return {
        "correct": False,
        "message": "Keep guessing!",
        "correct_letters": correct_letters_guessed,
        "out_of_place_letters": list(out_of_place_letters_guessed)
    }

def main():
    """Main function to run the game in terminal mode"""
    word_to_guess = initialize_game()
    print('Welcome to "Definitely Not Just a Rip-Off of Wordle"!\nYou have 5 guesses to guess a 5 letter word.\nGood Luck!')
    
    correct_letters_guessed = ['-','-','-','-','-']
    out_of_place_letters_guessed = set()
    
    for turn in range(5):
        word_guessed = input('Please guess a word: ').upper()
        print('Your guess: {}'.format(word_guessed))
        
        result = check_guess(word_to_guess, word_guessed)
        
        if result["correct"]:
            print(result["message"])
            break
        else:
            print(result["message"])
            print(result["correct_letters"])
            if result["out_of_place_letters"]:
                print(result["out_of_place_letters"])
            
            if turn == 4:
                print(f"Game over! The word was: {word_to_guess}")

if __name__ == "__main__":
    main()