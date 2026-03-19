// Primitive data types
// int,short,string,float,double,boolean,long,null,
//symbol,Bigint
//non - premitive (refrence type)
//array,objects,function

// const score = 300
// const scorevalue = 100.2
// const IsloggedIn = false
// const outside = null
// let userEmail;

// const id = Symbol('123')
// const Anotherid = Symbol('123')
// console.log(id == Anotherid);


// const bignumber = 1223344444444433n
// console.log(bignumber);

// const heros =['Prince', 'Raj','Vardhan']
// let myobj= {
//     name:"Prince",
//     age:22
// }

//  const myfunction= function(){
//   console.log("hello world")
// }

// console.log(typeof myobj)

//--------------memory-------------
// stack(primitive), heap(non - primitive)

// let myname = "princerajvardhan0"
// let myname2 = myname
// myname2 = 'prince'

// console.log(myname);
// console.log(myname2)

// let user1 ={
//      email:"princerajvardhan2006@gmail.com",
//       upi_id :  'user@ybl'
// }

// let user2 = user1
// user2.email = "prince@gmail.com"

// console.log(user1.email)
// console.log(user2)

//  const name = 'Prince'
//  const id =  3032
//console.log(name+id+" value");

// console.log(`my name is ${name} and my id is${id}`)
// const user ={
//     name:'Prince' ,
//     id:3033,
//     work: 'unemployed',
//     salary: 2000
// }

// console.log(user)

// const name1 = "prince"
// let id2 = 2322
// let add = "india"
// let mobileno = 7217308451
// let work2 = null
// let house = undefined

// console.table([name1,id2,add,mobileno,work2,house])

// let user2 = user
// .name='narayan'
// console.log(user2)

 

//----------Day4---------------


const gamename = new String("prince-hc")
console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('p'))

let newString = gamename.substring(0,7)
console.log(newString);

const newString2 =  gamename.slice(-8,4)
console.log(newString2)

const newString3 = "   Prince  "
console.log(newString3)
console.log(newString3.trim())

const url = "https:/?prince.com/princefy"
console.log(url.replace =('prince','Raj'))
console.log(url.includes('Raj'))

console.log(gamename.split('-'))
console.log(`${gamename}${newString3}`)