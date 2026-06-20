const container = document.querySelector(".container");
const parent = document.body;

function createGrid(size) {
    const container = document.querySelector(".container")
    const fixedSize = container.clientWidth / size;
    let squareNumber = ( size * size );
    for (let i = 0; i < squareNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
          newDiv.style.width = `${fixedSize}px`;
          newDiv.style.height = `${fixedSize}px`;
        container.appendChild(newDiv);
    }
}
let isDrawing = false;

container.addEventListener("mousedown", (event) => {

  if (event.target.matches(".square")) {
    isDrawing = true;
    event.target.style.backgroundColor = "black";
  }
});

container.addEventListener("mouseover", (event) => {
  if (event.target.matches(".square") && isDrawing === true) {
    event.target.style.backgroundColor = "black";
  }

});
body.container.addEventListener("mouseup", () => {
  isDrawing = false;
});
function clearGrid() {
  const createdDivs = container.querySelectorAll(".square");
  const removedDivs = createdDivs.forEach(div => {
    div.remove();
  });
  return removedDivs;
}
const newBoardBtn = document.createElement("button");
document.body.appendChild(newBoardBtn);
newBoardBtn.textContent = "New Sketch Board"

newBoardBtn.addEventListener("click", () => {
  const gridAmount = prompt("Select board size (max 100)");
  if (
    gridAmount === null ||
    Number(gridAmount) > 100 ||
    !Number(gridAmount) ||
    gridAmount < 0
  ) {
    return;
}
  clearGrid();
  createGrid(Number(gridAmount));
})