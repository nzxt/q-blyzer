export interface IAppUser {
  id?: string
  userName: string
  password?: string
  firstName?: string
  lastName?: string
  gender?: number
  dateOfBirth?: string
  playerId?: string
  countryId?: string
  roleId?: string
  passwordHash?: string
  securityStamp?: string
  concurrencyStamp?: string
  emailConfirmed?: Boolean
  phoneNumberConfirmed?: Boolean
  twoFactorEnabled?: Boolean
  lockoutEnabled?: Boolean
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
  dateOfBirth?: string
  playerId?: string
  countryId?: string
  roleId?: string
  passwordHash?: string
  securityStamp?: string
  concurrencyStamp?: string
  emailConfirmed?: Boolean
  phoneNumberConfirmed?: Boolean
  twoFactorEnabled?: Boolean
  lockoutEnabled?: Boolean
}
