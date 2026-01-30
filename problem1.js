//IEEE 754 Floating-Point Precision Error//
//Binary Floating-Point Representation Issue//


//solve-1//
let a = 0.2;
let b = 0.1;
console.log(a+b);

let x = a+b;
x=Number(x.toFixed(2));
console.log(x===0.3);


//solve-2//
let c = 0.2;
let d = 0.1;
console.log(c+d);

let y = c+d;
console.log(Math.abs(y - 0.3) < Number.EPSILON); 


//solve-3//
let e = 0.2;
let f = 0.1;
console.log(e+f);

let z = (0.2 * 10 + 0.1 * 10) / 10;

console.log(z);         
console.log(z === 0.3);
