function findUniquePairs(numbers, target) {
    // sort numbers array
    numbers.sort();
    // create output array
    let comp = [];
    // iterate over numbers array to find pairs
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        // second iteration to find any sum pairs with num1
        for (let j = i+1; j < numbers.length; j++) {
            let num2 = numbers[j];
            // create if statement for sum pairs
            if(num1 + num2 === target) {
                // create an array of the pair to push into output array
                let pair = [num1, num2];
                comp.push(pair)
            }
        }
    }
    
    // iterate to delete duplicate pairs from output
    for (let i = 0; i < comp.length; i++) {
        for (let j = i+1; j < comp.length; j++) {
            // check and remove if pairs are duplicates
            if(JSON.stringify(comp[i]) === JSON.stringify(comp[j])) {
                comp.splice(j, 1);
            }
        }
    }
    return comp;
  }
  
  let arrayTest = [9, 2, 10, 1, 5, 3, 3];   // given array
  
  let thisTarget = 12;    // target number
  
  console.log(findUniquePairs(arrayTest, thisTarget))
  