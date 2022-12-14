export interface HomeProps {
  Theme?: string
  backgroundColor?: string
}

export interface LayoutChildrenProps {
  children: React.ReactNode
}

export type ToggleTypes = {
  enabled?: boolean
}

export type HeaderTypes = {
  theme?: string
}
