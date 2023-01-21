export default function YouTube({
  id,
  className
}: {
  id: string
  className?: string
}) {
  return (
    <iframe
      className={`mx-auto my-6 ${className}`}
      src={`https://www.youtube.com/embed/${id}`}
      allow="autoplay; encrypted-media"
      width="94%"
      height={400}
      title="Embedded YouTube video"
    />
  )
}
