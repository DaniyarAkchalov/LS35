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
import ToDosPage from "../pages/ToDosPage";
import { getToDos } from '../../requests/todos'

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  useEffect(() => {
    getUsers(setUsers);
  }, []);
 
  useEffect(() => {
    getPosts(setPosts);
  }, []);

  useEffect(() => {
    getToDos(setTodos);
  }, []);

  const createNewUser = (user) => setUsers((prev) => [...prev, user]);
  const createNewProduct = (product) => setProducts((prev) => [...prev, product]);
  const createNewPost = (post) => setPosts((prev) => [...prev, post]);
  const createNewToDo = (todo) => setPosts((prev) => [...prev, todo]);
 
  
  return (
    <div>
      <Context.Provider value={{ products, users, posts, todos, createNewUser, createNewProduct, createNewPost, createNewToDo }}>
        <NavMenu />

        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/products_page" element={<ProductsPage />} />
          <Route path="/posts_page" element={<PostsPage />} />
          <Route path="/todos_page" element={<ToDosPage />} />

        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
