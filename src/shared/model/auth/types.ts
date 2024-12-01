import { TAB, DEFAULT_FORM_STATE } from '@/shared/model/auth/constans';

export type TabType = TAB.LOGIN | TAB.REGISTER;

export type FORM_STATE = typeof DEFAULT_FORM_STATE

export type FORM_ERROR = Record<Partial<keyof FORM_STATE>, string[]>