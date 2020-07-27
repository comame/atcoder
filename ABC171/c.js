function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const alphabets = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

    const n = Number.parseInt(readMany(1)[0])

    let length = 0
    let tmpSum = 0
    while (true) {
        length += 1
        tmpSum += alphabets.length ** length
        if (tmpSum >= n) break
    }

    tmpSum = 0
    for (let i = 0; i < length; i += 1) {

    }
})()
