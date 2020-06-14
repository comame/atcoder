function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    // 鶴亀算を忘却した顔

    const [ x, y ] = readMany(2).map(it => parseInt(it))

    if (2 * x <= y && y <= 4 * x && y % 2 == 0) {
        console.log('Yes')
    } else {
        console.log('No')
    }
})()
