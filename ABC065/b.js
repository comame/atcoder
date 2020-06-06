function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it))
    const a = []
    for (let i = 0; i < n; i += 1) {
        a.push(parseInt(readMany(1)[0]) - 1)
    }

    let button = 0

    for (let i = 0; i <= n; i += 1) {
        if (button == 1) return console.log(i)
        button = a[button]
    }
    console.log('-1')
})()
