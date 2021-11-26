// copied and refactored from Stack Overflow user Nidhin Joseph
const container = document.querySelector("#container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);


// end of copied and refactored code

const initialize = function () {
    document.querySelectorAll('#container div').forEach(box => {
        box.classList.remove('activated');
        box.classList.add('inactive');
    })
}
initialize();


const addSketching = () => {
    document.querySelectorAll('#container div').forEach(box => {
        box.addEventListener('mouseover', function () {
            box.classList.remove('inactive');
            box.classList.add('activated');
        })
    });
}
addSketching();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const resetTheBoard = function () {
    const newSize = prompt('New board size?');
    removeAllChildNodes(container);
    makeRows(newSize, newSize);
    initialize();
    addSketching();
}

const button = document.querySelector('#resetbutton');
button.addEventListener("click", resetTheBoard);