console.log("Welcome to Tic Tac Toe");
let audioTurn = new Audio("files/click.wav");
let gameOver = new Audio("files/gameover.wav");
let turn = "X";
let gamend = false;


// function to check turn
const changeTurn = () =>{
	return turn === "X"?"0":"X";
}

// function to check win
const checkWin = () =>{
	let boxtext = document.getElementsByClassName('boxtext');
	let wins = [
		[0, 1, 2, -0.1, 4.79, 0], 
		[3, 4, 5, -0.1, 14.79, 0], 
		[6, 7, 8, -0.1, 24.79, 0],
		[0, 3, 6, -10.14, 14.9, 90],
		[1, 4, 7, -0.1, 14.9, 90],
		[2, 5, 8, 9.95, 14.9, 90],
		[0, 4, 8, -0.1, 14.9, 45],
		[2, 4, 6, -0.1, 14.9, -45],
	];

	wins.forEach(e =>{
		if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
			document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
			gamend = true;
			document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '145px'
			gameOver.play();
			document.querySelector('.line').style.width = "30.15vw"
			document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
		}
	})
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
	let boxtext = element.querySelector('.boxtext');
	element.addEventListener('click', ()=>{
		if(boxtext.innerText === ''){
			boxtext.innerText = turn;
			turn = changeTurn();
			audioTurn.play();
			checkWin();
			if (!gamend) {
				document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
			}
		}
	})
})


// add on click listener to reset button

reset.addEventListener('click', ()=>{
	let boxtext = document.querySelectorAll('.boxtext');
	Array.from(boxtext).forEach(element =>{
		element.innerText = ''
	})
	turn = "X";
	gamend = false;
	document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
	document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '0px'
	document.querySelector('.line').style.width = "0"
})
