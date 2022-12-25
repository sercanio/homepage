import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'

export interface ThemeState {
  theme: string
}

export interface WelcomeState {
  welcomed: boolean
}
export interface HomeProps {
  Theme?: string
  backgroundColor?: string
}

export interface LayoutChildrenProps {
  children: React.ReactNode
  className?: string
}
export interface MainTypes {
  children: React.ReactNode
  className?: string
}

export interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement>
  placeholder: string
  type: string
  user?: string
  onKeyDown?:
    | ((e: React.KeyboardEvent<HTMLInputElement>) => void)
    | ((e: React.FormEvent<HTMLInputElement>) => void)
}

export interface Post {
  content: string
  meta: PostMeta
}

export interface Headings {
  text: string
  level: number
}

export interface PostMeta {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  date: string
  image: string
  headings: Headings[]
}

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}
