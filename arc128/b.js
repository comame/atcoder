function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it, 10))

    function diff3(a, b) {
        return Math.abs(a - b) % 3
    }

    for (let i = 0; i < n; i += 1) {
        const [ r, g, b ] = readMany(3).map(it => parseInt(it, 10))
        const [ d1, d2, d3 ] = [ Math.abs(r - g), Math.abs(g - b), Math.abs(b - r) ].map(it => it % 3).sort()

        const max = [ r, g, b ].sort()[2]

        test(d1, d2, d3)

        if (d1 == 0 && d2 == 0 && d3 == 0) {
            console.log(max)
            continue
        }
        if (d1 == 0 && d2 == 1 && d3 == 1) {
            if (r == g) console.log(r)
            if (g == b) console.log(g)
            if (b == r) console.log(b)
            continue
        }
        if (d1 == 0 && d2 == 2 && d3 == 2) {
            if (r == g) console.log(r)
            if (g == b) console.log(g)
            if (b == r) console.log(b)
            continue
        }
        if (d1 == 0 && d2 == 0 && d3 == 1) {
            console.log(max)
            continue
        }

        if (d1 == 0 && d2 == 0 && d3 == 2) {
            console.log(max)
            continue
        }
        if (d1 == 0 && d2 == 1 && d3 == 2) {
            if (diff3(r, g) == 1) console.log(b)
            if (diff3(g, b) == 1) console.log(r)
            if (diff3(b, r) == 1) console.log(g)
            continue
        }
        console.log(-1)
    }
})()
