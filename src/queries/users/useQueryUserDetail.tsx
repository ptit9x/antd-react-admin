import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query.constant';
import userServices from '@/services/user.services';
import { useParams } from 'react-router-dom';

export default function useQueryUserDetail() {
  const { id } = useParams();
  return useQuery({
    queryKey: [QUERY_KEYS.UserDetail],
    queryFn: () => userServices.get(id as string),
    placeholderData: keepPreviousData,
    enabled: true,
    staleTime: 1000
  });
}
