function diagChess(char, int,charUp,charDown,numUp,numDown) {
  var up = [];
  for(var i = 0; i < charUp.length; i++) {
    var newCharUp = charUp[i];
    var newNumUp = numUp[i];
    var newCharDown = charDown[i];
    var newCharUp = charUp[i];

  }
}


var up = [];
var down = [];
var charFilter = charArr.filter(function(value,index,arr) {
  return value !== char
})
var numFilter = numArr.filter(function(value,index,arr){
    return value !== int
  })
for(var i = 0; i < numFilter.length; i++) {
  var newNumFilter = numFilter[i];
  var newCharFilter = charFilter[i];
  if(newNumFilter < int || newCharFilter < char) {
    down.push(newCharFilter + newNumFilter);
  } else {
    up.push(newCharFilter + newNumFilter);
    }
  }
  var both = up.concat(down);
  return both;
}

function diagUpChess(char, int,charArr, numArr) {
  var diagonals = [];
  for(var i = 0; i < charArr.length; i++) {
    var charDown = charArr[i];
    var revCharDown = revChar[i];
    var newNum = numArr[i];
    if(charDown > char) {
    var downers = charArr.slice(charDown[i]);
  }else if(revCharDown < char) {
    var alsoDowners = revChar.slice(revCharDown[i])
    }
  }
  diagonals.push(downers);
  diagonals.push(alsoDowners);
  return diagonals;
}


function diagChess(char, int,charArr) {
    var diagonals = [];
    for(var i = 0; i < charArr.length; i++) {
      var chars = charArr[i];
      if(chars !== char) {
          diagonals.push(chars + (int + 1));
          diagonals.push(chars + (int - 1));
        }
        for(var i = 0; i < edges.length; i++) {
          var theEdge = edges[i];
        var newDiagonals = diagonals.filter(function(value,index,arr) {
          return value !== theEdge;
        })
        }
      }
      return newDiagonals;
    }
