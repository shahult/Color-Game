var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.getElementById("result");
var h1Display = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    
    setModeButtons();
    setSquares();
    reset();
}

function setModeButtons(){
    for(i=0; i<modeButton.length; i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
        
    }
}

function setSquares(){
    for(var i=0; i<squares.length; i++){
        //add clicklisteners to squares
        squares[i].addEventListener("click",function(){
            //Grab the color of clicked square
            var clickedColor = this.style.backgroundColor;
    
            //comparing it with the picked color
            if (clickedColor === pickedColor ){
                messageDisplay.textContent = "Success!!";
                changeColor(clickedColor);
                resetButton.textContent = "Play Again!!";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!!"
            }
        });
    
    }
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //picking new color
    pickedColor = pickColor();

    //Setting color as picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors!";
    messageDisplay.textContent = "";
    //setting all colors in squares
    for(var i=0;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } 
        else{
            squares[i].style.display = "none";
        }
    }

    h1Display.style.backgroundColor = "steelblue";
}
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",function(){    
    reset();
});

function changeColor(color){
    //Loop through all the squares
    for(var i=0;i<squares.length; i++){
        //Change each color to selected color
        squares[i].style.backgroundColor = color;
    }
    h1Display.style.backgroundColor = color;
}

//Function for randomly picking color
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function for generating random color
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num no of colors to the array
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

//function for generating random color
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

