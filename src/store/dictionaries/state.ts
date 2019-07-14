import { IPlayer } from 'src/models/player'
import { ICountry } from 'src/models/country'

export interface State {
  players: IPlayer[]
  countries: ICountry[]
}

export const state = (): State => ({
  players: [],
  countries: []
})
