function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it))
    let powerMod = 1
    for (let i = 1; i <= n; i += 1) {
        powerMod = powerMod * i % (10 ** 9 + 7)
    }
    console.log(powerMod)
})()
