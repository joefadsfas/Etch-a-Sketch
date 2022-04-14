
const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};


makeRows(16, 16);

const containerCells = document.querySelectorAll('.grid-item')

containerCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background: black;');
    });
});