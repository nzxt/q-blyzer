import { State } from './state'
import { IBall } from '../../models/ball'
// import { IPlayer } from '../../models/player'
import { ITraining } from '../../models/training'
import { IPagination } from 'src/models/_interfaces';

// export const types = {
//   SET_COMPONENT: 'SET_COMPONENT',
//   SET_TRAINING: 'SET_TRAINING',
//   SET_PLAYER: 'SET_PLAYER',
//   ADD_BALL: 'ADD_BALL',
//   SET_SHOT_TYPE: 'SET_SHOT_TYPE',
//   SET_SHOT_DISTANCE: 'SET_SHOT_DISTANCE',
// }

export function SET_COMPONENT (state: State, value: string) { state.component = value }

export function SET_PLAYER_ID (state: State, value: string | null) { state.playerId = value }

export function SET_TRAINING (state: State, value: ITraining | null) { state.training = value }

export function SET_DETAILS (state: State, value: Array<any>) { state.details = value }

export function SET_BALLS (state: State, value: IBall[]) { state.balls = value }

export function ADD_BALL (state: State, value: IBall) { state.balls.push(value) }

export function SET_SHOT_BOX (state: State, value: number) { state.shotBox = value }

export function SET_SHOT_TYPE (state: State, value: number) { state.shotType = value }

export function SET_SHOT_DISTANCE (state: State, value: number) { state.shotDistance = value }

export function SET_LIST (state: State, value: ITraining[]) { state.list = value }

export function SET_PAGINATION (state: State, value: IPagination) { state.pagination = value }

export function SET_ROWS_NUMBER (state: State, value: number) { state.pagination.rowsNumber = value }

export function DELETE_BY_ID (state: State, id: string) {
  const index = state.list.findIndex(t => t.id === id)
  state.list.splice(index, 1)
}

export function DELETE_BALL_BY_ID (state: State, id: string) {
  const index = state.balls.findIndex(t => t.id === id)
  state.balls.splice(index, 1)
}
