

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

const boxes = document.querySelectorAll('#container div');
boxes.forEach(box => {
    box.classList.add('inactive');
});

boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.classList.remove('inactive');
        box.classList.add('activated');
    })
});


const button = document.querySelector('#resetbutton');
button.addEventListener("click", boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.classList.remove('activated');
        box.classList.add('inactive');
    })
}));