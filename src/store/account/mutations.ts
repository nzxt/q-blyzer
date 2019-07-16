import { State } from './state'
import { IAppUser } from 'src/models/app-user'

export function SET_APP_USER (state: State, value: IAppUser) { state.appUser = value }
