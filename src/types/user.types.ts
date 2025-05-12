import { RoleStatus, RoleTypes, UserStatus } from '@/constants/user.constants';
import { IBaseParams, PageInfoResponseType } from '.';

export type UserType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  kycLevel: number;
  status: UserStatus;
  createdBy?: string;
  phone?: string;
  userAgent?: string;
  avatar?: string;
  ipAddress?: string;
  lastLogin: string;
  role: RoleType;
};

export type UserBodyType = {
  status?: UserStatus;
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

export type UserStatisticType = {
  userId: string;
  point: number;
  exp: number;
  streak: number;
  lives: number;
};

export type UserDetailType = UserType & {
  role: RoleType;
  userStatistics?: UserStatisticType;
  rank: string;
};

export type UserFilter = {
  status?: UserStatus;
} & IBaseParams;

export type UserListResponseType = PageInfoResponseType & {
  data: UserDetailType[];
};
export type updateInfoParams = {
  name: string;
  phone: string;
};
