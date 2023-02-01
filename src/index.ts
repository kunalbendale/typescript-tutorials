// Prerequisites - Js, as ts is built on top of Js You need basic familarity with Js.

// Introduction to Typescript

/* What is TypeScript? Why do we need it? How is it different from Js?

 It is a programming language to address the shortcoming of Js.
 Js is a Kid without discipine. Ts is a kid with discipline.
 Technically Ts is a programming language built top of Js. So every js file is valid ts file.
 Ts creates more robust application as it provide benefits like static typing, code completion, refactoring, Shorthand notation etc.
 TypeScript is essentially Js with type checking. After writing code we pass the code to ts compiler and then compiler will tell
 us if we are doing something wrong so we can catch lot of our mistake at compile time.
 TypeScript is essentially JavaScript with static typing and some additional features that help us write more concise and robust code.
 TypeScript is build on JavaScript With TypeScript we can catch more bugs at compile time.
 Browsers don’t understand TypeScript code. So we need to use the TypeScript compiler to compile and 
 translate (or transpile) our TypeScript code into regular JavaScript for execution by browsers.
 
 Drawbacks-
 Compilation step- Browsers don't undertsand ts. so we need to convert it to Js.
 We have to be bit more disciplined in coding.
*/

console.log("Hello TypeScript");

// let age: number = 21;

/* Debugging Typescript applications

 > We can debugg typescript application in VsCode. 
 > We have to enable sourceMap feature under Emit in tsconfig.json file. 
 > So sourceMap is a file that spcecifies how each line of our typescript code maps to the generated js code.
 > Comeback to terminal and recompile code using tsc command
*/

// Install Ts compiler from npm using command npm i -g typescript. To verifu installation use command tsc -v44

// First TypeScript Program
// Create a file with index.ts extension. using ts compiler we can compile it with index.ts

// Configurating Ts File
/* 
  ofor genrationg tsconfig.json file we need to run tsc --init comand in project directory
*/

let age: number = 21;
if (age < 50) {
  age += 10;
}
