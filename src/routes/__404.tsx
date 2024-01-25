import { createLazyFileRoute } from '@tanstack/react-router';

function NotFound() {
  return (
    <div className="p-2">
      <h3>404 not found</h3>
    </div>
  );
}

export const Route = createLazyFileRoute('/__404')({
  component: NotFound,
});
