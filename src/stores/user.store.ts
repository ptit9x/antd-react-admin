import { create } from 'zustand';
import { UserFilter, UserType } from '@/types/user.types';
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '@/constants/common.constants';

type UserStateType = {
  filterSearch: UserFilter;
  profile?: UserType;
};

type UserActionType = {
  setFilterSearch: (filterSearch: UserFilter) => void;
  resetFilter: () => void;
  setUserDetail: (profile?: UserType) => void;
};

const defaultFilter = {
  page: PAGE_DEFAULT,
  pageSize: PAGE_SIZE_DEFAULT
};

export const useUserStore = create<UserStateType & UserActionType>((set) => ({
  filterSearch: defaultFilter,
  profile: undefined,
  setFilterSearch: (filterSearch) => set((state) => ({ ...state, filterSearch })),
  resetFilter: () => set((state) => ({ ...state, filterSearch: defaultFilter })),
  setUserDetail: (profile) => set((state) => ({ ...state, profile }))
}));
