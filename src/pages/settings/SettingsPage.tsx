import { Text } from '@mantine/core';
import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '@components/layouts/DashboardLayout';
import { Page, TabProps } from '@components/page';

const bc = [{ title: 'Settings' }];
const tabs = [
  { title: 'Appearance', default: 'true' },
  { title: 'Account' },
  { title: 'Profile' },
  { title: 'Billing' },
] as TabProps[];

export function SettingsPage() {
  return (
    <Page bc={bc} tabs={tabs} title="Settings">
      <Text>Setting</Text>
    </Page>
  );
}

export const settingRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/settings',
  component: SettingsPage,
});
