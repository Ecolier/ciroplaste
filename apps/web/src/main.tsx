import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/i18n.ts';

import './index.css'

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import App from './app';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

gsap.registerPlugin(ScrollToPlugin);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
