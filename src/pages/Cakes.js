import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Cakes = () => {
  return (
    <main>
      <Background />
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Products productNumber={0} />
        <Button left={"/"} right={"/buches"} />
      </div>
    </main>
  );
};

export default Cakes;
