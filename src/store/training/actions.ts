import { api } from '../../boot/axios'

export async function fetchList ({ commit }) {
  await api.ApiTrainingGet({})
    .then(({ data }) => {
      commit('SET_LIST', data.items)
    })
}
