import { IBall } from  '../../models/ball'
import { IPlayer } from  '../../models/player'
import { ITraining } from  '../../models/training'

export interface State {
  list: ITraining[],
  component: string,
  player: IPlayer | null,
  training: ITraining | null,
  balls: IBall[],
  shotType: number | null,
  shotDistance: number | null
}

export const state = (): State => ({
  list: [],
  component: 'Initial',
  player: null,
  training: null,
  balls: [],
  shotType: null,
  shotDistance: null
})
