import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { resourceKeys } from '@/shared/lib/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      // v5에서는 기본적으로 성능 최적화가 되어있어 notifyOnChangeProps 옵션이 필요없음
    },
  },
});

// 메인 리소스에 대한 기본 설정
queryClient.setQueryDefaults(resourceKeys.main, {
  gcTime: Infinity,
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}; 