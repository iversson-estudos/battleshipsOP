import { boardView } from "./boardView";

function mainView(humanPlayer, aiPlayer) {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `
    <div class="board" id="humanBoard"></div>
    <div class="board" id="aiBoard"></div>
    `;

  boardView(humanPlayer, aiPlayer);
}

export { mainView };
