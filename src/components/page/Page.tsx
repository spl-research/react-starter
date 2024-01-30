import { Box, BoxProps } from '@mantine/core';
import { PageHeader } from './PageHeader';
import { TabProps } from './type';

interface PageProps {
  action?: React.ReactElement;
  bc?: Record<string, string>[];
  children?: React.ReactElement;
  tabs?: TabProps[];
  title?: string;
}

export function Page({
  bc,
  action,
  tabs,
  title,
  ...props
}: PageProps & BoxProps) {
  return (
    <>
      <PageHeader action={action} bc={bc} tabs={tabs} title={title} />
      <Box px="xl" {...props} />
    </>
  );
}
