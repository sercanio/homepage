export interface ThemeState {
  theme: string
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
export interface HeaderTypes {
  theme?: string
}

export type ToggleTypes = {
  enabled?: boolean
}
