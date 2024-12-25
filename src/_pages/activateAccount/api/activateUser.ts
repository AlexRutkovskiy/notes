import { API_URLS } from "@/shared/utils/consts"
import { fetchApi } from "@/shared/api"

export const activateUserAccount = async (id: string) => {
    return await fetchApi(API_URLS.ACTIVATE_ACCOUNT, {
        method: 'POST',
        body: JSON.stringify({slug: id})
    })
}