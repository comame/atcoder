function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    let [ n, m ] = readMany(2).map(it => parseInt(it), 10)
    const b = []
    for (let i = 0; i < n; i += 1) {
        b[i] = readMany(m).map(it => BigInt(it))
    }

    test(b)

    for (let i = 0; i < n; i += 1) {
        let prev = b[i][0]
        for (let j = 1; j < m; j += 1) {
            if (b[i][j] !== prev + 1n) {
                test(3)
                console.log('No')
                return
            }
            prev = b[i][j]
        }
    }

    let prev = b[0][0]
    for (let i = 1; i < n; i += 1) {
        if (b[i][0] !== prev + 7n) {
            test(4)
            console.log('No')
            return
        }
        prev = b[i][0]
    }
    console.log('Yes')
})()

// cat $1 | DEBUG=1 node $1.js
