// JavaScript Document
var colors = generateRandomColors(numSqaures);

var squares = document.querySelectorAll(".sqaure");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSqaures = 6;

easyBtn.addEventListener("click", function()
{
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSqaures = 3;
	colors = generateRandomColors(numSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++)
	{
		if (colors[i]) 
		{
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function()
{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSqaures = 6;
	colors = generateRandomColors(numSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++)
	{
		if (colors[i]) 
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function()
{
	//generate new colors
	colors = generateRandomColors(numSqaures);

	// pick new random color from array
	pickedColor = pickColor();

	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	this.textContent = "New Colors";

	// change colors of squares	
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});


for(var i=0; i<squares.length; i++)
	{
		//add initial squares to squares
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].addEventListener("click",function()
		{
		//grab color of clicked colors	
		var clickedColor = this.style.backgroundColor;
		//compare it with picked color
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}

	function changeColors(color)
	{
		for (var i = 0;i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor()
	{
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num)
	{
		//make an array
		var arr = [];
		//add num random colors to array
		for (var i = 0; i < num; i++)
		{
		// get random color and push into arr
			arr.push(randomColor())
		}
		//return that array
		return arr;
	}

	function randomColor()
	{
		// pick a "red" from 0-255
		var r = Math.floor(Math.random() * 256);
		// pick a "green" from 0-255
		var g = Math.floor(Math.random() * 256);
		// pick a "blue" from 0-255
		var b = Math.floor(Math.random() * 256);

		return "rgb(" + r +", "+ g +", "+ b +")";
	}