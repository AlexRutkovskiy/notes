import { fetchApi } from '@/shared/api';
import { API_URLS } from "@/shared/utils/consts";
import { NewCategory } from "../model/types"
import { ICategory } from '@/shared/model/category/types';

export const createNewCategory = (data: NewCategory): Promise<ICategory> => {
    return fetchApi(API_URLS.CATEGORY.NEW, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
