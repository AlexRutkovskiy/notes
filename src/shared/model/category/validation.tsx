import { z, ZodIssue } from 'zod';

import { FORM_ERROR, FORM_STATE } from './types';
import { FIELD_NAMES } from './constans';
import { MESSAGE } from './content';

export const validateAuthForm = (data: FORM_STATE): FORM_ERROR | null => {
  let authSchema = z.object({
    [FIELD_NAMES.TITLE]: z.string({
      required_error: MESSAGE.VALIDATION.TITLE_REQUIRED
    }),
    [FIELD_NAMES.DESCRIPTION]: z.string()
  })

  const res = authSchema.partial({[FIELD_NAMES.DESCRIPTION]: true}).safeParse(data)
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