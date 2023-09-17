const content = document.querySelector('.content');
const newGridBtn = document.querySelector('.newGridBtn');



function newGrid() {
    let newNum = prompt('Pick a new number for your grid!', '');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    newNum = parseInt(newNum);
    let newWidth = 100/newNum + '%';
    console.log(newWidth);
    generateGrid(newNum, newWidth);
}


function generateGrid(gridNum, newUnitWidth = '6.25%') {
    for(let i=1; i<=gridNum**2; i++) {
        let gridSq = document.createElement('div');
        gridSq.classList.add('gridUnit')
        // gridSq.style.width = newUnitWidth;
        // gridSq.style.height = newUnitWidth;
        content.append(gridSq);
        gridSq.addEventListener('mouseover', () => {
            gridSq.style.backgroundColor = 'blue';
            setTimeout(() => { gridSq.style.backgroundColor = ''}, 2000);
        });
    }
}



generateGrid(16);

newGridBtn.addEventListener('click', ()=> {
    newGrid();
});
