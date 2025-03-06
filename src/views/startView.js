function startView() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `<div class="startGame">
  <form>
    <label>PLAYER</label><br>
    <input type="text"id="playerName"></input><br>
  </form>
  <button id="startGame">START GAME</button>
  </div>`;
}

export { startView };
