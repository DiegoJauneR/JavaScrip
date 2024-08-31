
// bit : 0 1
// byte: 8 bits
// byte: 0000000 - 0
// byte: 0000001 - 1
// byte: 0000010 - 2
// byte: 0000011 - 3
// byte: 0000100 - 4
// byte: 0000101 - 5
// byte: 0000110 - 6

console.log(1|3);// 00000011
console.log(1|4);// 00000101
console.log(3|5);// 00000111


console.log(1&3);// 00000001
console.log(1&4);// 00000000
console.log(3&5);// 00000001