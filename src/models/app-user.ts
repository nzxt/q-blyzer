export interface IAppUser {
  id?: string
  userName: string
  password?: string
  firstName?: string
  lastName?: string
  gender?: number
  dateOfBirth?: Date
  playerId?: string
  countryId?: string
  roleId?: string
}

export class AppUser implements IAppUser {
  constructor (
    userName: string,
    password: string
  ) {
    this.userName = userName
    this.password = password
  }
  id?: string;
  userName: string
  password: string
  firstName?: string
  lastName?: string
  gender?: number
  dateOfBirth?: Date
  playerId?: string
  countryId?: string
  roleId?: string
}
