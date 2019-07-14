import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import match from './match'
import training from './training'
import dictionaries from './dictionaries'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      account,
      match,
      training,
      dictionaries
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
}
