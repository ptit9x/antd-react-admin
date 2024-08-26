import { SortOrder } from '@/constants/common.constants';
import { AxiosError, AxiosResponse } from 'axios';
import type { SVGProps } from 'react';

export interface ListResponse<T> {
  data: T[];
  statusCode: number;
}

export interface Response<T> {
  data: T;
  statusCode: number;
}

export type ErrorResponseType = { errors: Array<{ code: string }> };
export type PageInfoResponseType = {
  page: number;
  pageSize: number;
  totalItem: number;
  totalPage: number;
};

export interface IBaseParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  search?: string;
}

interface CustomError {
  code: string;
  message: string;
  // Add other properties if needed
}

interface CustomErrorData {
  errors?: CustomError[];
  message: string;
  // Add other properties if needed
}

export interface CustomAxiosError extends AxiosError {
  response?: AxiosResponse<CustomErrorData>;
}

export interface IWithPaginateListResponse<T> {
  data: {
    data: T[];
    pageInfo: PageInfoResponseType;
  };
}

export type ValidationError = { type: string; message: string };

export type ValidationErrors = {
  [key: string]: ValidationError[];
};

export type CommonItem = {
  code: string;
  name: string;
};

export type AcceptLanguage = Partial<CommonItem> & {
  i18n?: {
    [x: string]: string | null | undefined;
  } | null;
};

export type ReqParams = {
  page: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
  searchText?: string;
};

export interface ApiResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
}

export interface ApiLoadMoreParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  nextId?: string;
  searchText?: string;
}

export interface ApiLoadMoreResponse<T> {
  items: T[];
  canLoadMore: boolean;
  nextId?: string;
}

export type Paginate = {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
};

export type SvgIconProps = Partial<SVGProps<SVGSVGElement>>;

export type CommonIconProps = SvgIconProps & { width?: number; height?: number; color?: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = { [x: string]: any };

export type ReportClubParams = {
  reportReasons?: Array<string>;
  otherReportReason?: string;
  clubUrl: string;
};
