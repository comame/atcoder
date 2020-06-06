function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, k ] = readMany(2).map(it => parseInt(it))
    let answer = k
    for (let i = 1; i < n; i += 1) {
        answer *= k - 1
    }
    console.log(answer)
})()
