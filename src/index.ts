/* TypeScript is essentially JavaScript with static typing and some additional features that
help us write more concise and robust code.*/
// TypeScript is build on JavaScript
// With TypeScript we can catch more bugs at compile time.
/* Browsers don’t understand TypeScript code. So we need to use the TypeScript compiler
to compile and translate (or transpile) our TypeScript code into regular JavaScript for
execution by browsers.*/
// Typescript is superset of JavaScript. Any Js code is valid in Typescript
console.log("Hello TypeScript");

// let age: number = 21;

/* Debugging Typescript applications

 > We can debugg typescript application in VsCode. 
 > We have to enable sourceMap feature under Emit in tsconfig.json file. 
 > So sourceMap is a file that spcecifies how each line of our typescript code maps to the generated js code.
 > Comeback to terminal and recompile code using tsc command
*/

let age: number = 21;
if (age < 50) {
  age += 10;
}
