import axios from 'axios'

const API = axios.create({
  baseURL: '',

  timeout: 10000
})

export default API
