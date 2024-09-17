export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-bold w-fit mx-auto">Welcome!</h1>
          <p className="text-m text-center pt-2">My name is Hunter Darling, I created this portfolio site to serve as a one-stop-shop where you can find my <a className="underline hover:underline-offset-2" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>, see some <a className="underline hover:underline-offset-2" href="/work-examples">work examples</a>, and learn a bit <a className="underline hover:underline-offset-2" href="/about">about</a> the man behind the monitor!</p> 
          <p className="text-m text-center pt-2">This site is currently under construction, so some bits and pieces are not fully fleshed out yet. In the meantime, if you would like to contact me via LinkedIn or check out my GitHub, please use the links at the bottom of the page, or shoot me an <a
              className="underline hover:underline-offset-2"
              href="mailto:hunterperryd@gmail.com?subject=Howdy Partner!"
              target="_blank"
              rel="noreferrer">email</a>. </p>
          <p className="text-m text-center pt-2">Be sure check back in again soon to see the finished product!</p>
          <h1 className="text-2xl font-bold w-fit mx-auto pt-2">Thanks for stopping by!</h1>
        </div>
      </section>
    </>
  );
}
