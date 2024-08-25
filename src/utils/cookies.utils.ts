import Cookies from 'js-cookie';
import { CookieAttributes } from 'node_modules/@types/js-cookie';

export const deleteCookie = (name: string, options?: CookieAttributes) =>
  Cookies.remove(name, options);
export const getCookie = (name: string) => Cookies.get(name);
export const setCookie = (name: string, data: string, options?: CookieAttributes) =>
  Cookies.set(name, data, options);
