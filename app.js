const grid = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
    const sketchDiv = document.createElement('div');
    grid.appendChild(sketchDiv);
}

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

// checking if git works