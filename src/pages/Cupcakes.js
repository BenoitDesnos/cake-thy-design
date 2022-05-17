import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Cupcakes = () => {
  return (
    <main>
      {/* <Mouse /> */}
      <Background />
      <div className="project">
        <Navigation />
        <Logo />
        <Products productNumber={2} />
        <Button left={"/buches"} right={"/patisseries"} />
      </div>
    </main>
  );
};

export default Cupcakes;
