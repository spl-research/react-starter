import { Box, Text } from '@mantine/core';
import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '@components/layouts/DashboardLayout';
import { Page } from '@components/page';

const bc = [{ title: 'Settings' }];

export function SettingsPage() {
  return (
    <Page bc={bc} title="Settings">
      <Box m="md">
        <Text>Setting</Text>
      </Box>
    </Page>
  );
}

export const settingRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/settings',
  component: SettingsPage,
});
