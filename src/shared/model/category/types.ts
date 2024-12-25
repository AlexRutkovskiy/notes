import { Category } from "@prisma/client"
import { DEFAULT_FORM_STATE } from '@/shared/model/category/constans';

export type FORM_STATE = typeof DEFAULT_FORM_STATE

export type FORM_ERROR = Record<Partial<keyof FORM_STATE>, string[] | null>

export interface ICategory extends Category {}

export interface ICategorySlice {
    categories: ICategory[];
    error: string | null;
    isLoading: boolean;
}
