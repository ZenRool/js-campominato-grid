// MAIN Function
const btnClick = () => {
    const gridSize = 100;
    const gridArray = [];
    for (let i = 0 ; i < gridSize ; i++) {
        gridArray.push(i+1);
        console.log(1);
    }
    console.log(gridArray);
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridArray.length; i++) {
        const thisNumber = gridArray[i];

        const domElement = generateGridItem(thisNumber)

        domElement.addEventListener("click", function() {
            this.classList.add("active");
        });

        gridContainer.append(domElement);
        gridContainer.classList.remove("none");
    }    


}

function generateGridItem(number) {
    const newElement = document.createElement("div");

    newElement.classList.add("grid-item");
    
    newElement.innerHTML = `<span>${number}</span>`

    return newElement;
}