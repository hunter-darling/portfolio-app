import Image from "next/image";

export default function Projects() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-24">
          <p className="text-2xl font-bold py-2">This page is under construction! Please check back again soon!</p>
          <Image
            className="mx-auto py-4"
            src='/images/under-construction.png'
            alt="Under Construction"
            height="144"
            width="144"
          />
        </div>
      </section>
    </>
  );
}