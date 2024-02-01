let a  = [1,4,5,3,5,63,5,6,987];
let b = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
console.log(a);

a.sort();
console.log(a);
console.log(typeof(a));

a.shift();
console.log(a);

a.unshift();
console.log(a);

console.log(a.length);

a.pop();
console.log(a);

a.push(56);
console.log(a);

a.splice(1,3,0,0,0,0);
console.log(a);


console.log(b.join("_"));

a.concat(b);
console.log(a.concat(b));