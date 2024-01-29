import { Box, BoxProps, Breadcrumbs, Group, Text, Title } from '@mantine/core';
import { IconChevronRight, IconHome } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import classes from './PageHeader.module.css';

interface PageHeaderProps {
  title?: string;
  bc?: Record<string, string>[];
}

export function PageHeader({
  bc,
  title,
  ...props
}: PageHeaderProps & BoxProps) {
  return (
    <Box component="header" className={classes.header} p="lg" {...props}>
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
        </Group>
      </Box>
    </Box>
  );
}
