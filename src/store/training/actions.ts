import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
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

export async function setPagination ({ commit, dispatch }, value) {
  commit('SET_PAGINATION', value)
  await dispatch('fetchList')
}

export async function setTraining ({ commit, dispatch }, value) {
  commit('SET_TRAINING', value)
  await dispatch('fetchById', value.id)
}

export async function createTraining ({ dispatch }, item) {
  await api.ApiTrainingPost({ item })
    .then(async ({ data }) => {
      await dispatch('fetchById', data)
      Notify.create({
        message: 'Training created!',
        color: 'positive'
      })
    })
}

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
  commit('SET_DETAILS', null)
  commit('SET_PLAYER_ID', null)
  commit('SET_BALLS', [])
  commit('SET_SHOT_TYPE', null)
  commit('SET_SHOT_DISTANCE', null)
}
