import React from "react";

import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Buches = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Products productNumber={1} />
        <Button left={"/gateaux"} right={"/cupcakes"} />
      </div>
    </main>
  );
};

export default Buches;
