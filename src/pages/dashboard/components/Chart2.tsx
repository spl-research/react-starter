import { AreaChart } from '@mantine/charts';
import { Card } from '@mantine/core';

const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];

export function Chart2() {
  return (
    <Card px="md" py={50} shadow="sm" withBorder>
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6' }]}
        curveType="linear"
        connectNulls
      />
    </Card>
  );
}
