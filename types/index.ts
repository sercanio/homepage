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
