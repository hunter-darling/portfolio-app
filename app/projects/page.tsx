import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="pt-24">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
          
          <div className="grid gap-6 mt-8">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Not-Wordle</h2>
              <p className="text-muted-foreground mb-4">
                A word-guessing game inspired by Wordle. It's not Wordle. It's Not-Wordle.
              </p>
              <Link 
                href="/projects/not-wordle"
                className="inline-flex text-secondary-foreground px-4 py-2 rounded-md hover:bg-primary/20 transition-colors outline outline-secondary-foreground/20"
              >
                About
              </Link>
              <Link 
                href="/not-wordle-game" 
                className="inline-block text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors outline outline-secondary-foreground"
              >
                Play
              </Link>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">GM Common Login SPA</h2>
              <p className="text-muted-foreground mb-4">
                The General Motors common login page. Leveraged by multiple different GM websites to provide a single login experience for GM customers.
              </p>
              <Link 
                href="/projects/common-login" 
                className="inline-flex text-secondary-foreground px-4 py-2 rounded-md hover:bg-primary/20 transition-colors outline outline-secondary-foreground/20"
              >
                About
              </Link>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold py-2 text-center">More coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}