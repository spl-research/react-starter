import { createRouter } from '@tanstack/react-router';
import { dashboardRoute, rootRoute } from '@components/layouts';
import { indexRoute } from '@pages/home';
import { dashboardIndexRoute } from '@pages/dashboard';
import { aboutRoute } from '@pages/about';
import { settingRoute } from '@pages/settings';

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  dashboardRoute.addChildren([dashboardIndexRoute, settingRoute]),
]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
