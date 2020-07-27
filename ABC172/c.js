function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, m, k ] = readMany(3).map(it => parseInt(it))
    const a = readMany(n).map(it => parseInt(it))
    const b = readMany(m).map(it => parseInt(it))

    const aSum = [ 0 ]
    const bSum = [ 0 ]

    for (let i = 1; i <= n; i += 1) {
        aSum[i] = aSum[i - 1] + a[i - 1]
    }
    for (let i = 1; i <= n; i += 1) {
        bSum[i] = bSum[i - 1] + b[i - 1]
    }

    for ()
})()
