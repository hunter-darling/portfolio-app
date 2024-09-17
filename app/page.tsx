import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-bold w-fit mx-auto">Howdy!</h1>
          <p className="text-m text-center py-4">My name is Hunter Darling, I am a software engineer and I like building things. In fact, I am in the process of building this website. Go figure! Check back soon for the finished product!</p> 
          <p className="text-m text-center">In the meantime, if you would like to contact me via LinkedIn or check out my GitHub, please use the links at the bottom of the page.</p>
          <h1 className="text-2xl font-bold w-fit mx-auto py-6">Thanks for stopping by!</h1>
          <div className="w-fit mx-auto">
            <a
              href="https://en.wikipedia.org/wiki/The_Message_(short_story)" target="_blank"
              rel="noreferrer noopener">
              <Image
                className="mx-auto py-4"
                src='/images/kilroy.png'
                alt="Under Construction"
                height="96"
                width="96"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
