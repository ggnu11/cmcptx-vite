import { QueryProvider } from './query';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
}; 