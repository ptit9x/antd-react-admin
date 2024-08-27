import { RoleType } from "./user.types";

export interface ILoginAndRefreshResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpire: number;
  refreshTokenExpiry: number;
  isFirstTimeLogin: boolean;
}

export interface IRefreshToken {
  refreshToken: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  otp: string;
}

export interface IRegisterResponse {
  success: boolean;
}

export type LoginRequestType = {
  email: string;
  password: string;
};

export interface IToken {
  exp: number;
  iat: number;
  sub: string;
  email: string;
  name: string;
  role: RoleType;
}


export type RegisterParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type ResetPasswordParams = {
  email: string;
}

export type ChangePasswordParams = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
