/*
declare three variables, a and b and c. 
let a = 3;
let b =5;
let c = undefined;
*/
let a, b, c; 
a = 3; 
b = 5;

let output = '';
output += 'let a = 3\n';
output += 'let b = 5\n';
output += 'let c = undefined\n';
output += '-----------------\n';
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += 'a += b = ' + (a += b) + '\n';
output += 'a -= b = ' + (a -= b) + '\n';
output += 'a *= b = ' + (a *= b) + '\n';
output += 'a /= b = ' + (a /= b) + '\n';
output += 'a %= b = ' + (a %= b) + '\n';
output += 'a == b = ' + (a == b) + '\n';
output += 'a != b = ' + (a != b) + '\n';
output += 'a > b = ' + (a > b) + '\n';
output += 'a < b = ' + (a < b) + '\n';
output += '!a && !c = ' + (!a && !c) + '\n';
output += '!a || !c = ' + (!a || !c) + '\n';

alert(output)

/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/