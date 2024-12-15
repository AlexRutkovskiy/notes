import { useMemo } from 'react';

import { Content } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { useLocalStorage } from '@/shared/hooks';
import { TRANSLATE } from '@/shared/utils/consts';

export const ActivateUser = () => {
  const { storageValue, updateStorageValue } = useLocalStorage('activateUser');
  const date = Date.now();

  return useMemo(() => {
    if (!storageValue || date > storageValue) {
      const newDate = Date.now() + ( 3600 * 1000 * 24);
      return (
        <Button onClick={() => updateStorageValue(newDate)}>
          <Content tag="span">{TRANSLATE.SETTINGS_PAGE.ACTIVATE}</Content>
        </Button>
      )
    }

    if (date < storageValue) {
      return (
        <>
          <Content>{TRANSLATE.SETTINGS_PAGE.DESCRIPTION.FIRST}</Content>
          <Content>{TRANSLATE.SETTINGS_PAGE.DESCRIPTION.SECOND}</Content>
        </>
      )
    }
  }, [storageValue, date]);
}