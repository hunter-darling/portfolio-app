import Image from "next/image";
// import Link from "next/link";

export default function About() {
  
  return (
    <>
      <section className="pt-24 scrollable">
        <div className="container max-w-3xl mx-auto">
          <Image
            className="mx-auto rounded-lg"
            src="/images/me.jpeg"
            alt="Me"
            height="100"
            width="200"
          />
          <h1 className="text-xl font-bold w-fit mx-auto py-2">Howdy!</h1>
          <p className="text-sm text-left py-2">
            For the last 5+ years I have been working as a software engineer, most recently with Cavallo in Grand Rapids, Michigan. My focus has been web application development, specifically in customer identity, profile management, and now data-driven analytics products.
          </p>
          <p className="text-sm text-left py-2">
            At General Motors, my work was split between customer-facing UIs in Angular and Node.js and highly-available Spring Boot microservices. I designed Spring-based microservices integrating with Azure Active Directory (Entra ID) and Kafka to support identity services for more than 40 million active users, and I led the migration of GM&apos;s shared sign-in experience from a legacy JavaScript application to Angular, with reusable UI components across multiple GM brands.
          </p>
          <p className="text-sm text-left py-2">
            At Cavallo, I am embedded within the Cloud Development team helping build the Profit Maximization Platform, which turns noisy distributor ERP data into actionable insights. Collaborating frequently with the data science team, I help translate scientific findings into deliverable features; the most significant of which was the redesign of our churn prediction model that runs as part of the core ETL pipeline. I have also owned and built various user-facing features in the PMP React app, helping to bring our data-driven insights to the forefront of the business.~
          </p>
          <p className="text-sm text-left py-2">
            I have enjoyed exploring creating some smaller side projects that you can find on my GitHub, and will continue to do so as long as I still have fingers and a brain, so check back again soon to see more!
          </p>
          <p className="text-sm text-left py-2">
            I am currently based in West Michigan. My hobbies include volleyball, tennis, playing any video game published by From Software, and chiefly, reading sci-fi. Isaac Asimov is one of my favorite authors of all time, and his short story &quot;The Message&quot; is the inspiration for this site&apos;s mascot (and favicon): Kilroy. If you are interested, feel free to connect with me on <a 
              href="https://goodreads.com/user/show/182063111-hunter-darling" 
              target="_blank"
              rel="noreferrer" 
              className="underline hover:underline-offset-2 hover:text-green-700 hover:font-bold">
              Goodreads
            </a> and take a peek at what I am currently reading!
          </p>
          {/* <p className="text-sm text-left py-2">
            If you have some free time and nothing better to do, check out my <Link href="/blog" className="underline hover:underline-offset-2 hover:text-green-700">blog</Link>.
          </p> */}
        </div>
      </section>
    </>
  );
}