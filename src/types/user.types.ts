import { RoleStatus, RoleTypes, UserStatus } from "@/constants/user.constants";

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
