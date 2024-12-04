import { z, ZodIssue } from 'zod';

import { FORM_ERROR, FORM_STATE, TabType } from './types';
import { TAB, FIELD_NAMES } from './constans';
import { MESSAGE } from './content';

export const validateAuthForm = (data: FORM_STATE, formType: TabType): FORM_ERROR | null => {
  let authSchema = z.object({
    [FIELD_NAMES.EMAIL]: z.string().email(),
    [FIELD_NAMES.PASSWORD]: z.string()
      .min(6, MESSAGE.VALIDATION.PASSWORD_MIN_LENGTH)
      .regex(/(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/, MESSAGE.VALIDATION.PASSWORD_SYMBOL)
  })

  if(formType === TAB.REGISTER) {
    authSchema = authSchema.extend({
      [FIELD_NAMES.FULL_NAME]: z.string().min(2, MESSAGE.VALIDATION.FULL_NAME_MIN_LENGTH),
    })
  }

  const res = authSchema.safeParse(data)
  if (!res.success) {
    const error: FORM_ERROR = {}
    res.error.format((issue: ZodIssue) => {
      const name = issue.path[0];
      const message = issue.message;
      error[name] = error[name] ? [...error[name], message] : [message]
    })

    return error;
  }

  return null
}