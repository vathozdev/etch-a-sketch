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