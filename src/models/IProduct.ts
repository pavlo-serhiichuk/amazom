interface IBook {
  id: number
  author: string
  title: string
  category: string
  genres: Array<string>
  price: number
  liked: string
  image: Array<string>
  description: string
}

interface IGuitar {
  id: number
  producer: string
  title: string
  category: string
  type: string
  price: number
  liked: string
  image: Array<string>
  description: string
  features: Array<string>
}

interface IVoucher {
  id: number
  title: string
  category: string
  countryId: string
  city: string
  address: string
  rating: string
  price: number
  discount: string
  liked: string
  image: Array<string>
  description: string
  conditions: Array<string>
}

export type IProduct = IBook | IGuitar | IVoucher