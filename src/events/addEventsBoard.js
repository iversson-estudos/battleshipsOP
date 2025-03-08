function addEventsBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("CLICK ON " + element.id);
    });
  });
}

export { addEventsBoard };
