import Link from 'next/link';

export default function NotWordleAbout() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-16">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex text-secondary-foreground px-4 py-2 rounded-md hover:bg-primary/20 transition-colors outline outline-secondary-foreground/20"
        >
          Back to Projects
        </Link>
      </div>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6">About &quot;Not-Wordle&quot;</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
        <p>
          Not-Wordle is a word guessing game built with Next.js and TypeScript. 
          The game challenges players to guess a 5-letter word within 6 attempts, providing visual 
          feedback through a color-coded system similar to the popular Wordle game, but with a 
          unique terminal aesthetic to simulate it&apos;s original implementation as a command line game written in Python. View the original Python script on my <a 
            href="https://github.com/hunter-darling/basically-just-wordle" 
            target="_blank" 
            rel="noreferrer"
            className="underline hover:underline-offset-2 hover:text-green-700 hover:font-bold"
          >GitHub
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Game Mechanics</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Players have 6 attempts to guess a 5-letter word</li>
          <li>Each guess provides feedback through color-coded letters in classic Wordle style:
            <ul className="list-disc pl-6 mt-2">
              <li>Cyan: Letter is correct and in the right position</li>
              <li>Orange: Letter is in the word but in the wrong position</li>
              <li>Gray: Letter is not in the word</li>
            </ul>
          </li>
          <li>Game ends when the player either:
            <ul className="list-disc pl-6 mt-2">
              <li>Correctly guesses the word (win)</li>
              <li>Uses all 5 attempts without guessing correctly (loss)</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Game Flow</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li>Game initializes with a welcome message</li>
          <li>Player enters a 5-letter word guess</li>
          <li>System validates the guess and provides feedback</li>
          <li>Colors update to show correct/incorrect letters</li>
          <li>Process repeats until game ends</li>
          <li>Final screen shows game outcome and the correct word</li>
          <li>Player can restart the game at any time (for the Wordle faithful, read &quot;cheating is allowed&quot;)</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-3">User Interface</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Terminal-inspired design with a dark theme</li>
          <li>Clear visual feedback for each guess</li>
          <li>Guess history displayed in a scrollable terminal window</li>
          <li>Input field with command prompt ($) styling</li>
          <li>Responsive layout that works well on different screen sizes</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Technical Implementation</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Built with Next.js and TypeScript</li>
          <li>Client-side state management using React hooks</li>
          <li>Server-side game logic in TypeScript</li>
          <li>UUID-based game session management</li>
          <li>Focus management for improved user experience (cursor automatically moves to the input field when game is active)</li>
          <li>Automatic scrolling to keep the latest content visible</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Architecture</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Frontend: Next.js with TypeScript</li>
          <li>State Management: React hooks (useState, useEffect, useRef)</li>
          <li>Game Logic: Server-side TypeScript</li>
          <li>Styling: Tailwind CSS</li>
        </ul>

      </article>
    </div>
  );
} 