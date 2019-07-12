import { IBall } from './ball'
import { IStageToPlayer } from './stage-to-player'

export interface IStage {
  id?: string;
  matchId: string;
  index: number;
  isDisrupted?: Boolean;
  isTieBreak?: Boolean;
  scoreRed?: number;
  scoreBlue?:	number;
  avgPointRed?: number;
  avgPointBlue?: number;
  balls?: IBall[];
  stageToPlayers?: IStageToPlayer[];
}

export class Stage implements IStage {
  constructor (
    index: number,
    matchId: string
  ) {
    this.index = index
    this.matchId = matchId
    this.balls = []
    this.stageToPlayers = []
  }
  id?: string;
  index: number;
  matchId: string;
  isDisrupted?: Boolean;
  isTieBreak?: Boolean;
  scoreRed?: number;
  scoreBlue?: number;
  balls?: IBall[];
  stageToPlayers?: IStageToPlayer[];
}
