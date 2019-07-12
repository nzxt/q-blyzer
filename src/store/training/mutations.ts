import { State } from './state'
import { IBall } from '../../models/ball'
import { IPlayer } from '../../models/player'
import { ITraining } from '../../models/training'

// export const types = {
//   SET_COMPONENT: 'SET_COMPONENT',
//   SET_TRAINING: 'SET_TRAINING',
//   SET_PLAYER: 'SET_PLAYER',
//   ADD_BALL: 'ADD_BALL',
//   SET_SHOT_TYPE: 'SET_SHOT_TYPE',
//   SET_SHOT_DISTANCE: 'SET_SHOT_DISTANCE',
//   CLEAR_STATE: 'CLEAR_STATE'
// }

export function SET_COMPONENT (state: State, value: string) { state.component = value }

export function SET_PLAYER (state: State, value: IPlayer) { state.player = value }

export function SET_LIST (state: State, value: ITraining[]) { state.list = value }

export function SET_TRAINING (state: State, value: ITraining) { state.training = value }

export function ADD_BALL (state: State, value: IBall) { state.balls.push(value) }

export function SET_SHOT_TYPE (state: State, value: number) { state.shotType = value }

export function SET_SHOT_DISTANCE (state: State, value: number) { state.shotDistance = value }

export function CLEAR_STATE (state: State) {
  state.component = 'Initial'
  state.player = null
  state.training = null
  state.balls = []
  state.shotType = null
  state.shotDistance = null
}
