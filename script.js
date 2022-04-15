
const container = document.getElementById("container");


const clear = document.querySelector('#clear');


function draw(conCells){
    conCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', 'background: black;');
        });
    });
}


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);





const containerCells = document.querySelectorAll('.grid-item');

draw(containerCells)


clear.addEventListener('click', () => {
    containerCells.forEach((cell) => {
        cell.setAttribute('style', 'background: white;')
    });

    container.innerHTML = ""
    

    let gridChoice = prompt("Enter amount of squares per side for new grid under 100: ");
    while (gridChoice > 64) {
        gridChoice = prompt("Enter amount of squares per side for new grid under 100: ");
    }
    if (gridChoice === "") {
        makeRows(16, 16);
        const ReContainerCells = document.querySelectorAll('.grid-item');

        draw(ReContainerCells);
    }
    else {
        let intGridChoice = Number(gridChoice);
        makeRows(intGridChoice, intGridChoice);
        const ReContainerCells = document.querySelectorAll('.grid-item');

        draw(ReContainerCells);
    }
});
