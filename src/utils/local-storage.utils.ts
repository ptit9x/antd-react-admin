
import { LocalStorageKey } from '@/constants/local-storage.constants';
import { parseJSON } from './json.utils';

const setItemLocalStorage = <T>(key: LocalStorageKey, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event('local-storage'));
};
const getItemLocalStorage = <T>(key: LocalStorageKey): T | null | undefined => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  return parseJSON<T>(itemStr);
};

const setItemLocalStorageWithExpiry = <T>(key: LocalStorageKey, value: T, ttl: number) => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getItemLocalStorageWithExpiry = (key: LocalStorageKey) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

const removeItemLocalStorage = (key: LocalStorageKey) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event('local-storage'));
};
const clearLocalStorage = () => {
  const locales = localStorage.getItem(LocalStorageKey.i18nextLng);
  localStorage.clear();
  if (locales) localStorage.setItem(LocalStorageKey.i18nextLng, locales);
  window.dispatchEvent(new Event('local-storage'));
};

export {
  setItemLocalStorage,
  getItemLocalStorage,
  setItemLocalStorageWithExpiry,
  getItemLocalStorageWithExpiry,
  removeItemLocalStorage,
  clearLocalStorage,
};
