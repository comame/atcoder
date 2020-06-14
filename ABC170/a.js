function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const x = readMany(5).map(it => parseInt(it))
    for (let i = 0; i < x.length; i += 1) {
        if (x[i] == '0') return console.log(i + 1)
    }
})()
