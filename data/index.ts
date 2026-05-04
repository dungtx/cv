import { getCurrentLocale } from '@/locales/server';
import { Data } from '@/types/data';
import { AppConfig, LocaleId } from '@/app.config';

import en from '@/data/en';
import vi from '@/data/vi';

export const getData = () => {
  const data: {
    [key in LocaleId]: Data;
  } = {
    en,
    vi,
  };

  let locale: keyof typeof data;

  try {
    locale = getCurrentLocale();
  } catch (e) {
    locale = AppConfig.defaultLocale as keyof typeof data;
  }

  return data[locale] as Data;
};
