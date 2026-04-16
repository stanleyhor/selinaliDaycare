import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import en from './en.json';
import zhTW from './zh-TW.json';
import zhCN from './zh-CN.json';

const LANGUAGE_KEY = 'user-language';

const resources = {
  en: { translation: en },
  'zh-TW': { translation: zhTW },
  'zh-CN': { translation: zhCN },
};

export const languageOptions = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'zh-TW', label: '繁', name: '繁體中文' },
  { code: 'zh-CN', label: '简', name: '简体中文' },
];

const getStoredLanguage = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(LANGUAGE_KEY);
  } catch {
    return null;
  }
};

export const setStoredLanguage = async (language: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.warn('Failed to store language preference:', error);
  }
};

const getDeviceLanguage = (): string => {
  const locales = Localization.getLocales();
  if (locales && locales.length > 0) {
    const deviceLang = locales[0].languageTag;
    if (deviceLang.startsWith('zh-Hant') || deviceLang === 'zh-TW' || deviceLang === 'zh-HK') {
      return 'zh-TW';
    }
    if (deviceLang.startsWith('zh')) {
      return 'zh-CN';
    }
  }
  return 'en';
};

export const initI18n = async () => {
  const storedLanguage = await getStoredLanguage();
  const initialLanguage = storedLanguage || getDeviceLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return i18n;
};

export const changeLanguage = async (language: string) => {
  await i18n.changeLanguage(language);
  await setStoredLanguage(language);
};

export default i18n;
