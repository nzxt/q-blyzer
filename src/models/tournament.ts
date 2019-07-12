export interface ITournament {
  id?:	string;
  name:	string;
  tournamentTypeId: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export class Tournament implements ITournament {
  constructor (
    name: string,
    tournamentTypeId: string
  ) {
    this.name = name
    this.tournamentTypeId = tournamentTypeId
  }
  id?: string
  name: string;
  tournamentTypeId: string;
  dateFrom?: Date;
  dateTo?: Date;
}
