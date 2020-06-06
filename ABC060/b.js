function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ a, b, c ] = readMany(3).map(it => parseInt(it))

    // n * B + C が A の倍数になる整数 n があればよい。
    for (let n = 1; n <= 200; n += 1) {
        if ((n * b + c) % a == 0) return console.log('YES')
    }
    console.log('NO')
})()
