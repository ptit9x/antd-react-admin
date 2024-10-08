import { RoleStatus, RoleTypes, UserStatus } from "@/constants/user.constants";
import { IBaseParams, PageInfoResponseType } from ".";

export type UserType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  status: UserStatus;
  createdBy?: string;
  phone?: string;
  userAgent?: string;
  avatar?: string;
  ipAddress?: string;
  lastLogin: string;
};

export type PermissionType = {
  id: number;
  name: string;
  type: RoleTypes;
  createdBy?: string;
  status: RoleStatus;
};

export type RoleType = {
  id: number;
  name: string;
  type: RoleTypes;
  createdBy?: string;
  status: RoleStatus;
  permissions: PermissionType[];
};

export type UserDetailType = UserType & {
  role: RoleType;
};

export type UserFilter = {
  status?: UserStatus;
} & IBaseParams;

export type UserListResponseType = PageInfoResponseType & {
  data: UserDetailType[];
};
export type UserParams = {
    userId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    userName: string;
    company: string;
    subscription: string;
    status: boolean;
  }
