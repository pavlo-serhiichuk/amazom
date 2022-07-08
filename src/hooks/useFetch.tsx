// import {useEffect, useState} from 'react'
// import axios from 'axios'
// import {serverURL} from '../api/api'
//
// export const useFetch = (url: string, setLoading: (isLoading: boolean) => void, setError: (message: string) => void) => {
export const useFetch = () => {}
//   const [data, setData] = useState(url)
//
//   const fetchData = () => {
//     try {
//       setLoading(true)
//       axios.get(`${serverURL}${url}`).then((data: any) => data.json()).then(json => setData(json))
//     } catch (e: any) {
//       setError(e.message)
//     } finally {
//       setLoading(false)
//     }
//   }
//
//   useEffect(() => {
//     fetchData()
//   }, [])
//
//   return {data}
// }