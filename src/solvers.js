/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];

  for (var r = 0; r < n; r++) {
    var row = [];
    for (var c = 0; c < n; c++) {
      if (c === r) {
        row[c] = 1;
      } else {
        row[c] = 0;
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(n) {
    if (n === 1){
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  // The solution for NRooks for a square chessboard is the factorial of the board.
  var solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  return undefined;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n ===0 ) {
    return 1;
  }
  var successCount = 0;

  var board = new Board({n: n});

  var testRow = function(rowIndex) {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      // Check the square for failure (conflict)

      board.togglePiece(rowIndex, colIndex);
      // If failure
      if (board.hasAnyQueensConflicts()) {
        //  continue
        board.togglePiece(rowIndex, colIndex);
        continue;

        // Else able to place
      } else {
        //  If were at the last row
        if (rowIndex === n - 1) {
          // bail boyeez
          successCount++;
        } else {
          //  call testRow again with next row
          testRow(rowIndex + 1);
        }
      }
      board.togglePiece(rowIndex, colIndex);
    }
  };

  testRow(0);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(successCount));
  return successCount;
};
