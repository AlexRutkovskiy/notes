import { fetchApi } from '@/shared/api';
import { API_URLS } from '@/shared/utils/consts';
import { EmailProps } from '@/feature/activateUser/model/types';

export const sendEmail = async (data: EmailProps) => {
  return await fetchApi(API_URLS.SEND_EMAIL, {
    method: 'post',
    body: JSON.stringify(data)
  })
}