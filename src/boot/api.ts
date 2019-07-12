import axios from 'axios'

// import ApiService from '~/services/api'
// import { IApiService } from '~/types/interfaces' // eslint-disable-line

// export default ({ $axios }, inject): void => {
//   const Api: IApiService = new ApiService({ $axios })

//   inject('api', Api)
// }

const api = axios.create({

})

export default async ({ Vue }) => {
  Vue.prototype.$api = api
}
