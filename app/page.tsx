import Kilroy from "@/components/kilroy";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-bold w-fit mx-auto">Welcome!</h1>
          <p className="text-l text-center pt-8">My name is Hunter Darling.</p> 
          <p className="text-m text-center pt-2">I created this portfolio site to serve as a one-stop-shop where you can find my <a className="underline hover:underline-offset-2" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>, see some examples of my <a className="underline hover:underline-offset-2" href="https://github.com/hunter-darling" target="_blank" rel="noopener noreferrer">code</a>, and learn a bit <a className="underline hover:underline-offset-2" href="/about">about</a> the man behind the monitor.</p> 
          <p className="text-m text-center pt-2">If you would like to contact me directly, feel free to send me a message on <a
              className="underline hover:underline-offset-2"
              href="https://linkedin.com/in/hunter-darling-55676b106"
              target="_blank"
              rel="noreferrer noopener"
            >LinkedIn</a>, or shoot me an <a
              className="underline hover:underline-offset-2"
              href="mailto:hunterperryd@gmail.com?subject=Howdy!"
              target="_blank"
              rel="noreferrer">email</a>. </p>
          <p className="text-m text-center pt-2">This site is not static. I will continue to update it as I build and learn new things, so be sure check back in again soon to see more!</p>
          <h1 className="text-2xl font-bold w-fit mx-auto pt-8">Thanks for stopping by!</h1>
        </div>
        <Kilroy/>
      </section>
    </>
  );
}
