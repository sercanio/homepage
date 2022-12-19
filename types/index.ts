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
