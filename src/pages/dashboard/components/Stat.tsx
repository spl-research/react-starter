import { Sparkline } from '@mantine/charts';
import { Card } from '@mantine/core';

export function Stat() {
  return (
    <Card p={0} shadow="sm" withBorder>
      <Sparkline
        w={200}
        h={60}
        data={[10, 20, 40, 20, 40, 10, 50]}
        curveType="linear"
        color="blue"
        fillOpacity={0.6}
        strokeWidth={2}
      />
    </Card>
  );
}
