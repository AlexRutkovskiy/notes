import { useCallback, useMemo, useState } from 'react';

import { Content } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { useLocalStorage } from '@/shared/hooks';
import { ERROR, TRANSLATE } from '@/shared/utils/consts';
import { EmailProps } from '@/feature/activateUser/model/types';
import { sendEmail } from '@/feature/activateUser/api/sendEmail';

interface ActivateUserProps {
  data: EmailProps
}

export const ActivateUser = ({
  data,
}: ActivateUserProps) => {
  const { storageValue, updateStorageValue } = useLocalStorage('activateUser');
  const [error, setError] = useState('')
  const date = Date.now();

  const handleClickActivate = useCallback(async () => {
    try {
      const newDate = Date.now() + ( 3600 * 1000 * 24);
      updateStorageValue(newDate)
      await sendEmail(data)
    } catch (e) {
      console.log(e)
      setError(ERROR.CLIENT.GENERAL_ERROR)
    }
  }, [])

  return useMemo(() => {
    if (!storageValue || date > storageValue) {

      return (
        <Button onClick={handleClickActivate}>
          <Content tag="span">{TRANSLATE.SETTINGS_PAGE.ACTIVATE}</Content>
        </Button>
      )
    }

    if (date < storageValue) {
      return (
        <>
          <Content>{TRANSLATE.SETTINGS_PAGE.DESCRIPTION.FIRST}</Content>
          <Content>{TRANSLATE.SETTINGS_PAGE.DESCRIPTION.SECOND}</Content>
          {error && <Content>{error}</Content>}
        </>
      )
    }
  }, [storageValue, date]);
}