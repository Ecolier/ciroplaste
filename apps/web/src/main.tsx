import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Article from './routes/article.tsx'
import { articleLoader } from './routes/article.loader.tsx';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo.tsx'
import Root from './components/Root.tsx';
import './i18n.tsx';

import './index.css'
import { articlesLoader } from './routes/home.loader.tsx';
import Home from './routes/home.tsx';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        loader: articlesLoader,
        element: <Home />
      },
      {
        path: 'article/:id',
        loader: articleLoader,
        element: <Article />
      }
    ]
  },
], { basename: import.meta.env.BASE_URL });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
