import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

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
    plugins: [createPersistedState(
      // key <String>: The key to store the persisted state under. (default: vuex)
      // paths <Array>: An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. (default: [])
      // reducer <Function>: A function that will be called to reduce the state to persist based on the given paths. Defaults to include the values.
      // subscriber <Function>: A function called to setup mutation subscription. Defaults to store => handler => store.subscribe(handler)
      //
      // storage <Storage>: Instead for (or in combination with) getState and setState. Defaults to localStorage (or internal storage for Server Side Rendering).
      //
      // getState <Function>: A function that will be called to rehydrate a previously persisted state. Defaults to using storage.
      // setState <Function>: A function that will be called to persist the given state. Defaults to using storage.
    )],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
}
