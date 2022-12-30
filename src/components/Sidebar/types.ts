export type ItemType = "internal" | "external";

type SubItemProps = {
    name: string
    href: string
    badge?: number
  }

export type ItemObjectProps = {
    name: string
    
    badge?: number
    href?: string
    active?: boolean
    icon?: JSX.Element
    exact?: boolean
    items?: Array<SubItemProps>
    callback?: any
    type?: ItemType
  }