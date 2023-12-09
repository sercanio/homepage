import classNames from 'classnames'

export default function Spotify({ size, link }) {
  const spotifyPlayerClass = classNames({
    'rounded-xl mx-auto': true,
    'h-[232px] w-[98%] my-8': size == 'normal',
    'h-[80px] w-[85%] my-2': size == 'inline'
  })

  const trackId = link.split('/').pop()?.split('?').shift()

  return (
    <iframe
      title="Spotify Player"
      className={spotifyPlayerClass}
      src={`https://open.spotify.com/embed/track/${trackId}`}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
