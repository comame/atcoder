function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it, 10))
    const nodes = new Array(n).fill(0)

    for (let i = 0; i <= n - 2; i += 1) {
        const [ a, b ] = readMany(2).map(it => parseInt(it, 10) - 1)
        nodes[a] += 1
        nodes[b] += 1
    }

    test(nodes)

    if (nodes.includes(n - 1)) {
        console.log('Yes')
    } else {
        console.log('No')
    }
})()

// cat $1 | DEBUG=1 node $1.js
