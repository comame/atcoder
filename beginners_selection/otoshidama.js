function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    let [ n, y ] = readMany(2).map(it => parseInt(it))
    for (let a = 0; a <= 2000; a += 1) {
        for (let b = 0; b <= 2000; b += 1) {
            if (9000 * a + 4000 * b == y - 1000 * n && n - a - b >= 0) {
                return console.log(`${a} ${b} ${n - a - b}`)
            }
        }
    }
    console.log('-1 -1 -1')
})()
