import React from "react";

import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Pastries = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Products productNumber={3} />
        <Button left={"/cupcakes"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Pastries;