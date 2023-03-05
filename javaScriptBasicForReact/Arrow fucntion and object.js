// --------------------------------------------------------------------------------- Arrow function -----------------------------------------------------------------------------------------------------
// รูปแบบการเขียนฟังก์ชันให้สั้นลง กระชับขึ้น

const fullname = (name) => console.log(name);

fullname("Naravit")

// --------------------------------------------------------------------------------- object -----------------------------------------------------------------------------------------------------
let tall = 178
let name = "Naravit"
let lastname = "bunthap"
let age = 26

 const person = {
    name:"Naravit",
    lastname, //ถ้าชื่อตัวแปรและชื่อพริพเพอร์ตี้เหมือนกันสามารถเขียนครั้งเดียวได้เลยไม่ต้องเขียนในรูปแบบ Property : value
    height: 178,
    age(){
        return age
    }
 }

//  การเข้าถึง value ใน object ผ่าน property
 console.log(person)
 console.log(person.name)
 console.log(person.age())
 console.log(person.lastname)

// --------------------------------------------------------------------------------- Spread operator -----------------------------------------------------------------------------------------------------

const arr = [1,2,3,4,5,6];
const endarr = [7,8,9,10];

// endarr.forEach(e => arr.push(e));
let sumarr = [1,2,3,4,5,6,...endarr] //spread operator
arr.push(...endarr); //spread operator

console.log(arr)
console.log(sumarr)





