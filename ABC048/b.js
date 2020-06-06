function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ a, b, x ] = readMany(3).map(it => BigInt(parseInt(it)))
    if (a == 0) {
        return console.log(b / x + 1)
    } else {
        const ans = b / x  - (a - BigInt(1)) / x
        console.log(ans)
    }
})()
