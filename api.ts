import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'
import { Post } from '@/types'

const POST_PATH = path.join(process.cwd(), 'posts')
export const getSlugs = (): string[] => {
  const paths = glob.sync(`${POST_PATH}/*.md`.replace(/\\/g, '/'))
  // because of the windows path, we need to replace the backslashes with forward slashes
  // on linux and mac, this is not necessary
  // this code is not tested on mac or linux
  // if you are on mac or linux, please test this code and let me know if it works

  return paths.map(path => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]
    return filename.replace(/\.md$/, '')
  })
}

export const getAllPosts = () => {
  const posts = getSlugs()
    .map(slug => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return posts
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POST_PATH, `${slug}.md`)
  const source = fs.readFileSync(postPath, 'utf8')
  const { content, data } = matter(source)

  const headingLines = source.split('\n').filter(line => line.match(/^#+\s/))
  const headings = headingLines.map(raw => {
    const text = raw.replace(/^#+\s/, '')
    const level = raw.split(' ')[0].length
    return { text, level }
  })

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      image: data.image ?? '',
      headings: headings,
      related: data.related ?? []
    }
  }
}
