import { getProducts } from "../../requests/products";
import { useState, useEffect } from "react";
import { Context } from "../../contex";
import { getUsers } from "../../requests/users";
import NavMenu from "../NavMenu";
import { Routes, Route } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <div>
      <Context.Provider value={{ products, users }}>
        <NavMenu />
        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/products_page" element={<ProductsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
