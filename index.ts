// function total(matrix:number[][]){
//     let sum=0
//     for (let i = 0; i < matrix.length-1; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//                   if(matrix[i][j]===0){
//                       matrix[i+1][j]=0
//                   }
//
//              sum+=matrix[i][j]
//         }
//     }
//     return sum
//
// }
//
// let matrix1=[[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
//
//
// console.log(total(matrix1))

function matrixElementsSum(matrix) {
    let totalCost = 0;
    let rowLength = matrix[0].length;
    let columnLength = matrix.length;
    for (let i = 0; i < rowLength * columnLength; i++) {
        let row = Math.floor(i / rowLength);
        let col = i % rowLength;
        if (matrix[row][col] === 0 && row + 1 < columnLength) {
            matrix[row + 1][col] = 0;
        }
        totalCost += matrix[row][col];
    }
    return totalCost;
}
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0],[2, 0, 3, 3]]

console.log(matrixElementsSum(matrix))