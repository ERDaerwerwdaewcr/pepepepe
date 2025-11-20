import { Header } from "./components/header/Header"
import styles from './main.module.scss'
import { Cart } from "./pages/ShoppingCart/Cart";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import {
  // BrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
// import { CartEmpty } from "./pages/ShoppingCart/CartEmpty";
import { useState } from "react";
import { SearchContext } from "./context/SearchContext";


function App() {

  const [searchValue, setSearchValue] = useState('')

  return (

    <div className={styles.app}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>


  )
}

export default App
