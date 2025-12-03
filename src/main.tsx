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
import { store } from './redux/store.tsx';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
