import { ERROR } from '@/shared/utils/consts';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message as string;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return error.message as string;
  }

  return ERROR.SERVER.GENERAL_ERROR
}