import { StrictMode } from 'react';
import { router } from '@common/constant/routes';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
