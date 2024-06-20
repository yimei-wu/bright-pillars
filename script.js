const pillars = document.querySelectorAll(".pillar");

const pillarOne = document.getElementById("pillar1");
const pillarTwo = document.getElementById("pillar2");
const pillarThree = document.getElementById("pillar3");

const popUp = document.getElementById("win");

const handleClick = () => {
  pillars.forEach((pillar) => {
    pillar.addEventListener("click", (e) => {
      e.preventDefault();
      // CLICK ON THE FIRST PILLAR
      if (pillar === pillarOne) {
        if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarTwo.classList.replace("pillar", "bright-pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarOne.classList.replace("bright-pillar", "pillar");
          pillarTwo.classList.replace("pillar", "bright-pillar");
          pillarThree.classList.replace("pillar", "bright-pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarOne.classList.replace("pillar", "bright-pillar");
          pillarTwo.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarOne.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarOne.classList.replace("pillar", "bright-pillar");
          pillarThree.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarOne.classList.replace("bright-pillar", "pillar");
          pillarTwo.classList.replace("bright-pillar", "pillar");
          pillarThree.classList.replace("pillar", "bright-pillar");
        } else {
          pillarOne.classList.replace("pillar", "bright-pillar");
        }
      }
      // CLICK ON THE MIDDLE PILLAR
      else if (pillar === pillarTwo) {
        if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarTwo.classList.replace("pillar", "bright-pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarOne.classList.replace("bright-pillar", "pillar");
          pillarTwo.classList.replace("pillar", "bright-pillar");
          pillarThree.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarOne.classList.replace("pillar", "bright-pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarTwo.classList.replace("bright-pillar", "pillar");
          pillarThree.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarTwo.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarOne.classList.replace("pillar", "bright-pillar");
          pillarTwo.classList.replace("bright-pillar", "pillar");
          pillarThree.classList.replace("pillar", "bright-pillar");
        } else {
          pillarOne.classList.replace("pillar", "bright-pillar");
          pillarThree.classList.replace("pillar", "bright-pillar");
        }
      }
      // CLICK ON THE LAST PILLAR
      else if (pillar === pillarThree) {
        if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarThree.classList.replace("pillar", "bright-pillar");
        } else if (
          (pillarOne.classList.contains("bright-pillar") &&
            pillarTwo.classList.contains("pillar") &&
            pillarThree.classList.contains("bright-pillar")) ||
          (pillarOne.classList.contains("pillar") &&
            pillarTwo.classList.contains("pillar") &&
            pillarThree.classList.contains("bright-pillar"))
        ) {
          pillarTwo.classList.replace("pillar", "bright-pillar");
          pillarThree.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("bright-pillar")
        ) {
          pillarOne.classList.replace("pillar", "bright-pillar");
          //   pillarThree.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("bright-pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarOne.classList.replace("bright-pillar", "pillar");
          pillarTwo.classList.replace("bright-pillar", "pillar");
        } else if (
          pillarOne.classList.contains("pillar") &&
          pillarTwo.classList.contains("bright-pillar") &&
          pillarThree.classList.contains("pillar")
        ) {
          pillarTwo.classList.replace("bright-pillar", "pillar");
          pillarThree.classList.replace("pillar", "bright-pillar");
        } else {
          pillarThree.classList.replace("pillar", "bright-pillar");
          console.log("ho cliccato sul terzo pilastro");
        }
      }
    });
  });
};

handleClick();

// if (
//   pillarOne.classList.contains("bright-pillar") &&
//   pillarTwo.classList.contains("brigth-pillar") &&
//   pillarThree.classList.contains("brigth-pillar")
// ) {
//   const popUp = document.getElementById("win");
//   popUp.style.display = "flex";
// }
