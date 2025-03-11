import { sendAttack } from "../controllers/run";

function addEventsBoard() {
  const aiBoard = document.getElementById("aiBoard");
  const cells = aiBoard.querySelectorAll(".cell");
  cells.forEach((element) => {
    element.addEventListener("click", () => {
      sendAttack(element);
    });
  });
}

export { addEventsBoard };
