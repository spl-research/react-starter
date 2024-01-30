import { SIDEBAR_WIDTH } from '@common/constant/const';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, createRoute } from '@tanstack/react-router';
import { Sidebar } from '@components/sidebar';
import { rootRoute } from './RootLayout';

export function DashboardLayout() {
  const [opened] = useDisclosure();
  return (
    <AppShell
      navbar={{
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
        width: SIDEBAR_WIDTH,
      }}
    >
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export const dashboardRoute = createRoute({
  path: 'd',
  component: DashboardLayout,
  getParentRoute: () => rootRoute,
});
