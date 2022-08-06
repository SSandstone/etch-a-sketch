const div=document.createElement('div');
const container=document.getElementById('container');
const gridBtn=document.querySelector('#gridBtn');
const resetBtn=document.querySelector('#resetBtn');
const rainbowBtn=document.querySelector('#rainbowBtn');
const solidColorBtns=document.querySelectorAll('.color');

let defaultSize=8;
let totalGridSize=defaultSize*defaultSize;
let currentSize=0;
let rainbowClicked=false;
let solidColorClicked=false;
let colorChoice='';

//additional features
//default color
//option to make rainbow colors
//option to choose a solid color
function defaultColor(){
    const cells=document.querySelectorAll('.gridCell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(event){
            this.style.background='black';
        });
    });
};

function rainbowColor(){
    const cells=document.querySelectorAll('.gridCell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(event){
            this.style.background='#'+Math.floor(Math.random()*16777215).toString(16);
        });
    });
};

function solidColor(){
    const cells=document.querySelectorAll('.gridCell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(event){
            this.style.background=colorChoice;
        });
    });
};

rainbowBtn.addEventListener('click', function(){
    rainbowClicked=true;
    solidColorClicked=false;
    chooseColor();
});

solidColorBtns.forEach(btn =>{
    btn.addEventListener('click', function(){
    solidColorClicked=true;
    rainbowClicked=false;
    colorChoice=`${btn.id}`;
    btn.style.background=`${btn.id}`;
    chooseColor();
});
});

//this is so you don't have to code each background 
//for the solid color buttons
//just add a button with a class of 'colors' and set ID to
//a named color that CSS will recognize
function getBgColors(){
    solidColorBtns.forEach(btn =>{
        btn.style.background=`${btn.id}`;
    });
};

//function to check to see if color conditions have changed
function chooseColor(){
    if(rainbowClicked){
        rainbowColor();
    } else if (solidColorClicked) {
        solidColor();
    } else {
        defaultColor();
    }
};



//sets a default grid for window load
function startUp(){
    drawGrid(defaultSize);
    getBgColors();
};

//clears ALL cells
function clearCells(){
    container.innerHTML='';
}

//creates cell
function createCell(){
    const div=document.createElement('div');
    div.classList.add('gridCell');
    div.setAttribute('id','gridCell');
    container.appendChild(div);
};

//takes user input to create grid of inputxinput
//default is 8x8
function drawGrid(size){
    container.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    currentSize=size;
    rainbowClicked=false;
    solidColorClicked=false;
        for(let i=0;i<totalGridSize;i++){
            createCell();
        };
        chooseColor();
    };

//asks user to input how many sides they want for grid
function getGridSize(sides){
    clearCells();
    sides=prompt("choose the number of sides for your etch a sketch! For example, entering 16 will generate a 16x16 grid");
    totalGridSize=sides*sides;
    drawGrid(sides);
 };


//will clear the grid of colors but retain size
function resetGrid(){
    clearCells();
    drawGrid(currentSize);
};

document.body.onload=startUp();
gridBtn.addEventListener('click',getGridSize);
resetBtn.addEventListener('click',resetGrid);