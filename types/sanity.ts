export type MainCategory = {
  title?: string
  description?: string
  id?: string
  images?: {
    asset: {
      id: string
    }
  }
  slug?: {
    current: string
  }
}

export type Product = MainCategory & {
  featured: boolean
}
