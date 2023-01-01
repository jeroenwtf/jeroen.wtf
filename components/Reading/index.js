import Image from "next/image"

export default function Reading({ books }) {
  return (
    <>
      <h4>Reading</h4>
      <div className="flex gap-4 not-prose">
        {books.map((book, index) => (
          <Image
            key={index}
            width={400}
            height={600}
            className="rounded h-28 shrink-0 w-auto max-w-none"
            src={`${book.cover}`}
            alt={book.title}
            title={book.title}
          />
        ))}
      </div>
    </>
  )
}
