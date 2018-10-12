var board = {
  "a":[1,2,3,4,5,6,7,8],
  "b":[1,2,3,4,5,6,7,8],
  "c":[1,2,3,4,5,6,7,8],
  "d":[1,2,3,4,5,6,7,8],
  "e":[1,2,3,4,5,6,7,8],
  "f":[1,2,3,4,5,6,7,8],
  "g":[1,2,3,4,5,6,7,8],
  "h":[1,2,3,4,5,6,7,8]
}
var edges = ['a1','b1','c1','d1','e1','f1','g1','h1','a8','b8','c8','d8','e8','f8','g8','h8','a2','a3','a4','a5','a6','a7','h2','h3','h4','h5','h6','h7']

var numArrForward = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var numArrBackward = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
var revChar = ['p','o','n','m','l','k','j','i', 'h', 'g', 'f', 'e','d','c','b','a'];
function diagUpChess(char, int) {
  var diagonals = [];
  var freshDiagonals = [];
  var finals = [];
for(var i = 0; i < charArr.length; i++) {
    var charForward = charArr[i];
    var charBackward = revChar[i];
    var numForward = numArrForward[i];
    var numBackward = numArrBackward[i];

    if(char === charForward) {
      var newCharForward = charArr.slice([i + 1]);


    } else if(char === charBackward) {
      var newCharBackward = revChar.slice([i + 1]);


    } else if(int === numForward) {
      var newNumForward = numArrForward.slice([i + 1]);

    } else if(int === numBackward) {
      var newNumBackward = numArrBackward.slice([i + 1]);
      }
    }
    for(var j = 0; j < 15; j++) {
      var diagonalCharForward = newCharForward[j];
      var diagonalCharBackward = newCharBackward[j];
      var diagonalNumForward = newNumForward[j];
      var diagonalNumBackward =newNumBackward[j];
      diagonals.push(diagonalCharForward + diagonalNumBackward);
      diagonals.push(diagonalCharBackward + diagonalNumForward);
  }
    for(var q = 0; q < diagonals.length; q++) {
      var naanDiagonals = diagonals[q];
      if(naanDiagonals < 'h8' && !naanDiagonals.includes('undefined')) {
        freshDiagonals.push(naanDiagonals);
      }
    }
    for(var g = 0; g < freshDiagonals.length; g++) {
      var finalDiagonals = freshDiagonals[g];
      if(finalDiagonals.charAt(1) < 9 && finalDiagonals.length === 2) {
        finals.push(finalDiagonals);
      }
    }
      return finals;
  }



















function chessGame(piece,pos) {
  var newPiece = piece.toLowerCase();
  var char = pos.charAt(0);
  var int = parseInt(pos.charAt(1));
  var newPos = board[`${char}`][int];
  var potentials = [];
  var numDown = [8,7,6,5,4,3,2,1];
  var numUp = [1,2,3,4,5,6,7,8];
  var charDown = ['a','b','c','d','e','f','g','h']
  var charUp = ['h','g','f','e','d','c','b','a']

if(newPiece === "queen") {
  board[`${char}`].forEach(function(element){
    if(element !== int) {
    potentials.push(char + element)
  }
  })
  for(key in board) {
    if(key !== char) {
      potentials.push(key + int);
    }
  }
    for(var i = 0; i < numUp.length; i++) {
        var diagNumUp = numUp[i];
        var diagNumDown = numDown[i];
        var diagCharUp = charUp[i];
        var diagCharDown = charDown[i];

        }
      }
    return potentials;
  }

// var edges = ['a1','b1','c1','d1','e1','f1','g1','h1','a8','b8','c8','d8','e8','f8','g8','h8','a2','a3','a4','a5','a6','a7','h2','h3','h4','h5','h6','h7']

var nums = ['A2','A5','A8','B3','B5','B7', 'C4','C5','C6','D1','D2','D3','D4','D6','D7','D8','E4','E5','E6','F3','F5','F7','G2','G5', 'G8', 'H1','H5'];
// var newNums = ["D1", "D2", "D3", "D4", "D6", "D7", "D8", "A5", "B5", "C5", "E5", "F5", "G5", "H5", "H1", "A8", "G2", "B7", "F3", "C6", "E4", "d5", "d5", "e4", "c6", "f3", "b7", "g2", "a8", "h1"]
// if((diagCharUp + diagNumUp !== pos || diagCharDown + diagNumDown !== pos) {
