// console.log("this is from my index.js file")

// var a = "a" // can be redeclared, hoisted, and reassigned
// let b = "b" // cannot be redeclared, hoisted, can be reassigned
// const c = "c" // cannot be redeclared, hoisted, or reassigned


// Redeclaration
var a = "a"
let b = "b"
const c = "c"

// var a = 2

// console.log(a)

// log 2

// Reassigning

// let b = "b"

//  b = "js rocks"

//  console.log(b)


// Hoisting

// let b = "b"
// const c = "c"

// console.log(a)

// let a = "a"


/*
multiline comment
*/


// String interpolation
// const hello = "hi there"
// const greeting = `${hello} World`

// console.log(greeting)

// function hi() {
//   console.log(greeting)
// }

// const hi = function(){
//   console.log(greeting)
// }



// Hoisting in functions
const hi = "hi there"
const greeting = `${hi} World` + "!"

hello()

function hello() {
  console.log(greeting)
}


// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// hello()

// const hello = function(){
//   console.log(greeting)
// }


// Arrow functions

// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// const hello = () => {
//   console.log(greeting)
// }

// Arguments

// const hi = "hi there"
// const greeting = `${hi} `


// const hello = function(name){
//   console.log(greeting + name + "!")
// }

// hello()

//Default arguments

// const hi = "hi there"
// const greeting = `${hi} `


// const hello = function(name="Corinna"){
//   console.log(greeting + name + "!")
// }

// hello("Matt")
// hello()

//Return values

// const hi = "hi there"
// const greeting = `${hi} `


// const hello = function(name="Corinna"){
//   return(greeting + name + "!")
// }
// console.log(hello("Max"))
// const cj = hello()
// debugger

// Single line return with an arrow function

const hi = "hi there"
const greeting = `${hi} `

const hello = name => (greeting + name + "!")

  console.log(hello("Ken"))
































