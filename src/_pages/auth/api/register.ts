import { fetchApi } from "@/shared/api";
import { REGISTER_DATA } from "../model/type";
import { API_URLS } from "@/shared/utils/consts";

export const userRegister = async (data: REGISTER_DATA) => {
    return await fetchApi(API_URLS.REGISTER, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
