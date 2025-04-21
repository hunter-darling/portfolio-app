import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
          
          <div className="grid gap-6 mt-8">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Not-Wordle</h2>
              <p className="text-muted-foreground mb-4">
                A word-guessing game inspired by Wordle. View the original Python script on my GitHub.
              </p>
              <Link 
                href="/not-wordle" 
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Play
              </Link>
              <Link 
                href="/not-wordle/about" 
                className="inline-flex bg-secondary text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
              >
                About
              </Link>
              <Link 
                href="https://github.com/hunter-darling/basically-just-wordle" 
                className="inline-flex bg-secondary text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                &lt;/&gt;
              </Link>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold py-2 text-center">More projects coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}