import React, { useState, useEffect } from "react";
import { productsData } from "../data/productsData";
import { motion } from "framer-motion";

const Products = ({ productNumber }) => {
  const [currentProduct] = useState(productsData[productNumber]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    if (window.innerWidth < 900) {
      setLeft(Math.floor(Math.random() * 200 + 400) + "px");
      console.log("test");
    } else {
      setLeft(Math.floor(Math.random() * 200 + 500) + "px");
    }
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProduct.title}</h1>
        <p></p>
      </div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
        className="img-content"
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProduct.title}</h3>
            <p>{currentProduct.infos}</p>
          </span>
          <img
            src={currentProduct.img}
            alt={currentProduct.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProduct.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">En savoir plus</span>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Products;
