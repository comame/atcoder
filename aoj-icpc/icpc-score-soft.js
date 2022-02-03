function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

(() => {
    while (true) {
        const [ judge ] = readMany(1).map(it => parseInt(it, 10))
        if (judge == 0) break

        const scores = readMany(judge).map(it => parseInt(it, 10)).sort((a, b) => a - b).slice(1, -1)
        test(scores, judge)

        const score = Math.trunc(scores.reduce((prev, curr) => prev + curr) / (judge - 2))

        console.log(score)
    }
})()
