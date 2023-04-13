import * as React from 'react'
import { PostMeta } from '@/types'
import CreateAllTags from './CreateAllTags'
import CreateArchive from './CreateArchive'
import CreateArticleList from './CreateArticleList'
const BlogHome = ({
  posts,
  filteredPosts
}: {
  posts: PostMeta[]
  filteredPosts: PostMeta[]
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 xl:gap-4 -ml-[10px] xl:-ml-5 h-screen scroll-smooth justify-between w-full max-w-5xl mt-16 md:mt-20 md:mb-6 px-1">
      <CreateArticleList posts={filteredPosts} />
      <aside
        className="sticky top-16 flex flex-col gap-1 h-max max-w-[280px]"
        style={{ contentVisibility: 'auto' }}
      >
        <CreateAllTags posts={posts} />
        <CreateArchive posts={posts} />
      </aside>
    </div>
  )
}

export default BlogHome
