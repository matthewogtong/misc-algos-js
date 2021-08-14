/* Given an integer n, your task is to create a square frame of size n, represented as an array of strings. The frame should consist of empty space, enclosed by lines made of * characters on all the edges, like this:

********
*      *
*      *
*      *
*      *
*      *
*      *
********
Example

For n = 8, the output should be

frameGenerator(n) = [
   "********", 
   "*      *", 
   "*      *", 
   "*      *", 
   "*      *",
   "*      *",
   "*      *",
   "********"
]
(This is the frame that was provided in the description)

For n = 5, the output should be

frameGenerator(n) = [
  "*****", 
  "*   *", 
  "*   *", 
  "*   *", 
  "*****"
]
For n = 2, the output should be

frameGenerator(n) = [
    "**", 
    "**"
]

*/

function frameGenerator(n) {
    let arr = []
    let start = ''
    for ( let i = 0; i < n; i++) {
        start += '*'
    }
    
    arr.push(start)
    
    let temp = ''
    let empty = n - 2
    while (empty != 0) {
        temp = '*'
        for ( let i = 0; i < n - 2; i++) {
            temp += ' '
        }
        temp += '*'
        arr.push(temp)
        empty--
    }
    
    arr.push(start)
    return arr
}
