import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/shared/i18n/locales/en';
import ko from '@/shared/i18n/locales/ko';

i18next.use(initReactI18next).init({
  resources: {
    en,
    ko,
  },
  lng: import.meta.env.VITE_APP_LANG || 'ko', // Vite 환경변수 사용
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}; 