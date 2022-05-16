import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cakes from "./pages/Cakes";
import Logs from "./pages/Logs";
import Cupcakes from "./pages/Cupcakes";
import Pastries from "./pages/Pastries";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/gateaux" element={<Cakes />}></Route>
          <Route path="/buches" element={<Logs />}></Route>
          <Route path="/cupcakes" element={<Cupcakes />}></Route>
          <Route path="/patisseries" element={<Pastries />}></Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
