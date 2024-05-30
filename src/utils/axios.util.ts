import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((request) => {
  return request
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
