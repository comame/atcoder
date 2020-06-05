function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ a, b, c, d ] = readMany(4)
    let ans = 0

    for (let i = 0; i <= 100; i += 1) {
        if (
            (a <= i && i <= b) &&
            (c <= i && i <= d)
        ) {
            ans += 1
        }
    }

    console.log(ans ? ans - 1 : 0)
})()
