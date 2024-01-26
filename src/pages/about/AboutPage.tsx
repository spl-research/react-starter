import { rootRoute } from '@components/layouts';
import { createRoute } from '@tanstack/react-router';

function AboutPage() {
  return <h1>About</h1>;
}

export const aboutRoute = createRoute({
  path: '/about',
  component: AboutPage,
  getParentRoute: () => rootRoute,
});
