function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it, 10))
    const a = readMany(n).map(it => parseInt(it, 10))

    let bottom = Number.POSITIVE_INFINITY
    let top = 0

    let ans = ''

    for (const ai of a) {
        if (ai > bottom) {
            bottom = ai
        }
        if (top > ai) {
            top = ai
        }
    }

    console.log(ans)
})()
