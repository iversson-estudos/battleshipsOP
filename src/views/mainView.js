function mainView() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `
    <div class="board"></div>
    `;
  const board = mainContainer.querySelector(".board");

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = "X";
    board.appendChild(cell);
  }
}

export { mainView };
