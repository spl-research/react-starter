import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { RootLayout } from '@components/layouts';
import { AboutPage } from '@pages/about';
import { HomePage } from '@pages/home';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  path: '/',
  component: HomePage,
  getParentRoute: () => rootRoute,
});

const aboutRoute = createRoute({
  path: '/about',
  component: AboutPage,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
