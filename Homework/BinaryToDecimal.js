
let n = 20;
let ans = ""

while(n>0){
    let remainder = n%2
    n = Math.floor(n/2)
    ans = remainder+ans
}

console.log(Number(ans)) 