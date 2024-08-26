export enum QUERY_KEYS {
  UserListing = 'UserListing',
  UserDetail = 'UserDetail',
}

export const MINUTE = 60 * 1000;
export const STALE_TIME = 5 * MINUTE;
export const GC_TIME = 10 * MINUTE;
export const RETRY_QUERY_TIMES = 3;
export const RETRY_MUTATION_TIMES = 1;
