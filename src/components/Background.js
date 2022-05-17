import React, { useEffect } from "react";

const Background = () => {
  /* const [left, setLeft] = useState();
  const [top, setTop] = useState(); */

  useEffect(() => {
    let nbrOfItems;
    if (window.innerWidth < 700) {
      nbrOfItems = 25;
    } else {
      nbrOfItems = 50;
    }

    const dots = document.querySelector(".dots");

    for (let i = 0; i < nbrOfItems; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dots.appendChild(dot);
      let randomX = Math.random();
      let randomY = Math.random();
      if (randomX < 0.4 || randomX > 0.7 || randomY < 0.15 || randomY > 0.7) {
        dot.style.left = innerWidth * randomX + "px";
        dot.style.top = innerHeight * randomY + "px";
      }
    }
    const dotControl = document.querySelectorAll(".dots span");
    console.log(dotControl);

    window.addEventListener("mousemove", (e) => {
      dotControl.forEach((dot) => {
        let top = dot.style.top;
        let left = dot.style.left;
        let topParsed = parseInt(top);
        let leftParsed = parseInt(left);

        let translateY = (topParsed - e.y) * (1 / 100) + "px";
        let translateX = (leftParsed - e.x) * (1 / 100) + "px";

        console.log(translateX);
        console.log(translateY);
        dot.style.transform = `translate(${translateX}, ${translateY})`;
      });
    });

    /* window.addEventListener("click", (e) => {
      dotControl.forEach((dot) => {
        console.log(
          e.x -
            (parseInt(dot.style.left) / 100) * window.innerWidth -
            e.x * 0.175
        );
        console.log(e.x * 0.175);
        console.log(parseInt(dot.style.left));
        console.log(e.x);
        console.log(e);
        console.log(window);
        if (
          (e.x -
            (parseInt(dot.style.left) / 100) * window.innerWidth -
            e.x * 0.175) *
            (3 / 100) <
          0 &&
          (e.y - (parseInt(dot.style.top) / 100) * window.outerWidth) *
            (3 / 100) <
            0
        ) {
          dot.style.transform = `translate(${
            (-e.x +
              (parseInt(dot.style.left) / 100) * window.innerWidth -
              e.x * 0.175) *
            (3 / 100)
          }px, ${
            (-e.y + (parseInt(dot.style.top) / 100) * window.innerHeight) *
            (3 / 100)
          }px)`;
        } else {
          dot.style.transform = `translate(${
            (e.x -
              (parseInt(dot.style.left) / 100) * window.innerWidth -
              e.x * 0.175) *
            (3 / 100)
          }px, ${
            (e.y - (parseInt(dot.style.top) / 100) * window.innerHeight) *
            (3 / 100)
          }px)`;
        }
      });
    }); */
  }, []);

  return <div className="dots"></div>;
};

export default Background;
