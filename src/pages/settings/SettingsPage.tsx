import { Box, Text } from '@mantine/core';
import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '@components/layouts/DashboardLayout';
import { PageHeader } from '@components/page';

export function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" />
      <Box m="md">
        <Text>Setting</Text>
      </Box>
    </>
  );
}

export const settingRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/settings',
  component: SettingsPage,
});
