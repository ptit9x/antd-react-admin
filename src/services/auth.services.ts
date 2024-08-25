import {
  LoginRequestType,
  ILoginAndRefreshResponse,
  IRefreshToken,
  IRegisterResponse,
  ISignUpRequest,
  IChangePasswordRequest,
} from '@/types/auth.types';
import { axiosClient, axiosPublicClient } from './request';

const authServices = {
  login(body: LoginRequestType): Promise<ILoginAndRefreshResponse> {
    return axiosClient.post('/v1/login', body);
  },
  refreshToken(body: IRefreshToken): Promise<ILoginAndRefreshResponse> {
    return axiosPublicClient.post('/v1/refresh', body);
  },
  register(body: ISignUpRequest): Promise<IRegisterResponse> {
    return axiosClient.post('/v1/register', body);
  },
  changePassword(body: IChangePasswordRequest): Promise<void> {
    return axiosClient.post('v1/auth/change-password', body);
  },
};

export default authServices;
