import React, { useEffect } from "react";

const Background = () => {
  /* const [left, setLeft] = useState();
  const [top, setTop] = useState(); */

  useEffect(() => {
    const nbrOfDots = 20;

    const dots = document.querySelector(".dots");

    for (let i = 0; i < nbrOfDots; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.style.left = Math.floor(Math.random() * 100) + "%";
      dot.style.top = Math.floor(Math.random() * 100) + "%";
    }
    const dotControl = document.querySelectorAll(".dots span");

    window.addEventListener("mousemove", (e) => {
      console.log(e);
      dotControl.forEach((dot) => {
        dot.style.transform = `translate(${
          (e.x - (parseInt(dot.style.left) / 100) * window.innerWidth) *
          (1 / 100)
        }px, ${
          (e.y - (parseInt(dot.style.top) / 100) * window.innerHeight) *
          (1 / 100)
        }px)`;
      });
    });
  }, []);

  return <div className="dots"></div>;
};

export default Background;
