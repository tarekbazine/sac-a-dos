/***************************************
 ***BAZINE Tarek - CHIKHAISSA Mahfoud****
 ****ESI 2017/18 TPGO TP1****
 ****************************************/


function max(a, b) {
  if (a > b) return a;
  return b;
}

//those are going to be inputs from user
var N = 4; //5
var W = 7; //9

/*there is another seggestion is to order the items by the weight asc
so the last step of gathering those objects is more easier !!*/

/*algorithme's sructures*/
var v = [1,
  4,
  5,
  7
];

var w = [
  1,
  3,
  4,
  5
];
//    int v[] = {0  ,8, 2, 7, 6, 4};
//    int w[] = {0  ,1, 3, 6, 7, 2};
var mat = [];

// todo optimize this
for (var j = 0; j <= W; j++) {
  mat[j] = [];
}

/*init matrix*/
// --- omit this when you start j from 0
for (var i = 0; i < N; i++) {
  mat[i][0] = 0;
}
// todo optimize this
//    for (int j = 0; j <= W; j++) {
//        mat[0][j] = 0;
//    }
//this an optimization ???!! we deleting a not-needed row
for (var j = 0; j <= W; j++) {
  if (w[0] > j) {
    mat[0][j] = 0;
  } else {
    mat[0][j] = w[0];
  }
}


for (var i = 1; i < N; i++) {
  for (var j = 0; j <= W; j++) {
    if (w[i] > j) {
      mat[i][j] = mat[i - 1][j];
    } else {
      mat[i][j] = max(v[i] + mat[i - 1][j - w[i]], mat[i - 1][j]);
    }
  }
}

//printing results
//matrix
for (var i = 0; i < N; i++) {
  for (var j = 0; j <= W; j++) {
    console.log(mat[i][j]);
  }
  console.log("\n");
}

//    //the optimal weight
console.log("\n\nthe optimal weight " + mat[N - 1][W] + " \n\n");

//list of the selected objects
var j = W;
for (var i = N - 1; i > 0; i--) {
  if ((mat[i][j] == 0)) {
    console.log("fin");
    break;
  }
  if ((mat[i][j] != mat[i - 1][j])) {
    console.log("object num " + (i + 1) + " has been selected \n");
    j = j - w[i];
  }
}
