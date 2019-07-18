import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { IBall } from 'src/models/ball'
import { ITraining } from 'src/models/training'
import { IPagination } from 'src/models/_interfaces'
import { getShotTypeName, getShotTypeAbbr, getShotDistanceName } from 'src/utils/enums-helper'

export async function fetchList ({ state, commit }) {
  const { page, rowsPerPage, sortBy, descending } = state.pagination

  const pagination = {
    pageNumber: page,
    pageSize: rowsPerPage,
    // filter: '',
    order: `${sortBy} ${descending ? 'DESC' : 'ASC'}`
  }
  await api.ApiTrainingGet({ ...pagination })
    .then(({ data }) => {
      commit('SET_LIST', data.items)
      commit('SET_ROWS_NUMBER', data.itemCount)
    })
}

export async function setPagination ({ commit, dispatch }, value: IPagination) {
  commit('SET_PAGINATION', value)
  await dispatch('fetchList')
}

export async function setTraining ({ commit, dispatch }, value: ITraining) {
  commit('SET_TRAINING', value)
  await dispatch('fetchById', value.id)
}

export async function createTraining ({ dispatch, commit }, item: ITraining) {
  await api.ApiTrainingPost({ item })
    .then(async ({ data }) => {
      item.id = data
      // await dispatch('fetchTraining', data)
      commit('SET_TRAINING', item)
      Notify.create({
        color: 'positive',
        icon: 'mdi-check-circle-outline',
        message: 'Training created!'
      })
    })
}

// export async function fetchTraining ({ commit }, id: string) {
//   await api.ApiTrainingGet({ filter: `id="${id}"` })
//     .then(({ data }) => {
//       commit('SET_TRAINING', data.items[0])
//     })
// }

export async function fetchById ({ commit }, id: string) {
  await api.ApiTrainingByIdGet({ id })
    .then(({ data }) => {
      data.map((x) => {
        x.id = JSON.stringify(x)
        x.shotTypeName = getShotTypeName(x.shotType)
        x.shotTypeAbbr = getShotTypeAbbr(x.shotType)
        x.shotDistanceName = getShotDistanceName(x.distance)
      })
      commit('SET_DETAILS', data)
    })
}

export function deleteById ({ commit }, id: string) {
  return api.ApiTrainingByIdDelete({ id })
    .then(({ data }) => {
      commit('DELETE_BY_ID', data)
    })
}

export function resetTraining ({ commit }) {
  commit('SET_COMPONENT', 'Results')
  commit('SET_TRAINING', null)
  commit('SET_DETAILS', [])
  commit('SET_PLAYER_ID', null)
  commit('SET_BALLS', [])
  commit('SET_SHOT_BOX', null)
  commit('SET_SHOT_TYPE', null)
  commit('SET_SHOT_DISTANCE', null)
}

export function clearState ({ dispatch, commit }) {
  dispatch('resetTraining')
  commit('SET_LIST', [])
  commit('SET_PAGINATION', {
    sortBy: 'dateTimeStamp',
    descending: true,
    page: 1,
    rowsPerPage: 25,
    rowsNumber: 0
  })
}

export async function createBall ({ commit }, item: IBall): Promise<any> {
  await api.ApiBallPost({ item })
    .then(({ data }) => {
      item.id = data
      commit('ADD_BALL', item)
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        icon: 'mdi-alert-octagon-outline',
        message: 'Ball creation failed :('
      })
    })
}

export async function deleteBallById ({ commit }, id: string) {
  await api.ApiBallByIdDelete({ id })
    .then(({ data }) => {
      commit('DELETE_BALL_BY_ID', data)
      Notify.create({
        color: 'positive',
        icon: 'mdi-check-circle-outline',
        message: 'Ball deleted sucessfully!'
      })
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        icon: 'mdi-alert-octagon-outline',
        message: 'Ball deletion failed!'
      })
    })
}
