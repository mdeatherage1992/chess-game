var numArrForward = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var numArrBackward = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
var revChar = ['p','o','n','m','l','k','j','i', 'h', 'g', 'f', 'e','d','c','b','a'];
function diagChess(char, int) {
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
      debugger;
      var newNumForward = numArrForward.slice([i + 1]);

    } else if(int === numBackward) {
      var newNumBackward = numArrBackward.slice([i + 1]);
      }
    }
    for(var j = 0; j < 15; j++) {
      var diagonalCharForward = newCharForward[j];
      var diagonalCharBackward = newCharBackward[j];
      var diagonalNumForward = newNumForward[j];
      var diagonalNumBackward = newNumBackward[j];
      diagonals.push(diagonalCharForward + diagonalNumForward);
      diagonals.push(diagonalCharBackward + diagonalNumBackward);
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
  function vertHoriz(char,int) {
    var potentials = [];
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
    return potentials;
  }

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
function chessGame(piece,pos) {
  var newPiece = piece.toLowerCase();
  var char = pos.charAt(0);
  var int = parseInt(pos.charAt(1));
  var newPos = board[`${char}`][int];


  if(newPiece === "rook") {
    return vertHoriz(char,int);
  }

  if(newPiece === "queen") {
    var queensMoves = [];
    queensMoves.push(diagChess(char,int));
    queensMoves.push(vertHoriz(char,int));
    return queensMoves.flat();
  }
}
