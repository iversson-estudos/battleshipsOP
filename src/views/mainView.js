import { boardView } from "./boardView";

function mainView(player) {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `
    <div class="board"></div>
    `;
  boardView(player);
}

export { mainView };
