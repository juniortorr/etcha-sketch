const content = document.querySelector('.content');

for(let i=1; i<17; i++) {
    let gridSq = document.createElement('div');
    gridSq.classList.add('gridUnit')
    content.append(gridSq);
}
