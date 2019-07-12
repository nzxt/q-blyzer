import { IPlayer } from './player'

export interface IBox {
  id: number;
  teamColor: string;
  player?: IPlayer;
}
