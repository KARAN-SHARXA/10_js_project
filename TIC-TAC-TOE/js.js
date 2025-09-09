let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Player 'X' plays first
let xTurn = true;
let count = 0;

// Disable all buttons (when game ends)
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

// Enable all buttons (for new game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false; // ✅ FIXED (pehle string "false" tha)
    });
    popupRef.classList.add("hide");
};

// Show Winner
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1f389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1f389; <br> 'O' Wins";
    }
};

// Draw Function
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw!";
};

// New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

// Restart Game
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

// Win Logic
const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];

        if (element1 !== "" && element2 !== "" && element3 !== "") {
            if (element1 === element2 && element2 === element3) {
                winFunction(element1);
                return; // ✅ FIXED (winner ke baad draw check nahi chalega)
            }
        }
    }
};

// Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
        } else {
            xTurn = true;
            element.innerText = "O";
        }
        element.disabled = true; // ✅ FIXED (dono case me disable)
        count++;

        // Check for winner
        winChecker();

        // Check for draw
        if (count === 9) {
            drawFunction();
        }
    });
});

// On window load, enable buttons
window.onload = enableButtons;
