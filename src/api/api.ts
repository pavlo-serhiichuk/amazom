import axios from 'axios'

const serverURL = 'http://localhost:1122/'

const get = async (url: string) => await axios.get(`${serverURL}${url}`)
const post = async (url: string, data: any) => await axios.post(`${serverURL}${url}`, data)
const put = async (url: string, data: any) => await axios.put(`${serverURL}${url}`, {data})

export const authAPI = {
  signIn(email: string, password: string) {
    return post('signin', {email, password})
  },
  login(username: string, email: string, password: string) {
    return put('register', {username, email, password})
  }
}

export const productsAPI = {
  getProducts(category: string) {
    return get(category)
  }
}