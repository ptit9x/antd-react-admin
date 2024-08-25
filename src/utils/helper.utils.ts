import dayjs from 'dayjs';

export const formatDateTime = (date: string | Date, format = 'DD/MM/YYYY hh:mm:ss'): string => {
  return dayjs(date).format(format);
};

export const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// eslint-disable-next-line
export const debounce = <T extends Function>(cb: T, delay = 300) => {
  let timeout: NodeJS.Timeout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
