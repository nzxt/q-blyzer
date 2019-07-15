import { Notify } from 'quasar'
import { axiosInstance } from './axios'
import auth from '../store/auth'

import enUS from '../i18n/en-us/auth'
import ruRU from '../i18n/ru-ru/auth'
import ukUK from '../i18n/uk-uk/auth'

// import { jsonapiModule } from 'jsonapi-vuex'

function isArrayOrString (variable) {
  if (typeof variable === typeof [] || typeof variable === typeof '') {
    return true
  }
  return false
}

export default ({ app, router, store, Vue }) => {
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (!error.response) {
      Notify.create({
        message: app.i18n.t('auth.network_error'),
        color: 'error'
      })
    }
    return Promise.reject(error)
  })

  /**
   * Register i18n
   */
  app.i18n.mergeLocaleMessage('en-us', enUS)
  app.i18n.mergeLocaleMessage('ru-ru', ruRU)
  app.i18n.mergeLocaleMessage('uk-uk', ukUK)

  /**
   * Register auth store
   */
  store.registerModule('auth', auth)

  // store.registerModule('jv', jsonapiModule(axiosInstance, { preserveJson: true }))

  /**
   * Set route guard
   */
  // TODO: Check return's
  router.beforeEach((to, from, next) => {
    const record = to.matched.find(record => record.meta.auth)
    if (record) {
      if (!store.getters['auth/loggedIn']) {
        return router.push('/')
      } else if (isArrayOrString(record.meta.auth) && !store.getters['auth/check'](record.meta.auth)) {
        return router.push('/account')
      }
    }
    next()
  })

  /**
   * Set authentication routes
   */
  let { routes } = router.options
  let routeData = routes.find(r => r.path === '/')
  routeData.children = [
    {
      path: '/login',
      name: 'login',
      component: () => import('pages/auth/Login')
    },
    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: () => import('pages/auth/Logout')
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('pages/auth/Register')
    },
    // {
    //   path: '/verification',
    //   name: 'verification',
    //   component: () => import('pages/auth/Verification')
    // },
    // {
    //   path: '/password',
    //   name: 'password',
    //   component: { render: h => h('router-view') },
    //   children: [
    //     {
    //       path: 'forgot',
    //       name: 'forgot',
    //       component: () => import('pages/auth/password/Forgot')
    //     },
    //     {
    //       path: 'reset',
    //       name: 'reset',
    //       component: () => import('pages/auth/password/Reset')
    //     }
    //   ]
    // },
    {
      path: '/account',
      meta: { auth: true },
      name: 'account',
      component: () => import('pages/auth/Account')
    }
    // {
    //   path: '/admin',
    //   meta: { auth: ['administrator'] },
    //   name: 'admin',
    //   component: { render: h => h('router-view') },
    //   children: [
    //     {
    //       path: 'home',
    //       name: 'adminHome',
    //       component: () => import('pages/auth/Admin')
    //     }
    //   ]
    // }
  ]

  // routeData.children.push({
  //   path: '/superuser',
  //   meta: { auth: ['superuser'] },
  //   name: 'superuser',
  //   component: { render: h => h('router-view') },
  //   children: [
  //     {
  //       path: 'users',
  //       name: 'superuserUsers',
  //       component: () => import('pages/auth/Users')
  //     }
  //   ]
  // })

  router.addRoutes([routeData])

  /* Only _actual_ login/outs (including resets) will be watched here. */
  store.watch((state, getters) => getters['auth/loggedIn'], (isLoggedIn) => {
    /* Follow @nuxtjs/auth workflow */
    if (isLoggedIn) {
      initStore()
      // router.push('/')
    } else {
      // router.push('/')
    }
  })

  function initStore () {
    store.dispatch('account/fetch')
    store.dispatch('dictionaries/fetch')
    store.dispatch('match/fetchList')
    store.dispatch('training/fetchList')
  }

  store.dispatch('auth/fetch')
    .then(() => {
      // if (!store.getters('auth/loggedIn')) return
    })
    .catch(() => {
      store.dispatch('auth/logout')
    })

  var helper = {}
  helper.register = (data) => { return store.dispatch('auth/register', data) }
  helper.loggedIn = () => { return store.getters['auth/loggedIn'] }
  helper.check = (roles) => { return store.getters['auth/check'](roles) }
  helper.login = async (data) => { return store.dispatch('auth/login', data) }
  helper.setToken = (token) => { return store.dispatch('auth/setToken', token) }
  helper.logout = () => { return store.dispatch('auth/logout') }
  helper.refresh = () => { return store.dispatch('auth/refresh') }
  // helper.verify = (token) => { return store.dispatch('auth/verify', token) }
  // helper.passwordForgot = (data) => { return store.dispatch('auth/passwordForgot', data) }
  // helper.passwordReset = (data) => { return store.dispatch('auth/passwordReset', data) }
  helper.fetch = () => { return store.dispatch('auth/fetch') }
  helper.user = () => { return store.getters['auth/user'] }
  Vue.prototype.$auth = helper
}
