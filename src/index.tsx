import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyled from './global.styled';
import { router } from './entrypoint/router';
import { FilterFeedbackIdContext } from './contexts/filterFeedbackId/filterFeedbackId.context';
import { CurrentUserProvider } from './contexts/currentUser/currentUser.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <FilterFeedbackIdContext>
        <GlobalStyled />
        <RouterProvider router={router} />
      </FilterFeedbackIdContext>
    </CurrentUserProvider>
  </React.StrictMode>
);
