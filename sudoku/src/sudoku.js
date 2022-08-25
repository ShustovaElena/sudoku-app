Array.prototype.shuffle = function() {
    var arr = this.valueOf();
    var ret = [];
    while (ret.length < arr.length) {
      var x = arr[Math.floor(Number(Math.random() * arr.length))];
      if (!(ret.indexOf(x) >= 0)) ret.push(x);
    }
    return ret;
  }
  
export function getSudoku() {
    var sudoku = [];
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    sudoku.push(arr);
    for (var i = 1; i < 9; i++) {
  
      while (sudoku.length <= i) {
        var newarr = arr.shuffle();
        var b = false;
        for (var j = 0; j < arr.length; j++) {
          for (var k = 0; k < i; k++) {
            if (sudoku[k].indexOf(newarr[j]) === j) b = true;
          }
  
        }
        if (!b) {
          sudoku.push(newarr);
        }
      }
    }
    
    return sudoku;
  }