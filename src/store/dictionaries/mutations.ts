import { State } from './state'
import { IPlayer } from '../../models/player'
import { ICountry } from '../../models/country'

// export const types = {
//   SET_PLAYERS: 'SET_PLAYERS',
//   SET_COUNTRIES: 'SET_COUNTRIES',
// }

export function SET_PLAYERS (state: State, value: IPlayer[]) { state.players = value }

export function SET_COUNTRIES (state: State, value: ICountry[]) { state.countries = value }
