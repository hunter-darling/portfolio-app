import Image from "next/image"

export default function Kilroy() {
  return (
    <div className="w-fit mx-auto">
      <a
        href="https://en.wikipedia.org/wiki/The_Message_(short_story)" target="_blank"
        rel="noreferrer noopener">
        <Image
          className="mx-auto py-4"
          src='/images/kilroy.png'
          alt="Kilroy Was Here"
          height="96"
          width="96"
        />
      </a>
    </div>
  )
}