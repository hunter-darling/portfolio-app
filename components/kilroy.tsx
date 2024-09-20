import Image from "next/image"

export default function Kilroy() {
  return (
    <div className="w-fit mx-auto h-fit">
      <a
        href="https://en.wikipedia.org/wiki/The_Message_(short_story)" target="_blank"
        rel="noreferrer noopener">
        <Image
          className="mx-auto py-4 h-fit"
          src='/images/kilroy.png'
          alt="Kilroy Was Here"
          height="34"
          width="34"
        />
      </a>
    </div>
  )
}