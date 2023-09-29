import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import React from 'react'

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

export interface IChildren {
  children: React.ReactNode
}

export interface MainTypes extends IChildren {
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

export interface Related {
  title: string
  url: string
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
  related: Related[]
}

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}

export interface MonthsAndArticles {
  month: string
  articleNumber: number
}

export interface FigureTypes {
  src: string
  width: number
  height: number
  alt: string
  quality?: number
  caption: string
  source: string
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}

export interface ContactFormTypes {
  firstName: string
  lastName: string
  email: string
}
