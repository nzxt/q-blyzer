import { State } from './state'
import { IAppUser } from '../../models/app-user'
// import { IPlayer } from '../../models/player'

// export const types = {
//   SET_COMPONENT: 'SET_COMPONENT',
//   SET_TRAINING: 'SET_TRAINING',
//   SET_PLAYER: 'SET_PLAYER',
//   ADD_BALL: 'ADD_BALL',
//   SET_SHOT_TYPE: 'SET_SHOT_TYPE',
//   SET_SHOT_DISTANCE: 'SET_SHOT_DISTANCE',
//   CLEAR_STATE: 'CLEAR_STATE'
// }

export function SET_APP_USER (state: State, value: IAppUser) { state.appUser = value }

// export function SET_PLAYER (state: State, value: IPlayer) { state.player = value }

// export function DELETE_BY_ID (state: State, id: string) {
//   const index = state.list.findIndex(t => t.id === id)
//   state.list.splice(index, 1)
// }
