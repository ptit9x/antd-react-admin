export enum RoleTypes {
  Admin = 1,
  User = 2,
}

export enum RoleStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export const UserLabel = {
  [UserStatus.ACTIVE]: "Active",
  [UserStatus.INACTIVE]: "InActive"
}