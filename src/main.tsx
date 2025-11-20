// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  // RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
