import { QueryClient } from '@tanstack/react-query';

import { GC_TIME, RETRY_MUTATION_TIMES, RETRY_QUERY_TIMES, STALE_TIME } from './query.constant';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      gcTime: GC_TIME,
      retry: RETRY_QUERY_TIMES,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true
    },
    mutations: {
      retry: RETRY_MUTATION_TIMES,
      onError: (error) => {
        console.error('Mutation Error:', error);
      }
    }
  }
});

export { queryClient };
