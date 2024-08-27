import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEn from '@/locales/en/common.json';
import commonVi from '@/locales/vi/common.json';
import authEn from '@/locales/en/auth.json';
import authVi from '@/locales/vi/auth.json';
import userEn from '@/locales/en/user.json';
import userVi from '@/locales/vi/user.json';

import profileVi from '@/locales/vi/profile.json';
import profileEn from '@/locales/en/profile.json';

import { LocalStorageKey } from './constants/local-storage.constants';

const currentLanguage = localStorage.getItem(LocalStorageKey.i18nextLng);
const language = currentLanguage || 'en';

const resources = {
  en: {
    common: commonEn,
    auth: authEn,
    user: userEn,
    profile: profileEn,
  },
  vi: {
    common: commonVi,
    auth: authVi,
    user: userVi,
    profile: profileVi,
}} as const;

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: language,
  fallbackLng: 'en',
  resources,
});

export const getLanguage = () => i18n.language || language;

export default i18n;
