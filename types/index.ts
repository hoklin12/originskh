export interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
  highlight?: boolean
}

export interface TeamMember {
  name: string
  position: string
  image: string
}

export interface PortfolioItem {
  title: string
  categories: string
  image: string
  link: string
}

export interface ClientLogo {
  name: string
  logo: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavItem {
  id: string
  label: string
  sectionId: string
}
