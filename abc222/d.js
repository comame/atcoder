function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = false

function test(msg) {
    if (DEBUG) console.log(msg)
}

const MOD = 998244353

;(() => {
    const [ n ] = readMany(1).map(it => parseInt(it, 10))
    const arrayOfA = readMany(n).map(it => parseInt(it, 10))
    const arrayOfB = readMany(n).map(it => parseInt(it, 10))

    const candidatesOfC = new Array(n).fill(0)
    candidatesOfC[0] = arrayOfB[0] - arrayOfA[0] + 1

    for (let i = 1; i < n; i += 1) {
        candidatesOfC[i] = arrayOfB[i] - arrayOfA[i] + 1
    }

    for (let i = 1; i < n; i += 1) {
        if (arrayOfA[i] < arrayOfB[i - 1]) {
            const n = arrayOfB[i - 1] - arrayOfA[i]
            candidatesOfC[i] = minusMod(candidatesOfC[i], n)
        }
    }

    let ans = candidatesOfC.reduce((prev, cur) => timesMod(prev, cur), 1)
    console.log(ans)
})()

function timesMod(a, b) {
    return ((a % MOD) * (b % MOD)) % MOD
}

function minusMod(a, b) {
    if (a < b) return a + MOD - b
    return a - b
}
