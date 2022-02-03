function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    let s = readMany(1)[0]

    let min = s
    let max = s

    function shiftRight(str) {
        return str[str.length - 1] + str.slice(0, str.length - 1)
    }

    for (let i = 0; i < s.length; i += 1) {
        s = shiftRight(s)
        if (s < min) min = s
        if (s > max) max = s
    }

    console.log(min)
    console.log(max)
})()

// cat $1 | DEBUG=1 node $1.js
