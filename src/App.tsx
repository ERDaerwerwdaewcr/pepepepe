import { Header } from "./components/header/Header"
import styles from './main.module.scss'
import { Cart } from "./pages/ShoppingCart/Cart";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { CartEmpty } from "./pages/ShoppingCart/CartEmpty";


function App() {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App
