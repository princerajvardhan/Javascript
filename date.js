///Date///
// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.getTime())
// console.log( typeof mydate)

// let mynewdate = new Date(2026,0,23,5)
// console.log(mynewdate.toDateString())

// let mynewdate2 = new Date(2026,0,23,5,3)
// console.log(mynewdate2.toLocaleString())

// let mynewdate3 = new Date("2023-01-12")
// console.log(mynewdate3.toLocaleString())

 //let mynewdate4 = new Date("12-05-2026")
// console.log(mynewdate4.toLocaleString())

// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(mynewdate4.getTime());
// console.log(Math.round (Date.now()/1000))

let date = new Date()
console.log(date.getFullYear())
console.log(date.getDay())
console.log(date.getMonth()+1)

date.toLocaleString('default',{
    weekday :"long",
})

console.log(date);



