```javascript name=sum1to100.js
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // 输出结果为5050
```
// 这个 for 循环会计算 1 到 100 的和，并输出结果。
// 写一个完整的 JavaScript 程序来计算 1 到 100 的和，并输出结果。```javascript name=calculateSum.js
function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log(calculateSum()); // 输出结果为5050