let s1 = -1;
let s2=1;
let s3;

function numero(num) {
    let sum= []  

   for (let i=0; i <= num; i++) {
    s3 = (s1) + (s2);
    s1 = s2;
    s2 = s3;
    sum = [...sum,s3]
 }
    return sum;
}
const a = numero(6)
console.log(a);