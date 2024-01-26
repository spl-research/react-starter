import { Box, Grid } from '@mantine/core';
import { createRoute } from '@tanstack/react-router';
import { dashboardRoute } from '@components/layouts/DashboardLayout';
import { PageHeader } from '@components/page';
import { Chat1 } from './components/Chart1';
import { Chart2 } from './components/Chart2';
import { Chart3 } from './components/Chart3';

const gridSpan = { base: 12, md: 12, lg: 12, xl: 6 };

export function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Box p="md" h="200vh">
        <Grid>
          <Grid.Col span={gridSpan}>
            <Chat1 />
          </Grid.Col>
          <Grid.Col span={gridSpan}>
            <Chart2 />
          </Grid.Col>
          <Grid.Col span={gridSpan}>
            <Chart3 />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

export const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/',
  component: DashboardPage,
});
