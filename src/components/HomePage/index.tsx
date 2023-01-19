import * as React from 'react'
import { PostMeta } from '@/types'
import CreateAllTags from './CreateAllTags'
import CreateArchive from './CreateArchive'
import CreateArticleList from './CreateArticleList'
const HomePage = ({
  posts,
  filteredPosts
}: {
  posts: PostMeta[]
  filteredPosts: PostMeta[]
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 h-full scroll-smooth justify-between">
      <CreateArticleList posts={filteredPosts} />
      <aside>
        <CreateAllTags posts={posts} />
        <CreateArchive posts={posts} />
      </aside>
    </div>
  )
}

export default HomePage
