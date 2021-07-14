/*
A milling machine in a manufacturing facility has a tool change system. The tool changer holds n tools and some duplicate tools may be included. The operator must
most through the tools one at a time, either moving left or right. The tool changer is circular, so when the last tool in the tools array is reached in either direction,
the next tool is at the other end of the array.

Given the name of the next tool needed, determine the minimum number of left or right moves to reach it.
*/

function toolchanger(tools, startIndex, target) {
    // Write your code here
    let up = tools.slice(startIndex).concat(tools.slice(0, startIndex))
    let min = -1;
    for (let i = 0; i < up.length; i++) {
        if (up[i] === target) {
            min = i;
        }
    }
    return Math.min(min, up.length - min)
}