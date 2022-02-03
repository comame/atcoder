function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    const s = readMany(1)[0].split('').sort().join('')
    let chars = 3
    for (let i = 1; i < s.length; i += 1) {
        if (s[i - 1] == s[i]) chars -= 1
    }
    if (chars == 1) {
        console.log(1)
    } else if (chars == 2) {
        console.log(3)
    } else {
        console.log(6)
    }
})()

// cat $1 | DEBUG=1 node $1.js
