import axios from 'axios'

const api = axios.create({

})

export default async ({ Vue }) => {
  Vue.prototype.$api = api
}
