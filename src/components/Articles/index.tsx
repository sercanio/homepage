import Link from 'next/link'
import { PostMeta } from '../../../types'

const Articles = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul className="flex flex-col gap-8 w-[900px] mx-auto">
      {posts.map(post => (
        <li key={post.slug} className="flex flex-col gap-3">
          <h2 className="text-skin-primary text-2xl font-bold">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
          <div className="flex gap-4">
            {post.tags.map(tag => (
              <Link href={`/tags/${tag}`} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
          <p>{post.date}</p>
        </li>
      ))}
    </ul>
  )
}

export default Articles
