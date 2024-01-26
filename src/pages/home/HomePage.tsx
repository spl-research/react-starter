import { Center } from '@mantine/core';
import { Link, createRoute } from '@tanstack/react-router';
import { rootRoute } from '@components/layouts';

export function HomePage() {
  return (
    <Center h="100vh" w="100%">
      <Link to="/d" className="[&.active]:font-bold">
        Dashboard
      </Link>
    </Center>
  );
}

export const indexRoute = createRoute({
  path: '/',
  component: HomePage,
  getParentRoute: () => rootRoute,
});
