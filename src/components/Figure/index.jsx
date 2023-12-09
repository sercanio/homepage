import Image from 'next/image'
import Link from 'next/link'

export default function Figure(props) {
  const { width, height, src, alt, quality, caption, source } = props
  const url = new URL(source)
  return (
    <figure>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        quality={quality}
        className="mx-auto py-2"
      />
      <figcaption className="text-center">
        <strong className="block">{caption}</strong>
        <em className="block">
          Source:&nbsp;
          <Link href={source} className="text-red-500">
            {url.hostname}
          </Link>
        </em>
      </figcaption>
    </figure>
  )
}
