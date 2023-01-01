import Image from "next/image"

export default function Playing({ games }) {
  return (
    <>
      <h4>Playing</h4>
      <div className="flex gap-4 not-prose">
        {games.map((game, index) => (
          <Image
            key={index}
            height={600}
            width={450}
            className="rounded h-28 w-auto max-w-none"
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
            alt={game.name}
            title={game.name}
          />
        ))}
      </div>
    </>)
}
