import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Button } from "./Button.jsx";

import second from "./Button.module.css"
import styling from "./Card.module.css"

import { Card1 } from "./Card1.jsx";
import { Card2 } from "./Card2.jsx";
import { Card3 } from "./Card3.jsx";
import { Navbar } from "./pages/Navbar.jsx";
import { TodoWrapper } from "./TodoWrapper.jsx";
import { UserList } from "./UserLIst.jsx";
import { UsestateComponent } from "./UsestateComponent.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import { AddProduct } from "./pages/AddProduct.jsx";
import TodoListNode from "./pages/TodoListNode.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import themeContext from "./context/themeContext";
import { useContext, useState } from "react";
import VerifyEmail from "./pages/VerifyEmail.jsx";


function App() {
  const { theme } = useContext(themeContext);

  // const h1 = {
  //   color: "blue",
  //   backgroundColor: "gray"
  // }

  // Ass
  // create three component for each card
  // use one css module for the three card
  return (
    <div>

        {/* HEADER SECTION */}
      <section className={`app ${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </section>

      {/* ASSIGNMENT ON TODOLIST */}
      <section className="cardSection">
        <h2 style={{ textAlign: "center", fontSize: "34px" }}>TodoList Assignment</h2>
        <TodoWrapper />
      </section>



      <div className="box">
        <Button text={"Submit"} />
        <Button text={"Log In"} />

      </div>

    {/* ClassWork on useState */}
      <section className="cardSection">
        <h2 style={{textAlign: "center", fontSize: "34px"}}>UseState ClassWork</h2>
        <UsestateComponent />
        <UserList />
      </section>

        {/* Card Assignment */}
        <section className="cardSection">
          <h2 style={{ textAlign: "center", fontSize: "34px" }}>Card Assignment</h2>
          <div className={styling.heading}>
            <h2><b>Latest News</b></h2>
            <Button text="View All" />
          </div>
          <div className={styling.bodyCard}>
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </section>

        {/* ASSIGNMEN ON TODOLIST 1/05/2026 */}
        <section className="cardSection">
          <TodoListNode />
        </section>

    </div>
  )
}

export default App