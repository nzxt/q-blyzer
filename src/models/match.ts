import { IStage } from './stage'
import { IMatchToPlayer } from './match-to-player'

export interface IMatch {
  id?: string;
  dateTimeStamp: Date;
  matchType?: number;
  competitionEvent?: number;
  poolStage?: number;
  eliminationStage?: number;
  scoreRed?: number;
  scoreBlue?: number;
  appUserId: string;
  trainingId?: string;
  tournamentId?: string;
  matchToPlayers?: IMatchToPlayer[];
  stages?: IStage[];
}

export class Match implements IMatch {
  constructor (
    dateTimeStamp: Date = new Date(),
    appUserId: string
  ) {
    this.dateTimeStamp = dateTimeStamp
    this.appUserId = appUserId
    this.matchToPlayers = []
    this.stages = []
  }
  id?: string;
  dateTimeStamp: Date;
  matchType?: number;
  competitionEvent?: number;
  poolStage?: number;
  eliminationStage?: number;
  scoreRed?: number;
  scoreBlue?: number;
  avgPointRed?: number;
  avgPointBlue?: number;
  flagRed?: string;
  flagBlue?: string;
  appUserId: string;
  trainingId?: string;
  tournamentId?: string;
  matchToPlayers?: IMatchToPlayer[];
  stages?: IStage[];
}
