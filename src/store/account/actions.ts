import { api } from 'src/boot/axios'
import { pick } from 'src/utils/helpers'
import { IAppUser } from 'src/models/app-user';

export async function fetch ({ rootState, commit }) {
  const { id } = rootState.auth.user
  await api.ApiAppUserByIdGet({ id })
    .then(({ data }) => {
      const _data = pick(data, 'id', 'userName', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'playerId', 'countryId', 'roleId')
      commit('SET_APP_USER', _data)
    })
}

export async function update ({ dispatch }, value: IAppUser) {
  await api.ApiAppUserPut({ ...value })
    .then(() => dispatch('fetch'))
}
