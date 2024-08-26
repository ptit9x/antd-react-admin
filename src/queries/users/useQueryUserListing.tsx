import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query.constant';
import { useUserStore } from '@/stores/user.store';
import userServices from '@/services/user.services';

export default function useQueryUserListing() {
  const { filterSearch } = useUserStore();

  return useQuery({
    queryKey: [
      QUERY_KEYS.UserListing,
      filterSearch?.search,
      filterSearch?.status,
      filterSearch?.page,
      filterSearch?.pageSize,
      filterSearch?.sortOrder,
      filterSearch?.sortBy,
    ],
    queryFn: () => userServices.getListPagination(filterSearch),
    placeholderData: keepPreviousData,
    enabled: true,
    staleTime: 5000
  });
}
