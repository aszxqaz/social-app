import _axios from 'axios'

export const axios = _axios.create({
  baseURL: process.env.NEXTAUTH_URL
})