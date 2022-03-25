// import { Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductList/ProductsList";
import AdminPages from "./pages/AdminPages";
import Error404 from "./pages/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPages />,
      id: 1,
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}

        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
