//global variables for consistent use
var numArrForward = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var numArrBackward = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
var revChar = ['p','o','n','m','l','k','j','i', 'h', 'g', 'f', 'e','d','c','b','a'];
var valids = ['a','b','c','d','e','f','g','h'];
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


//diagonal moves for queen
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
      }

       if(char === charBackward) {
      var newCharBackward = revChar.slice([i + 1]);
    }

      if(int === numForward) {
      var newNumForward = numArrForward.slice([i + 1]);
      }
      if(int === numBackward) {
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

  // vertical and horizontal movements for queen and rook
  function vertHoriz(char,int) {
    if(!board[`${char}`]) {
    throw new Error("Invalid Move: characters go from A-H");

    }
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
    return potentials.join(", ");
  }

  //knights moves
  function knightMoves(char,int) {
    var diagonals = [];
    var finalKnights = [];
  for(var i = 0; i < charArr.length; i++) {
      var charForward = charArr[i];
      var charBackward = revChar[i];
      var numForward = numArrForward[i];
      var numBackward = numArrBackward[i];

      if(char === charForward) {
        var newCharForward = charArr.slice([i + 1]);
        }

         if(char === charBackward) {
        var newCharBackward = revChar.slice([i + 1]);
      }

        if(int === numForward) {
        var newNumForward = numArrForward.slice([i + 1]);
        }
        if(int === numBackward) {
        var newNumBackward = numArrBackward.slice([i + 1]);
        }
      }

      diagonals.push(newCharForward[0] + (int + 2));
      diagonals.push(newCharForward[0] + (int - 2));
      diagonals.push(newCharForward[1] + (int + 1));
      diagonals.push(newCharForward[1] + (int - 1));
      diagonals.push(newCharBackward[0] + (int + 2));
      diagonals.push(newCharBackward[0] + (int - 2));
      diagonals.push(newCharBackward[1] + (int + 1));
      diagonals.push(newCharBackward[1] + (int - 1));

      for(var j = 0; j < diagonals.length; j++) {
        knightsDiagonals = diagonals[j];
        if(knightsDiagonals < 'h8' && typeof knightsDiagonals === "string") {
          finalKnights.push(knightsDiagonals);
      }
    }
      return finalKnights.join(", ");
  }

//main function to input piece and position on the board, with helper variables determining output
function chessGame(piece,pos) {
  if(pos.length > 2) {
    throw new Error("Invalid Move: Sequence is 1 Letter A-H and 1 Number 1-8");
  }
  var newPiece = piece.toLowerCase();
  var char = pos.charAt(0);
  var int = parseInt(pos.charAt(1));


  if(newPiece === "rook") {
    return vertHoriz(char,int);
  }

  if(newPiece === "queen") {
    var queensMoves = [];
    queensMoves.push(diagChess(char,int));
    queensMoves.push(vertHoriz(char,int));
    return queensMoves.flat().join(", ");
  }

  if(newPiece === 'knight') {
    return knightMoves(char,int);
  }

  if(newPiece !== 'knight' || newPiece !== "queen" || newPiece !== "rook") {
    throw new Error("Invalid Piece. Please select queen,knight, or rook");

  }

  if(int > 9) {
    throw new Error("Invalid Move: Board goes up to 8");
  }




}
