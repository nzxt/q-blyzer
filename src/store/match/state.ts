import { IBall } from  'src/models/ball'
// import { IPlayer } from  'src/models/player'
import { IMatch } from  'src/models/match'
import { IPagination } from  'src/models/_interfaces'

export interface State {
  component: string,

  list: IMatch[],
  pagination: IPagination,

  playerId: string | null,
  match: IMatch | null,
  balls: IBall[],
}

export const state = (): State => ({
  component: 'Initial',

  list: [],
  pagination: {
    sortBy: 'dateTimeStamp',
    descending: true,
    page: 1,
    rowsPerPage: 25,
    rowsNumber: 0
  },

  playerId: null,
  match: null,
  balls: []
})
