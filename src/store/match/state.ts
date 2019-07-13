import { IBall } from  '../../models/ball'
import { IPlayer } from  '../../models/player'
import { IMatch } from  '../../models/match'
import { IPagination } from  '../../models/_interfaces'

export interface State {
  component: string,

  list: IMatch[],
  pagination: IPagination,

  player: IPlayer | null,
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

  player: null,
  match: null,
  balls: []
})
