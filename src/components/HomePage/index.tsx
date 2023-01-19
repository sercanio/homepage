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
    <div className="flex flex-col xl:flex-row gap-1 xl:gap-4 h-full scroll-smooth justify-between relative">
      <CreateArticleList posts={filteredPosts} />
      <aside
        className="sticky top-0 flex flex-col mr-4 h-max"
        style={{ contentVisibility: 'auto' }}
      >
        <CreateAllTags posts={posts} />
        <CreateArchive posts={posts} />
      </aside>
    </div>
  )
}

export default HomePage
