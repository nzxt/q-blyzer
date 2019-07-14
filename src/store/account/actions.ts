import { Notify } from 'quasar'
import { omit } from 'lodash'
import { api } from 'src/boot/axios'
// import { pick  } from 'src/utils/helpers'
import { IAppUser } from 'src/models/app-user'

export async function fetch ({ rootState, commit }) {
  const { id } = rootState.auth.user
  await api.ApiAppUserByIdGet({ id })
    .then(({ data }) => {
      // const _data = pick(data, 'id', 'userName', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'playerId', 'countryId', 'roleId', 'passwordHash', "securityStamp", "concurrencyStamp", "emailConfirmed", "phoneNumberConfirmed", "twoFactorEnabled", "lockoutEnabled")
      const _data = omit(data, ['createdOn', 'updatedOn', 'createdBy', 'updatedBy', 'matches', 'trainings'])
      commit('SET_APP_USER', _data)
    })
}

export async function update ({ dispatch }, value: IAppUser) {
  await api.ApiAppUserPut({ item: value })
    .then(() => {
      Notify.create({
        message: 'Successfully updated!', // this.$i18n.t('messages.success'),
        color: 'positive'
      })
      dispatch('fetch')
    })
}
