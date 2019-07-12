import { axiosInstance } from 'boot/axios'
import { Cookies } from 'quasar'

const LOGIN_ROUTE = '/api/account/login'
const REGISTER_ROUTE = '/api/account/registration'
const FETCH_USER_ROUTE = '/api/account/getprofile'
const VERIFICATION_ROUTE = '/auth/verify'
const PASSWORD_FORGOT_ROUTE = '/auth/password/forgot'
const PASSWORD_RESET_ROUTE = '/auth/password/reset'

export function register (state, data) {
  return axiosInstance.post(REGISTER_ROUTE, data)
}

export function login (state, data) {
  const p = new Promise(function (resolve, reject) {
    return axiosInstance.post(LOGIN_ROUTE, data.body).then((response) => {
      // state.commit('setUser', response.data.user.data)
      const token = response.data.accessToken
      axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
      state.dispatch('setToken', { token: token, rememberMe: data.rememberMe })
      state.dispatch('fetch')
      resolve()
    }).catch((error) => {
      reject(error)
    })
  })
  return p
}

export function setToken (state, data) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
  if (data.rememberMe) {
    Cookies.set('authorization_token', data.token, {
      expires: 365
    })
  } else {
    Cookies.set('authorization_token', data.token)
  }
}

export function fetch (state) {
  var token = Cookies.get('authorization_token')
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return axiosInstance.get(FETCH_USER_ROUTE).then((response) => {
      state.commit('setUser', response.data)
    })
  }
  // if (LocalStorage.has('token')) {
  //   token = LocalStorage.getItem('token')
  // } else if (SessionStorage.has('token')) {
  //   token = SessionStorage.getItem('token')
  // }
  // if (token) {
  //   axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  //   return axiosInstance.get(FETCH_USER_ROUTE).then((response) => {
  //     state.commit('setUser', response.data.data)
  //   })
  // }
}

export function logout (state) {
  // if (LocalStorage.has('token')) {
  //   LocalStorage.remove('token')
  // } else if (SessionStorage.has('token')) {
  //   SessionStorage.remove('token')
  // }
  Cookies.remove('authorization_token')
  state.commit('setUser', null)
}

export function verify (state, token) {
  return axiosInstance.get(VERIFICATION_ROUTE + '?token=' + token)
}
export function passwordForgot (state, data) {
  return axiosInstance.post(PASSWORD_FORGOT_ROUTE, data)
}

export function passwordReset (state, { token, data }) {
  return axiosInstance.post(PASSWORD_RESET_ROUTE + '?token=' + token, data)
}
