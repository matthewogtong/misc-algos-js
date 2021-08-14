/* 

You are given a two-dimensional square matrix m and an integer k. Your task is to rotate the given matrix "over diagonals" k times and return the resulting matrix. The process of rotating is described below.

The elements on the two main diagonals stay the same after rotating, but the four segments divided by these diagonals are rotated to change places in a clockwise direction. 

Note that it is guaranteed that the matrix size is an odd number.

Example

For

m = [[1, 2, 3], 
     [4, 5, 6], 
     [7, 8, 9]]
and k = 1, the output should be

rotateOverDiagonals(m, k) = [[1, 4, 3], 
                             [8, 5, 2], 
                             [7, 6, 9]]
All values not on the main diagonals have rotated clockwise 90 degrees about the center.

For

m = [[1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20],
     [21, 22, 23, 24, 25]]
and k = 1, the output should be

rotateOverDiagonals(m, k) = [[1, 16, 11, 6, 5],
                             [22, 7, 12, 9, 2],
                             [23, 18, 13, 8, 3],
                             [24, 17, 14, 19, 4],
                             [21, 20, 15, 10, 25]]
This example is demonstrated in the images above.

For

m = [[1, 2, 1],
     [5, 1, 3],
     [1, 4, 1]]
and k = 2, the output should be

rotateOverDiagonals(m, k) = [[1, 4, 1],
                             [3, 1, 5],
                             [1, 2, 1]]
After the first rotation, the matrix will look like this:

[[1, 5, 1],
 [4, 1, 2],
 [1, 3, 1]]
And after the second rotation the matrix will look like this:

[[1, 4, 1],
 [3, 1, 5],
 [1, 2, 1]]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer m

A square matrix of integers.

Guaranteed constraints:
3 ≤ m.length ≤ 99,
m.length is odd,
m.length = m[i].length,
-100 ≤ m[i][j] ≤ 100.

[input] integer k

How many times the given matrix m needs to be rotated.

Guaranteed constraints:
1 ≤ k ≤ 4.

[output] array.array.integer

Matrix m after applying k rotations.
*/


