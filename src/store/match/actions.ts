import { api } from 'src/boot/axios'

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

export function resetMatch ({ commit }) {
  commit('SET_COMPONENT', 'Results')
  // commit('SET_LIST', [])
  commit('SET_MATCH', null)
  commit('SET_PLAYER_ID', null)
  commit('SET_BALLS', [])
}

export function clearState ({ dispatch, commit }) {
  dispatch('resetMatch')
  commit('SET_LIST', [])
  commit('SET_PAGINATION', {
    sortBy: 'dateTimeStamp',
    descending: true,
    page: 1,
    rowsPerPage: 25,
    rowsNumber: 0
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
