/* eslint-disable */
import qs from 'qs'
export default class ApiService {
  constructor(ctx) {
    this.$axios = ctx.$axios
  }
  request(method, url, body, queryParameters, form, config) {
    method = method.toLowerCase()
    let keys = Object.keys(queryParameters)
    let queryUrl = url
    if (keys.length > 0) {
      queryUrl = url + '?' + qs.stringify(queryParameters)
    }
    if (body) {
      return this.$axios[method](queryUrl, body, config)
    } else if (method === 'get') {
      return this.$axios[method](queryUrl, config)
    } else {
      return this.$axios[method](queryUrl, qs.stringify(form), config)
    }
  }
  /*==========================================================
   *                    Boccialyzer Web API
   ==========================================================*/
  /**
   * Авторизація користувача
   * request: ApiAccountLoginPost
   * @param loginModel - Модель авторизації
   */
  ApiAccountLoginPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Account/Login'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['loginModel'] !== undefined) {
      body = parameters['loginModel']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати профіль користувача
   * request: ApiAccountGetProfileGet
   */
  ApiAccountGetProfileGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Account/GetProfile'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Реєстрація нового користувача
   * request: ApiAccountRegistrationPost
   * @param item - Модель реєстрації
   */
  ApiAccountRegistrationPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Account/Registration'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Оновлення токенів
   * request: ApiAccountRefreshTokensPost
   * @param item - Модель токенів
   */
  ApiAccountRefreshTokensPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Account/RefreshTokens'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiAppRoleGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiAppRoleGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppRole'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiAppRolePut
   * @param item - Об'єкт
   */
  ApiAppRolePut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppRole'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiAppRolePost
   * @param item - Новий об'єкт
   */
  ApiAppRolePost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppRole'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiAppRoleByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiAppRoleByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppRole/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Отримати ідентифікатор ролі за замовчуванням
   * request: ApiAppRoleGetDefaultGet
   */
  ApiAppRoleGetDefaultGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppRole/GetDefault'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiAppUserGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiAppUserGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати користувача
   * request: ApiAppUserPut
   * @param item - Користувач
   */
  ApiAppUserPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiAppUserPost
   * @param item - Модель реєстрації
   */
  ApiAppUserPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiAppUserByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiAppUserByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiAppUserByIdDelete
   * @param id - Ідентифікатор
   */
  ApiAppUserByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Призначити ролі користувачу
   * request: ApiAppUserSetRolesPost
   * @param rolesModel - Модель для додавання ролей користувачу
   */
  ApiAppUserSetRolesPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser/SetRoles'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['rolesModel'] !== undefined) {
      body = parameters['rolesModel']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Встановити новий пароль
   * request: ApiAppUserSetPassPost
   * @param userId - Ідентифікатор користувача
   * @param pass - Новий пароль
   */
  ApiAppUserSetPassPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/AppUser/SetPass'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['userId'] !== undefined) {
      queryParameters['userId'] = parameters['userId']
    }
    if (parameters['pass'] !== undefined) {
      queryParameters['pass'] = parameters['pass']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiBallGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiBallGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Ball'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiBallPut
   * @param item - Об'єкт
   */
  ApiBallPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Ball'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiBallPost
   * @param item - Новий об'єкт
   */
  ApiBallPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Ball'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiBallByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiBallByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Ball/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiBallByIdDelete
   * @param id - Ідентифікатор
   */
  ApiBallByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Ball/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiConfigurationGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiConfigurationGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Configuration'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiConfigurationPut
   * @param item - Об'єкт
   */
  ApiConfigurationPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Configuration'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiConfigurationPost
   * @param item - Новий об'єкт
   */
  ApiConfigurationPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Configuration'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiConfigurationByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiConfigurationByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Configuration/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiConfigurationByIdDelete
   * @param id - Ідентифікатор
   */
  ApiConfigurationByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Configuration/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiCountryGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiCountryGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Country'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiCountryPut
   * @param item - Об'єкт
   */
  ApiCountryPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Country'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiCountryPost
   * @param item - Новий об'єкт
   */
  ApiCountryPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Country'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiCountryByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiCountryByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Country/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiCountryByIdDelete
   * @param id - Ідентифікатор
   */
  ApiCountryByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Country/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiMatchGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiMatchGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Match'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiMatchPut
   * @param item - Об'єкт
   */
  ApiMatchPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Match'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiMatchPost
   * @param item - Новий об'єкт
   */
  ApiMatchPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Match'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiMatchByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiMatchByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Match/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiMatchByIdDelete
   * @param id - Ідентифікатор
   */
  ApiMatchByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Match/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiMatchToPlayerGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiMatchToPlayerGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/MatchToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiMatchToPlayerPut
   * @param item - Об'єкт
   */
  ApiMatchToPlayerPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/MatchToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiMatchToPlayerPost
   * @param item - Новий об'єкт
   */
  ApiMatchToPlayerPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/MatchToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiMatchToPlayerByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiMatchToPlayerByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/MatchToPlayer/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiMatchToPlayerByIdDelete
   * @param id - Ідентифікатор
   */
  ApiMatchToPlayerByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/MatchToPlayer/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiPlayerGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiPlayerGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Player'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiPlayerPut
   * @param item - Об'єкт
   */
  ApiPlayerPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Player'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiPlayerPost
   * @param item - Новий об'єкт
   */
  ApiPlayerPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Player'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiPlayerByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiPlayerByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Player/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiPlayerByIdDelete
   * @param id - Ідентифікатор
   */
  ApiPlayerByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Player/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiStageGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiStageGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stage'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiStagePut
   * @param item - Об'єкт
   */
  ApiStagePut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stage'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiStagePost
   * @param item - Новий об'єкт
   */
  ApiStagePost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stage'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiStageByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiStageByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stage/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiStageByIdDelete
   * @param id - Ідентифікатор
   */
  ApiStageByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stage/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiStageToPlayerGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiStageToPlayerGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/StageToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiStageToPlayerPut
   * @param item - Об'єкт
   */
  ApiStageToPlayerPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/StageToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiStageToPlayerPost
   * @param item - Новий об'єкт
   */
  ApiStageToPlayerPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/StageToPlayer'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiStageToPlayerByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiStageToPlayerByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/StageToPlayer/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiStageToPlayerByIdDelete
   * @param id - Ідентифікатор
   */
  ApiStageToPlayerByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/StageToPlayer/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати статистику
   * request: ApiStatPost
   * @param param - Параметри статистики
   */
  ApiStatPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Stat'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['param'] !== undefined) {
      body = parameters['param']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiTournamentGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiTournamentGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Tournament'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiTournamentPut
   * @param item - Об'єкт
   */
  ApiTournamentPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Tournament'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiTournamentPost
   * @param item - Новий об'єкт
   */
  ApiTournamentPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Tournament'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiTournamentByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiTournamentByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Tournament/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiTournamentByIdDelete
   * @param id - Ідентифікатор
   */
  ApiTournamentByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Tournament/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiTournamentTypeGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiTournamentTypeGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/TournamentType'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiTournamentTypePut
   * @param item - Об'єкт
   */
  ApiTournamentTypePut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/TournamentType'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiTournamentTypePost
   * @param item - Новий об'єкт
   */
  ApiTournamentTypePost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/TournamentType'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiTournamentTypeByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiTournamentTypeByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/TournamentType/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiTournamentTypeByIdDelete
   * @param id - Ідентифікатор
   */
  ApiTournamentTypeByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/TournamentType/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
  /**
   * Отримати список (пагінація)
   * request: ApiTrainingGet
   * @param pageNumber - Номер сторінки (за замовчуванням 1)
   * @param pageSize - Кількість записів на сторінку (за замовчуванням 25)
   * @param filter - Фільтр
   * @param order - Сортування
   */
  ApiTrainingGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Training'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNumber'] !== undefined) {
      queryParameters['pageNumber'] = parameters['pageNumber']
    }
    if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['filter'] !== undefined) {
      queryParameters['filter'] = parameters['filter']
    }
    if (parameters['order'] !== undefined) {
      queryParameters['order'] = parameters['order']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Модифікувати запис
   * request: ApiTrainingPut
   * @param item - Об'єкт
   */
  ApiTrainingPut(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Training'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('put', path, body, queryParameters, form, config)
  }
  /**
   * Створити новий запис
   * request: ApiTrainingPost
   * @param item - Новий об'єкт
   */
  ApiTrainingPost(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Training'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['item'] !== undefined) {
      body = parameters['item']
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('post', path, body, queryParameters, form, config)
  }
  /**
   * Отримати деталі за ідентифікатором
   * request: ApiTrainingByIdGet
   * @param id - Ідентифікатор запису
   */
  ApiTrainingByIdGet(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Training/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('get', path, body, queryParameters, form, config)
  }
  /**
   * Видалити запис
   * request: ApiTrainingByIdDelete
   * @param id - Ідентифікатор
   */
  ApiTrainingByIdDelete(parameters = {}) {
    const config = parameters.$config
    let path = '/api/Training/{id}'
    let body
    let queryParameters = {}
    let form = {}
    path = path.replace('{id}', `${parameters['id']}`)
    if (parameters['id'] === undefined) {
      return Promise.reject(new Error('Missing required  parameter: id'))
    }
    if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
        queryParameters[parameterName] = parameters.$queryParameters[parameterName]
      });
    }
    return this.request('delete', path, body, queryParameters, form, config)
  }
}