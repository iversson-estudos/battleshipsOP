function addEventsStartView() {
  const startGameBtn = document.getElementById("start");
  startGameBtn.addEventListener("click", () => {
    const playerName = document.getElementById("playerName").value;
    console.log(playerName);
  });
}

export { addEventsStartView };
