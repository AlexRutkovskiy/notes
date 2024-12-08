import type { User } from "@prisma/client"

export interface ISessionUser {
  id: string;
  email: string;
}

export interface IUser extends User{}

export interface IUserSlice {
  user: IUser | null;
  error: string | null;
  isLoading: boolean;
}

export interface IUserFetchData extends ISessionUser {}