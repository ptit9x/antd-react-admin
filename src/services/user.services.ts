import { axiosClient } from './request';
import {
  UserFilter,
  UserDetailType,
  UserListResponseType,
} from '@/types';

const userServices = {
  getListPagination(params: UserFilter): Promise<UserListResponseType> {
    return axiosClient.get('/v1/users', { params });
  },
  getDetail(id: string): Promise<UserDetailType> {
    return axiosClient.get(`/v1/users/${id}`);
  },
};

export default userServices;
