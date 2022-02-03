function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

//https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=1159&lang=jp

// const [ a, b, c ] = readMany(3)

(() => {
    // code
})()

// cat $1 | DEBUG=1 node $1.js
