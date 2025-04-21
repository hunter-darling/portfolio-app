import sys
import json
import os
from not_wordle import initialize_game, check_guess

# Store game state in memory (in a real app, you'd use a database)
games = {}

def handle_request(request_data):
    """Handle incoming requests from the Next.js app"""
    # Debug logging
    print(f"Received request: {json.dumps(request_data)}", file=sys.stderr)
    
    action = request_data.get('action')
    game_id = request_data.get('game_id')
    
    # Debug logging
    print(f"Action: {action}, Game ID: {game_id}", file=sys.stderr)
    print(f"Current games: {list(games.keys())}", file=sys.stderr)
    
    if action == 'new_game':
        if not game_id:
            print("Error: No game_id provided for new_game action", file=sys.stderr)
            return {
                'status': 'error',
                'message': 'Game ID is required for new_game action'
            }
            
        # Check if the words.txt file exists
        words_file_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'files', 'words.txt')
        if not os.path.exists(words_file_path):
            print(f"Words file not found at: {words_file_path}", file=sys.stderr)
            return {
                'status': 'error',
                'message': 'Words file not found. Please check the server configuration.'
            }
            
        word_to_guess = initialize_game()
        games[game_id] = {
            'word_to_guess': word_to_guess,
            'turns': 0,
            'max_turns': 5,
            'game_over': False
        }
        print(f"Created new game with ID: {game_id}, word: {word_to_guess}", file=sys.stderr)
        print(f"Games after new_game: {json.dumps(games)}", file=sys.stderr)
        return {
            'status': 'success',
            'message': 'Welcome to "Definitely Not Just a Rip-Off of Wordle"!\nYou have 5 guesses to guess a 5 letter word.\nGood Luck!',
            'game_id': game_id
        }
    
    elif action == 'guess':
        if not game_id:
            print("Error: No game_id provided for guess action", file=sys.stderr)
            return {
                'status': 'error',
                'message': 'Game ID is required for guess action'
            }
            
        word_guessed = request_data.get('guess', '').upper()
        
        if game_id not in games:
            print(f"Game not found with ID: {game_id}", file=sys.stderr)
            print(f"Available games: {list(games.keys())}", file=sys.stderr)
            print(f"Games state: {json.dumps(games)}", file=sys.stderr)
            return {
                'status': 'error',
                'message': f'Game not found with ID: {game_id}. Start a new game first.'
            }
        
        game = games[game_id]
        print(f"Processing guess for game {game_id}: {word_guessed}", file=sys.stderr)
        print(f"Game state: {json.dumps(game)}", file=sys.stderr)
        
        if game['game_over']:
            return {
                'status': 'error',
                'message': 'Game is already over. Start a new game.'
            }
        
        if game['turns'] >= game['max_turns']:
            game['game_over'] = True
            # Get the result for the final guess to show correct/incorrect letters
            result = check_guess(game['word_to_guess'], word_guessed)
            return {
                'status': 'game_over',
                'message': f"Game over! The word was: {game['word_to_guess']}",
                'word': game['word_to_guess'],
                'correct_letters': result['correct_letters'],
                'out_of_place_letters': result['out_of_place_letters']
            }
        
        result = check_guess(game['word_to_guess'], word_guessed)
        game['turns'] += 1
        
        if result['correct']:
            game['game_over'] = True
            print(f"Player won game {game_id} in {game['turns']} turns", file=sys.stderr)
            return {
                'status': 'success',
                'message': result['message'],
                'correct': True,
                'correct_letters': result['correct_letters'],
                'out_of_place_letters': result['out_of_place_letters'],
                'turns_left': game['max_turns'] - game['turns']
            }
        
        if game['turns'] >= game['max_turns']:
            game['game_over'] = True
            print(f"Player lost game {game_id}", file=sys.stderr)
            # Get the result for the final guess to show correct/incorrect letters
            result = check_guess(game['word_to_guess'], word_guessed)
            return {
                'status': 'game_over',
                'message': f"Game over! The word was: {game['word_to_guess']}",
                'word': game['word_to_guess'],
                'correct_letters': result['correct_letters'],
                'out_of_place_letters': result['out_of_place_letters']
            }
        
        print(f"Guess processed for game {game_id}, turns left: {game['max_turns'] - game['turns']}", file=sys.stderr)
        return {
            'status': 'success',
            'message': result['message'],
            'correct': False,
            'correct_letters': result['correct_letters'],
            'out_of_place_letters': result['out_of_place_letters'],
            'turns_left': game['max_turns'] - game['turns']
        }
    
    else:
        print(f"Invalid action: {action}", file=sys.stderr)
        return {
            'status': 'error',
            'message': 'Invalid action'
        }

if __name__ == "__main__":
    # Read input from stdin
    while True:
        try:
            input_data = sys.stdin.readline()
            if not input_data:
                break
                
            request_data = json.loads(input_data)
            response = handle_request(request_data)
            print(json.dumps(response))
            sys.stdout.flush()
        except json.JSONDecodeError:
            print(json.dumps({
                'status': 'error',
                'message': 'Invalid JSON input'
            }))
            sys.stdout.flush()
        except Exception as e:
            print(json.dumps({
                'status': 'error',
                'message': str(e)
            }))
            sys.stdout.flush() 