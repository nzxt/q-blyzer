import { Notify } from 'quasar'
import { api } from 'src/boot/axios'

export async function fetchList ({ state, commit }) {
  const { page, rowsPerPage, sortBy, descending } = state.pagination

  const pagination = {
    pageNumber: page,
    pageSize: rowsPerPage,
    // filter: '',
    order: `${sortBy} ${descending ? 'DESC' : 'ASC'}`
  }

  await api.ApiTrainingGet({...pagination})
    .then(({ data }) => {
      commit('SET_LIST', data.items)
      commit('SET_ROWS_NUMBER', data.itemCount)
    })
}

export async function setPagination ({commit, dispatch}, value) {
  commit('SET_PAGINATION', value)
  await dispatch('fetchList')
}

export async function createTraining ({dispatch}, item) {
  await api.ApiTrainingPost({ item })
    .then(({ data }) => {
      dispatch('fetchById', data)
      Notify.create({
        message: 'Training created!',
        color: 'positive'
      })
    })
}

export function fetchById ({ commit }, id: string) {
  return api.ApiTrainingByIdGet({ id })
    .then(({ data }) => {
      commit('SET_TRAINING', data)
    })
}

export function deleteById ({ commit }, id: string) {
  return api.ApiTrainingByIdDelete({ id })
    .then(({ data }) => {
      commit('DELETE_BY_ID', data)
    })
}
