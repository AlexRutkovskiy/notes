import { AVAILABLE_URL_NOT_ACTIVE_USER, ERROR } from '@/shared/utils/consts';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message as string;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return error.message as string;
  }

  return ERROR.SERVER.GENERAL_ERROR
}

export const checkIsAvailablePath = (path: string, isActiveUser: boolean) => {
  if (isActiveUser) return true;

  return AVAILABLE_URL_NOT_ACTIVE_USER.includes(path);
}