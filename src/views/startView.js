function startView() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `<div class="startGame">
  <form>
    <input required minlength="1" maxlength="24" placeholder="Player Name" type="text"id="playerName"></input><br>
  </form>
  <button id="start">START</button>
  </div>`;
}

export { startView };
