function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it, 10))
    const a = []
    const b = []
    for (let i = 0; i < n; i += 1) {
        const _a = readMany(1).map(it => parseInt(it, 10))[0]
        const _b = readMany(1).map(it => parseInt(it, 10))[0]
        a.push(_a)
        b.push(_b)
    }

    const fireTimes = a.map((ai, i) => ai / b[i])
    const matchTime = fireTimes.reduce((a, b) => a + b) / 2

    let t = matchTime
    let leftLength = 0
    for (let i = 0; i < n; i += 1) {
        const time = a[i] / b[i]
        if (time > t) {
            leftLength += b[i] * t
            break
        }
        t -= time
        leftLength += a[i]
    }

    console.log(leftLength)
})()

// cat $1 | DEBUG=1 node $1.js
