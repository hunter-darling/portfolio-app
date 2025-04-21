import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
          
          <div className="grid gap-6 mt-8">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Definitely Not Just a Rip-Off of Wordle</h2>
              <p className="text-muted-foreground mb-4">
                A word-guessing game inspired by Wordle. Built with Next.js, React, and Python. View the original source code for the Python script on my GitHub.
              </p>
              <Link 
                href="/not-wordle" 
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Play Game
              </Link>
              <Link 
                href="https://github.com/hunter-darling/basically-just-wordle" 
                className="inline-flex bg-primary text-primary-foreground ml-4 px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                View Source Code &lt;/&gt;
              </Link>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <Image
                className="mx-auto py-4"
                src='/images/under-construction.png'
                alt="Under Construction"
                height="144"
                width="144"
              />
              <p className="text-2xl font-bold py-2 text-center">More projects coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}