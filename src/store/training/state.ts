import { IBall } from  '../../models/ball'
import { IPlayer } from  '../../models/player'
import { ITraining } from  '../../models/training'
import { IPagination } from  '../../models/_interfaces'

export interface State {
  component: string,

  list: ITraining[],
  pagination: IPagination,

  training: ITraining | null,
  player: IPlayer | null,
  balls: IBall[],
  shotType: number | null,
  shotDistance: number | null
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

  training: null,
  player: null,
  balls: [],
  shotType: null,
  shotDistance: null
})
