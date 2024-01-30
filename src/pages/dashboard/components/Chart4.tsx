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
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];

export function Chart4() {
  return (
    <Card px="md" py={50} shadow="sm" withBorder>
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        type="split"
        strokeWidth={1}
        dotProps={{ r: 2, strokeWidth: 1 }}
        activeDotProps={{ r: 3, strokeWidth: 1 }}
        series={[{ name: 'Apples', color: 'bright' }]}
      />
    </Card>
  );
}
