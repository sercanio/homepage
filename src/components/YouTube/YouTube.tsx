export default function YouTube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="mx-auto my-6"
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        width="94%"
        height={400}
        title="Embedded YouTube video"
      />
    </div>
  )
}
