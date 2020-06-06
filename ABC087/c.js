function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const n = parseInt(readMany(1)[0])
    const a = []
    a.push(readMany(n).map(it => parseInt(it)))
    a.push(readMany(n).map(it => parseInt(it)))

    let max = 0

    for (let i = 0; i < n; i += 1) {
        let candies = 0
        for (let j = 0; j <= i; j += 1) candies += a[0][j]
        for (let j = i; j < n; j += 1) candies+= a[1][j]
        if (candies > max) max = candies
    }

    console.log(max)
})()
