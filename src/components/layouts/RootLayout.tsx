import { theme } from '@common/constant/theme';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const queryClient = new QueryClient();
export function RootLayout() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ScrollRestoration />
        <TanStackRouterDevtools />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export const rootRoute = createRootRoute({
  component: RootLayout,
});
