export interface IBall {
  id?: string;
  index: number;
  rating?: number;
  isJack?: Boolean;
  isPenalty?: Boolean;
  isDeadBall?: Boolean;
  deadBallType?: number;
  shotType?: number;
  box?: number;
  distance?: number;
  stageId?: string;
  playerId: string;
  trainingId?: string;
}

export class Ball implements IBall {
  constructor (
    index: number,
    playerId: string
  ) {
    this.index = index
    this.playerId = playerId
  }
  id?: string;
  index: number;
  rating?: number;
  isJack?: Boolean;
  isPenalty?: Boolean;
  isDeadBall?: Boolean;
  deadBallType?: number;
  shotType?: number;
  box?: number;
  distance?: number;
  stageId?: string;
  playerId: string;
  trainingId?: string;
}
