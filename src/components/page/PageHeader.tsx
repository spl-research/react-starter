import { useMemo } from 'react';
import { Box, Breadcrumbs, Group, Tabs, Text, Title } from '@mantine/core';
import { IconChevronRight, IconHome } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import classes from './PageHeader.module.css';
import { TabProps } from './type';

interface PageHeaderProps {
  title?: string;
  action?: React.ReactElement;
  bc?: Record<string, string>[];
  tabs?: TabProps[];
}

export function PageHeader({ action, bc, tabs, title }: PageHeaderProps) {
  const detaultTab = useMemo(() => {
    if (!tabs) return '';
    let dtab = tabs[0].title;
    tabs.forEach((tab) => {
      if (tab?.default) dtab = tab?.title;
    });
    return dtab;
  }, [tabs]);

  return (
    <Box component="header" className={classes.header}>
      <Box pb="md" pt="xl" px="xl">
        {bc && (
          <Breadcrumbs
            mb="md"
            separator={<IconChevronRight size={12} />}
            separatorMargin={6}
          >
            <Text component={Link} to="/d">
              <IconHome size={18} />
            </Text>
            {bc.map((item) => (
              <Text
                component={Link}
                key={item.title}
                fw={500}
                fz={14}
                to={item.to}
              >
                {item.title}
              </Text>
            ))}
          </Breadcrumbs>
        )}
        <Box className={classes.inner}>
          <Group>
            <Title order={2}>{title}</Title>
            {action}
          </Group>
        </Box>
      </Box>
      {tabs && (
        <Tabs defaultValue={detaultTab || ''}>
          <Tabs.List px="xl">
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.title} value={tab.title}>
                {tab.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      )}
    </Box>
  );
}
