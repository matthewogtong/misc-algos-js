/*
Given a string, return the character that appears the maximum number of times in the string. The string will contain only ASCII characters, from the ranges
('a'-'z', 'A'-'Z','0'-'9'), and case matters. If there is a tie in the maximum number of times a character appears in the string, return the character that appears first in the string.
*/

/*
 * Complete the 'maximumOccurringCharacter' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts STRING text as parameter.
 */

function maximumOccurringCharacter(text) {
    // Write your code here
    let result = '';
    let count = 0;
    let maxCount = 0;
    
    for (let i = 0; i < text.length; i++) {
        count = 0;
        for (let j = 0; j < text.length; j++) {
            if (text[i] == text[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            result = text[i];
        }
    }
    return result;
}