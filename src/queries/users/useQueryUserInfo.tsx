import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query.constant';
import userServices from '@/services/user.services';

export default function useQueryUserInfo() {
  return useQuery({
    queryKey: [QUERY_KEYS.UserInfo],
    queryFn: () => userServices.getMe(),
    placeholderData: keepPreviousData,
    enabled: true,
    staleTime: 5000
  });
}
