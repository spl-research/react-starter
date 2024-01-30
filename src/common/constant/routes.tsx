import { createRouter } from '@tanstack/react-router';
import { dashboardRoute, rootRoute } from '@components/layouts';
import { aboutRoute } from '@pages/about';
import { dashboardIndexRoute } from '@pages/dashboard';
import { notfoundRoute } from '@pages/error/NotFound';
import { indexRoute } from '@pages/home';
import { settingRoute } from '@pages/settings';

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  dashboardRoute.addChildren([
    dashboardIndexRoute,
    settingRoute,
    notfoundRoute,
  ]),
]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
