
let n = 10100
let ans = 0
let i = 0

while(n>0){
    let remainder = n%10
    n = Math.floor(n/10)
    ans = remainder*Math.pow(2,i) + ans
    ++i
}

console.log(ans)
