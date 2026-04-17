import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes/Router';

const App = () => {
    return (
        <StrictMode >
            <RouterProvider router={router}  />
        </StrictMode>
    );
};

export default App;