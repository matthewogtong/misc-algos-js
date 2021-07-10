/*
Determine the factors of a number (i.e., all positive integer values that evenly divide into a number)
and then return the pth element of the list, sorted ascending. If there is no pth element, return 0.
*/

function pthFactor(n, p) {
    // Write your code here
    let factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i+=1) {
        if(n % i === 0) {
            factors.push(i);
            if (n / i !== i) {
                factors.push(n / i);
            }
        }
    }
    
    factors.sort((a, b) => a - b);

    if (p > factors.length) {
        return 0;
    } else {
        return factors[p - 1];
    }
}