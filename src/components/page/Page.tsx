import { Box, BoxProps } from '@mantine/core';
import { PageHeader } from './PageHeader';

interface PageProps {
  title?: string;
  bc?: Record<string, string>[];
  children?: React.ReactElement;
}

export function Page({ bc, title, ...props }: PageProps & BoxProps) {
  return (
    <>
      <PageHeader bc={bc} title={title} p="xl" />
      <Box px="xl" {...props} />
    </>
  );
}
