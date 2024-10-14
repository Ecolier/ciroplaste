import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Article, { articleLoader } from './routes/article.tsx'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo.tsx'
import Root from './components/Root.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'article/:id',
        loader: articleLoader,
        element: <Article />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
