import Kilroy from "@/components/kilroy";
import Image from "next/image";

export default function About() {
  
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto">
          <Image
            className="mx-auto rounded-lg"
            src="/images/me.jpeg"
            alt="Me"
            height="150"
            width="250"
          />
          <h1 className="text-xl font-bold w-fit mx-auto py-4">Howdy Partner!</h1>
          <p className="text-sm py-2">
            For the last ~5 years I have been working as a software engineer with a focus in web application development, specifically in the customer identity and profile management space.</p>
          <p className="text-sm py-2">
            My professional software development experience has mainly been in builing user-friendly, customer-facing UIs in Angular with Node.js, and highly-performant, highly-available, and widely-consumed microservices in Java, many of which help serve as the backbone for the foundational customer identity API platform leveraged by dozens of teams at General Motors.
          </p>
          <p className="text-sm py-2">
            In my free time I have enjoyed exploring creating some smaller side <a className="underline hover:underline-offset-2" href="/projects">projects</a> in React and Python, and will continue to do so as long as I still have fingers and a brain, so check back again soon to see more!
          </p>
          <Kilroy />
        </div>
      </section>
    </>
  );
}