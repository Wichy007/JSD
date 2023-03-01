// for (let i = 0; i <= 999; i++) {
//     let number = i
//     if((number*3) % 111 === 0 && number*3/111 <=9 && i !== 0){
//         let middleNumber = Math.floor((number/10)%10)
//         let middlemultiply = Math.floor((number*3/10)%10)
//         if(middleNumber === middlemultiply){
//             console.log(number)
//         }
//     }
// }

// วิธีพี่มีน 

let final = 0
for (let i = 0; i <= 9; i++){
    multiply = 100*i + 10*i +i
    let result = Math.floor((multiply/3/10))%10
    i !== 0 && result === i ? final=multiply : "not have"
} 
console.log(final/3) 
