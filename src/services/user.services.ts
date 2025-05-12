import { axiosClient } from './request';
import {
  UserFilter,
  UserDetailType,
  UserListResponseType,
  UserBodyType,
  ChangePasswordParams,
  updateInfoParams,
  UserType
} from '@/types';

const userServices = {
  getListPagination(params: UserFilter): Promise<UserListResponseType> {
    return axiosClient.get('/v1/users', { params });
  },
  get(id: string): Promise<UserDetailType> {
    return axiosClient.get(`/v1/users/${id}`);
  },
  updateUser(id: string, body: UserBodyType): Promise<boolean> {
    return axiosClient.patch(`/v1/users/${id}`, body);
  },
  getMe(): Promise<UserType> {
    return axiosClient.get(`/v1/users/info`);
  },
  updateInfo(body: updateInfoParams): Promise<boolean> {
    return axiosClient.put(`/v1/users/info`, body);
  },
  changePassword(body: ChangePasswordParams): Promise<boolean> {
    return axiosClient.patch(`/v1/users/change-password`, body);
  }
};

export default userServices;
