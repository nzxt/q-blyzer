import { api } from '../../boot/axios'

export async function fetchList ({ state, commit }) {
  const { page, rowsPerPage, sortBy, descending } = state.pagination

  const pagination = {
    pageNumber: page,
    pageSize: rowsPerPage,
    // filter: '',
    order: `${sortBy} ${descending ? 'DESC' : 'ASC'}`
  }

  await api.ApiMatchGet({...pagination})
    .then(({ data }) => {
      commit('SET_LIST', data.items)
      commit('SET_ROWS_NUMBER', data.itemCount)
    })
}

export async function setPagination ({commit, dispatch}, value) {
  commit('SET_PAGINATION', value)
  await dispatch('fetchList')
}

export function deleteById ({ commit }, id: string) {
  return api.ApiMatchByIdDelete({ id })
    .then(({ data }) => {
      commit('DELETE_BY_ID', data)
    })
}
