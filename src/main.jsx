import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Routers.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className='max-w-7xl mx-auto px-4'>

<RouterProvider router={router} />
</div>
    </HelmetProvider>
    </StrictMode>,
)
