export enum TAB {
  LOGIN = 'login',
  REGISTER = 'register'
}

export const FIELD_NAMES = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  PASSWORD: 'password',
}

export const DEFAULT_FORM_STATE = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: ''
}