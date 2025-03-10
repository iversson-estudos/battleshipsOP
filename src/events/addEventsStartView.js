import { run } from "../controllers/run";

function addEventsStartView() {
  const startGameBtn = document.getElementById("start");
  startGameBtn.addEventListener("click", () => {
    run();
  });
}

export { addEventsStartView };
