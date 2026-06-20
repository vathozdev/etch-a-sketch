const container = document.querySelector(".container");

function createGrid(size) {
    let squareNumber = ( size * size );
    for (let i = 0; i < squareNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        container.appendChild(newDiv);
    }
}
container.addEventListener("mouseover", (event) => {
  if (event.target.matches(".square")) {
    event.target.style.backgroundColor = "black";
  }
});
function clearGrid() {
  const createdDivs = container.querySelectorAll(".square");
  createdDivs.forEach(div => {
    div.remove();
  });
}
const newBoardBtn = document.createElement("button");
document.body.appendChild(newBoardBtn);

newBoardBtn.addEventListener("click", () => {
  const gridAmount = prompt("Select board size (max 100)");
  if (
    gridAmount === null ||
    Number(gridAmount) > 100 ||
    !Number(gridAmount)
  ) {
    return;
}
  clearGrid();
  createGrid(Number(gridAmount));
})