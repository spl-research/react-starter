import { Anchor, Box, Breadcrumbs, Group, Title } from '@mantine/core';
import classes from './PageHeader.module.css';

const items = [
  { title: 'Mantine', href: '/d' },
  { title: 'Mantine hooks', href: '/d/settings' },
].map((item) => (
  <Anchor href={item.href} key={item.title}>
    {item.title}
  </Anchor>
));

interface PageHeaderProps {
  title?: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className={classes.header}>
      <Box>
        <Breadcrumbs>{items}</Breadcrumbs>
        <Breadcrumbs separator=">" mt="xs">
          {items}
        </Breadcrumbs>
      </Box>
      <div className={classes.inner}>
        <Group>
          <Title order={2}>{title}</Title>
        </Group>
      </div>
    </header>
  );
}
