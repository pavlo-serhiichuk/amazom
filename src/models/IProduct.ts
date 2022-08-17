interface IBook {
  id: number
  title: string
  price: number
  category: string
  description: string
  liked: string
  image: Array<string>
  author: string
  genres: Array<string>
}

interface IGuitar {
  id: number
  title: string
  price: number
  category: string
  description: string
  liked: string
  image: Array<string>
  producer: string
  type: string
  features: Array<string>
}

interface IVoucher {
  id: number
  title: string
  price: number
  category: string
  description: string
  liked: string
  image: Array<string>
  city: string
  address: string
  rating: number
  discount: string
  countryId: string
  conditions: Array<string>
}

export type IProduct = IBook & IGuitar & IVoucher
