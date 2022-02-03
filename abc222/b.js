function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, p ] = readMany(2).map(it => parseInt(it, 10))
    const a = readMany(n).map(it => parseInt(it, 10))

    let oshimaiStudents = 0
    for (const score of a) {
        if (score < p) {
            oshimaiStudents += 1
        }
    }
    console.log(oshimaiStudents)
})()
