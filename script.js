const div=document.createElement('div');

const container=document.querySelector('.container');
const btn=document.querySelector('#btn');

let gridSize=0;

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};

function drawGrid(size){
    clearGrid();
    
    for(let i=0;i<size;i++){
    const div=document.createElement('div');
    div.classList.add('gridSquare') 
    container.appendChild(div);
};};

function getGridSize(sides){
    sides=prompt("choose the number of sides for your etch a sketch!");
    gridSize=sides*sides;
    drawGrid(gridSize);
 };

btn.addEventListener('click',getGridSize);