import { SIDEBAR_WIDTH } from '@common/constant/const';
import { menus } from '@common/constant/menu';
import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Box,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import {
  IconBulb,
  IconSearch,
  IconPlus,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { Link, useMatchRoute } from '@tanstack/react-router';
import cx from 'clsx';
import classes from './Sidebar.module.css';

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];

interface NavItemProps {
  to?: string;
  icon: typeof IconBulb;
  label: string;
  count?: number | string;
}

export function NavItem({ count, label, to, icon: Icon }: NavItemProps) {
  return (
    <UnstyledButton
      to={to}
      key={to}
      component={Link}
      className={classes.mainLink}
    >
      <div className={classes.mainLinkInner}>
        <Icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{label}</span>
      </div>
      {count && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {count}
        </Badge>
      )}
    </UnstyledButton>
  );
}

export function Sidebar() {
  const matchRoute = useMatchRoute();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const mainLinks = menus.map((link) => {
    const active = matchRoute({ to: link?.to });
    return (
      <UnstyledButton
        component={Link}
        to={link.to}
        key={link.to}
        className={classes.mainLink}
        data-active={active || undefined}
      >
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    );
  });

  const collectionLinks = collections.map((collection) => (
    <Box key={collection.label} className={classes.collectionLink}>
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{' '}
      {collection.label}
    </Box>
  ));

  const handleChangeColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Box component="nav" w={SIDEBAR_WIDTH} className={classes.navbar}>
      <Group mb="lg" justify="space-between">
        <MantineLogo size={30} />
        <ActionIcon
          size="lg"
          variant="default"
          aria-label="Toggle color scheme"
          onClick={handleChangeColorScheme}
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Group>
      <TextInput
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
        size="xs"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </Box>
  );
}
