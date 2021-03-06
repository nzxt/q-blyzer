import { State } from './state'
import { IBall } from 'src/models/ball'
// import { IPlayer } from 'src/models/player'
import { IMatch } from 'src/models/match'
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

export function SET_PLAYER_ID (state: State, value: string) { state.playerId = value }

export function SET_MATCH (state: State, value: IMatch) { state.match = value }

export function SET_BALLS (state: State, value: IBall[]) { state.balls = value }

export function ADD_BALL (state: State, value: IBall) { state.balls.push(value) }

export function SET_LIST (state: State, value: IMatch[]) { state.list = value }

export function SET_PAGINATION (state: State, value: IPagination) { state.pagination = value }

export function SET_ROWS_NUMBER (state: State, value: number) { state.pagination.rowsNumber = value }

export function DELETE_BY_ID (state: State, id: string) {
  const index = state.list.findIndex(t => t.id === id)
  state.list.splice(index, 1)
}
