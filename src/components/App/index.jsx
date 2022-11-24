import { getProducts } from "../../requests/products";
import { useState, useEffect } from "react";
import { Context } from "../../contex";
import { getUsers } from "../../requests/users";
import NavMenu from "../NavMenu";
import { Routes, Route } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";
import PostsPage from "../pages/PostsPage";
import { getPosts } from "../../requests/post";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  useEffect(() => {
    getUsers(setUsers);
  }, []);
 
  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const createNewUser = (user) => setUsers((prev) => [...prev, user]);
  const createNewProduct = (product) => setProducts((prev) => [...prev, product]);
  const createNewUPost = (post) => setPosts((prev) => [...prev, post]);

  return (
    <div>
      <Context.Provider value={{ products, users, posts, createNewUser, createNewProduct, createNewUPost }}>
        <NavMenu />

        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/products_page" element={<ProductsPage />} />
          <Route path="/posts_page" element={<PostsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
