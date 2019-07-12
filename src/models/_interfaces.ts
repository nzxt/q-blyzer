export interface IRootState {}

export interface IObj {
  id?: number;
  value: string | number;
  text: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface IApiService {
  $axios: any;
  request: Function;
  ApiAccountLoginPost: Function;
  ApiAccountGetProfileGet: Function;
  ApiAccountRegistrationPost: Function;
  ApiAccountRefreshTokensPost: Function;
  ApiAppRoleGet: Function;
  ApiAppRolePut: Function;
  ApiAppRolePost: Function;
  ApiAppRoleByIdGet: Function;
  ApiAppRoleGetDefaultGet: Function;
  ApiAppUserGet: Function;
  ApiAppUserPut: Function;
  ApiAppUserPost: Function;
  ApiAppUserByIdGet: Function;
  ApiAppUserByIdDelete: Function;
  ApiAppUserSetRolesPost: Function;
  ApiAppUserSetPassPost: Function;
  ApiBallGet: Function;
  ApiBallPut: Function;
  ApiBallPost: Function;
  ApiBallByIdGet: Function;
  ApiBallByIdDelete: Function;
  ApiConfigurationGet: Function;
  ApiConfigurationPut: Function;
  ApiConfigurationPost: Function;
  ApiConfigurationByIdGet: Function;
  ApiConfigurationByIdDelete: Function;
  ApiCountryGet: Function;
  ApiCountryPut: Function;
  ApiCountryPost: Function;
  ApiCountryByIdGet: Function;
  ApiCountryByIdDelete: Function;
  ApiMatchGet: Function;
  ApiMatchPut: Function;
  ApiMatchPost: Function;
  ApiMatchByIdGet: Function;
  ApiMatchByIdDelete: Function;
  ApiMatchToPlayerGet: Function;
  ApiMatchToPlayerPut: Function;
  ApiMatchToPlayerPost: Function;
  ApiMatchToPlayerByIdGet: Function;
  ApiMatchToPlayerByIdDelete: Function;
  ApiPlayerGet: Function;
  ApiPlayerPut: Function;
  ApiPlayerPost: Function;
  ApiPlayerByIdGet: Function;
  ApiPlayerByIdDelete: Function;
  ApiStatPost: Function;
  ApiStageGet: Function;
  ApiStagePut: Function;
  ApiStagePost: Function;
  ApiStageByIdGet: Function;
  ApiStageByIdDelete: Function;
  ApiStageToPlayerGet: Function;
  ApiStageToPlayerPut: Function;
  ApiStageToPlayerPost: Function;
  ApiStageToPlayerByIdGet: Function;
  ApiStageToPlayerByIdDelete: Function;
  ApiTournamentGet: Function;
  ApiTournamentPut: Function;
  ApiTournamentPost: Function;
  ApiTournamentByIdGet: Function;
  ApiTournamentByIdDelete: Function;
  ApiTournamentTypeGet: Function;
  ApiTournamentTypePut: Function;
  ApiTournamentTypePost: Function;
  ApiTournamentTypeByIdGet: Function;
  ApiTournamentTypeByIdDelete: Function;
  ApiTrainingGet: Function;
  ApiTrainingPut: Function;
  ApiTrainingPost: Function;
  ApiTrainingByIdGet: Function;
  ApiTrainingByIdDelete: Function;
}
