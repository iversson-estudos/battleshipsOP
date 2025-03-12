import { run } from "../controllers/run";

function addEventsStartView() {
  const startGameBtn = document.getElementById("start");
  const playerName = document.getElementById("playerName");
  startGameBtn.addEventListener("click", () => {
    if (playerName.value !== "") {
      run();
    }
  });
}

export { addEventsStartView };
