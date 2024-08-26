import { create } from 'zustand';
import { UserFilter } from '@/types/user.types';
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '@/constants/common.constants';

type UserStateType = {
  filterSearch: UserFilter;
};

type UserActionType = {
  setFilterSearch: (filterSearch: UserFilter) => void;
  resetFilter: () => void;
};

const defaultFilter = {
  page: PAGE_DEFAULT,
  pageSize: PAGE_SIZE_DEFAULT,
};

export const useUserStore = create<UserStateType & UserActionType>((set) => ({
  filterSearch: defaultFilter,
  setFilterSearch: (filterSearch) => set((state) => ({ ...state, filterSearch })),
  resetFilter: () => set((state) => ({ ...state, filterSearch: defaultFilter })),
}));
