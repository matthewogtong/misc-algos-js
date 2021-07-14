/*
Consider an array of n ticket prices, tickets. A number, m, is defined as the size of some subsequence, s, of tickets where each element covers an unbroken range of 
integers. That is to say, if you were to sort the elements in s, the absolute difference between any elements j and j + 1 would be either 0 or 1. Determine the maximum 
length of a subsequence chosen from the tickets array.
*/

function maxTickets(tickets) {
    let max = 0;
    let count = 0;
    const s = tickets.sort((a, b) => a - b);
    for (let i = 0; i < s.length - 1; i++) {
        if(s[i + 1] - s[i] === 1 || s[i + 1] - s[i] === 0) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            count = 0;
        }
    }
    return max + 1;
}
  