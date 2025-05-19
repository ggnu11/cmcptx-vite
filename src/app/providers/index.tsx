import { QueryProvider } from './query';
import { I18nProvider } from './i18n';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </QueryProvider>
  );
}; 