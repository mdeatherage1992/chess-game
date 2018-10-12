
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
  var potentials = [];
  var diagDown = [8,7,6,5,4,3,2,1];
  var diagUp = [1,2,3,4,5,6,7,8];
  if(newPiece === "rook") {
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
  }

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
      for(var i = 0; i < diagUp.length; i++) {
        potentials.push(key + diagUp[i]);
        potentials.push(key + diagDown[i]);
        }
     }
  }

  if(newPiece === "knight") {
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
  }

    return potentials;
  }






// var board = {
//   a:[1,2,3,4,5,6,7,8],
//   b:[1,2,3,4,5,6,7,8],
//   c:[1,2,3,4,5,6,7,8],
//   d:[1,2,3,4,5,6,7,8],
//   e:[1,2,3,4,5,6,7,8],
//   f:[1,2,3,4,5,6,7,8],
//   g:[1,2,3,4,5,6,7,8],
//   h:[1,2,3,4,5,6,7,8]
// }
