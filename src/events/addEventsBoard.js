import { attack } from "../controllers/run";

function addEventsBoard() {
  const aiBoard = document.getElementById("aiBoard");
  const cells = aiBoard.querySelectorAll(".cell");
  cells.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("CLICK ON " + element.id);
      attack(element);
    });
  });
}

export { addEventsBoard };
