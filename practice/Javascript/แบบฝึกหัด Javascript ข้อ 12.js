// make a function that calculates a blackjack score

function blackjackScore(array){
    let check1 = array.includes("J")||array.length === 1
    let score = array.reduce((sum,iv) => (sum += (iv==="A"&&(check1===true))?11:(iv==="A"&&check1===false)?1:(iv==="J"||iv==="Q"||iv==="K")?10:parseInt(iv)),0)
    return score 
}

console.log(blackjackScore(["A"]))
console.log(blackjackScore(["A","J"]))
console.log(blackjackScore(["A","10","A"]))
console.log(blackjackScore(["5","3","7"]))
console.log(blackjackScore(["5","4","3","2","A","K"]))