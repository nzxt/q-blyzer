import { api } from 'src/boot/axios'
import { pick } from 'src/utils/helpers'
import { IPlayer } from 'src/models/player'
import { ICountry } from 'src/models/country'


export async function fetch ({ dispatch }) {
  dispatch('fetchPlayers')
  dispatch('fetchCountries')
}

export async function fetchPlayers ({ commit }) {
  await api.ApiPlayerGet({ pageSize: 1000 })
    .then(({ data }) => {
      // const _data: IPlayer[] = pick(data, 'id', 'userName', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'playerId', 'countryId', 'roleId')
      commit('SET_PLAYERS', data.items)
    })
}

export async function fetchCountries ({ commit }) {
  await api.ApiCountryGet({ pageSize: 1000 })
    .then(({ data }) => {
      // const _data: ICountry[] = pick(data, 'id', 'userName', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'playerId', 'countryId', 'roleId')
      commit('SET_COUNTRIES', data.items)
    })
}
