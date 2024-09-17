import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-24">
          <h1 className="text-3xl font-bold">Howdy!</h1>
          <p className="text-sm font-bold py-2">My name is Hunter Darling, I am a software engineer and I like building things. In fact, I am in the process of building this website. Go figure! Check back soon for the finished product!</p> 
          <p className="text-sm font-bold py-2">In the meantime, if you would like to contact me via LinkedIn or check out my GitHub, please use the links at the bottom of the page.</p>
          <h1 className="text-3xl font-bold py-2">Thanks for stopping by!</h1>
          <Image
            className="mx-auto py-4"
            src='/images/kilroy.png'
            alt="Under Construction"
            height="96"
            width="102"
          />
        </div>
      </section>
    </>
  );
}
