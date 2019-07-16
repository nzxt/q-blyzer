import axios from 'axios'
import qs from 'qs'

import ApiService from 'src/services/api'

const axiosInstance = axios.create({
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: process.env.API_URL || 'http://127.0.0.1:2450'
})

const api = new ApiService({ $axios: axiosInstance })

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
  Vue.prototype.$api = api
}

export { api, axiosInstance }
