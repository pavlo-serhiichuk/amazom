import axios from 'axios'

const serverURL = 'http://localhost:1122/'
export const productsLimit = 12

const getAll = async (url: string, page: number = 1) => await axios.get(`${serverURL}${url}`, {
  params: {
    _page: page,
      _limit: productsLimit
  }
})

const getSingle = async (url: string, page: number = 1) => await axios.get(`${serverURL}${url}`)

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
    return getAll(`products?category=${category}`, page)
  },
  getProductsSortedByPrice(category: string, order: string = 'asc') {
    return getAll(`products?category=${category}&_sort=price&_order=${order}`)
  },
  getCurrentProduct(category: string, productId: number) {
    return getSingle(`products?category=${category}&id=${productId}`)
  }
}

export const preorderAPI = {
  getPreorderProducts(productsIds: string) {
    return getSingle(`products?id=${productsIds}`)
  }
}

export const articlesAPI = {
  getArticles(page: number = 1) {
    return getAll('articles', page)
  }
}

export const searchAPI = {
  getSearchedProducts(query: string) {
    return axios.get(`http://localhost:1122/products?title_like=${query}`)
  }
}

export const getLocalStorageIds = (key: string) => localStorage.getItem(key)
export const setLocalStorageIds = (key: string, value: string) => localStorage.setItem(key, value)
