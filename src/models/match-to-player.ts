export interface IMatchToPlayer {
  id?: string;
  bib?: number;
  box: number;
  matchId?: string;
  playerId: string;
  isSubstitutePlayer?: Boolean;
}

export class MatchToPlayer implements IMatchToPlayer {
  constructor (
    box: number,
    playerId: string
  ) {
    this.box = box
    this.playerId = playerId
  }
  isSubstitutePlayer?: Boolean;
  matchId?: string;
  id?: string;
  bib?: number;
  box: number;
  playerId: string;
}
