const div=document.createElement('div');
const hr=document.createElement('hr');
const container=document.getElementById('container');
const btn=document.querySelector('#btn');
const cell=document.getElementById('gridCell');
const cells=document.querySelectorAll('.gridCell');

let totalGridSize=0;

function clearCells(){
    container.innerHTML='';
}

function createCell(){
    const div=document.createElement('div');
    div.classList.add('gridCell');
    div.setAttribute('id','gridCell');
    container.appendChild(div);
};

function drawGrid(size){
    container.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${size}, 1fr)`;

        for(let i=0;i<totalGridSize;i++){
            
            createCell();

        };
    };
function getGridSize(sides){
    //clearGrid();
    clearCells();
    sides=prompt("choose the number of sides for your etch a sketch! For example, entering 16 will generate a 16x16 grid");
    totalGridSize=sides*sides;
    drawGrid(sides);
 };

btn.addEventListener('click',getGridSize);