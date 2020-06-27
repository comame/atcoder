function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, k ] = readMany(2).map(it => parseInt(it))
    const p = readMany(n).map(it => parseInt(it)).sort((a, b) => a - b)

    let answer = 0
    for (let i = 0; i < k; i += 1) {
        answer += p[i]
    }

    console.log(answer)
})()
