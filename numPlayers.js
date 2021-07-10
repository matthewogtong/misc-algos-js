/*
A group of friends are playing a video game together. During the game, each player
earns a number of points. At the end of a round, players who achieve at least a certain rank
get to "level up" their characters to gain increased abilities. Given the scores of the players
at the end of a round, how many players will be able to level up?

Note: Players with equal scores will have equal ranks, but the player with the 
next lower score will be ranked based on the position within the list of all players'
scores. For example, if there are four players, and three players tie for first place, their ranks are
1, 1, 1, 4. 

Note: No player with a score of 0 can level up, regardless of rank.
*/

// function levelUp(arr, k){
//     let counter = new Array(101).fill(0)
    
//     // count players at each index
//     for(let num of arr){
//        counter[num]++
//     }
    
//     let final = 0;
//     let rank = 0;
    
//     // counter players which satisfy cutoff criteria
//     for(let i=100; i>=0; i--){
//       // player with zero score cannot be leveled up so do not add that count in final
//       if(i === 0){
//         rank += counter[i]
//       }
//       else if(counter[i] > 0){
//         final+= counter[i]
//         rank += counter[i]
//       }
      
//       // break when rank exceeds k
//       if(rank >= k ){
//         return final
//       }
//     }
    
//     return final
//   }

let sampleScores = [5, 4, 3, 2, 2]
let cutoff = 4
// console.log(levelUp(sampleScores, rank))

function numPlayers(k, scores) {
    
    if (k<=0 || scores.length === 0) return 0;
    let sortedScores = scores.sort((a, b)=>b-a);
    if (sortedScores[0]===0) {
        return 0;
    } else if (sortedScores[0]===sortedScores[scores.length-1]) {
        return scores.length;
    }
    
    let rank=1;
    let total=1;
    let counter=0;
    let highscores=[];
    highscores.push(sortedScores[0])

    for (let i=1; i<scores.length; i++) {
        let score = sortedScores[i];
        if (rank>=k && score !== sortedScores[i-1]) return total;
        if (highscores.includes(score)) {
            total++;
            counter++;
        } else if (score === 0) {
            break;
        } else {
            total++;
            highscores.push(score)
            counter ? rank+=counter : rank++;
            counter = 0 ;
        }

    }
    return total
}

console.log(numPlayers(cutoff, sampleScores))
