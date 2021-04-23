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

export type Product = {
  title?: string
  description?: string
  id?: string
  featured: boolean
  keywords?: string
  slug?: {
    current: string
  }
  images?: [
    {
      asset: {
        id: string
      }
    }
  ]
  category: {
    slug: {
      current: string
    }
    mainCategory: {
      slug: {
        current: string
      }
    }
  }
}
export type Category = MainCategory & {
  mainCategory?: {
    id: string
    slug?: {
      current: string
    }
  }
}
