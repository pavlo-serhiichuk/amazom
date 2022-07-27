import axios from 'axios'

const serverURL = 'http://localhost:1122/'
export const productsLimit = 12

const get = async (url: string, page: number = 1) => await axios.get(`${serverURL}${url}`, {
  params: {
    _page: page,
      _limit: productsLimit
  }
})

const post = async (url: string, data: any) => await axios.post(`${serverURL}${url}`, data)
const put = async (url: string, data: any) => await axios.put(`${serverURL}${url}`, {data})

export const authAPI = {
  login(email: string, password: string) {
    return post('signin', {email, password})
  },
  signUp(firstName: string, lastName: string, email: string, password: string) {
    return put('register', {firstName, lastName, email, password})
  }
}

export const productsAPI = {
  getProducts(category: string, page: number = 1) {
    return get(`products?category=${category}`, page)
  },
  getCurrentProduct(category: string, productId: number) {
    return get(`products?category=${category}&id=${productId}`)
  },
  getCartProduct(cartId: string) {
    return get(`products?id=${cartId}`)
  },
  getWishesProduct(wishId: string) {
    return get(`products?id=${wishId}`)
  }
}

export const preorderAPI = {
  getPreorderProducts(productsURL: string) {
    return get(`products?id=${productsURL}`)
  }
}

export const articlesAPI = {
  getArticles(page: number = 1) {
    return get('articles', page)
  }
}