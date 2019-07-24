import { IBall } from './ball'
import { IMatch } from './match'

export interface ITraining {
  id?: string;
  dateTimeStamp: Date;
  appUserId: string;
  balls?: IBall[];
  matches?: IMatch[];
}

export class Training implements ITraining {
  constructor (
    dateTimeStamp: Date,
    appUserId: string
  ) {
    this.dateTimeStamp = dateTimeStamp
    this.appUserId = appUserId
  }
  id?: string;
  dateTimeStamp: Date;
  appUserId: string;
  balls?: IBall[];
  matches?: IMatch[];
}
