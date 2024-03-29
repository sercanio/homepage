import CreateAllTags from './CreateAllTags'
import CreateArchive from './CreateArchive'
import CreateArticleList from './CreateArticleList'

const BlogHome = ({ posts, filteredPosts }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-1 xl:gap-4 -ml-[10px] xl:-ml-5 h-full scroll-smooth justify-between mt-16 md:mt-20 md:mb-6 px-1 max-w-[750px] xl:max-w-5xl">
      <CreateArticleList posts={filteredPosts} />
      <aside
        className="sticky top-16 flex flex-col sm:flex-row xl:flex-col gap-1 h-max mt-20 xl:mt-0"
        style={{ contentVisibility: 'auto' }}
      >
        <CreateAllTags posts={posts} />
        <CreateArchive posts={posts} />
      </aside>
    </div>
  )
}

export default BlogHome
