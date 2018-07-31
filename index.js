$(document).ready(function() {
var winArr = [
  ["#0-0", "#1-0", "#2-0"],
  ["#0-1", "#1-1", "#2-1"],
  ["#0-2", "#1-2", "#2-2"], 
  ["#0-0", "#0-1", "#0-2"], 
  ["#1-0", "#1-1", "#1-2"], 
  ["#2-0", "#2-1", "#2-2"], 
  ["#0-0", "#1-1", "#2-2"], 
  ["#0-2", "#1-1", "#2-0"]
]
function listenForClicksOnCells() {
  $(".cell").click(markCell)
}

listenForClicksOnCells();

let MARK = "X"
let numberTiles = 0

function markCell() {
  if (this.innerText === "") {
    this.innerText = MARK
    numberTiles = numberTiles + 1
    
     if (playerWon(MARK)) {
       console.log(MARK+ " won the game!")
       resetGame()
     } else if (numberTiles == 9){
       console.log("Tie game!")
      resetGame()
     }
    
     
   if (MARK === "X") {
       MARK = "O";
  }else if (MARK === "O"){
      MARK = "X";
    }
  }
}

// takes in a DOM id and checks whether its text is equal to the second argument (mark)
function elementContains(id, mark) {
  return $(id).text() === mark
}

// to be run after each turn. checks whether a given mark ('X'/'O') populates all three spots in any given win combination
function playerWon(mark) {
  for (var idx = 0; idx < winArr.length; idx++) { // for every win combination
    var winCombo = winArr[idx]
    var won = winCombo.every(id => elementContains(id, mark)) // check if elementContains returns true for every id
    if (won) return true
  }
  return false // if we got here, it means no winning combination was found and we can safely return false
}

function resetGame() {
  MARK = "X"
  numberTiles = 0
  $(".cell").text("")
}



















})