function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ x, n ] = readMany(2).map(it => parseInt(it))
    const p = readMany(n).map(it => parseInt(it)).sort()

    let candidate = -1
    let beforeCandidateAbs = Infinity
    for (let i = 0; i <= 101; i += 1) {
        if (p.includes(i)) continue

        const abs = Math.abs(i - x)
        if (abs < beforeCandidateAbs) {
            beforeCandidateAbs = abs
            candidate = i
        }
    }

    console.log(candidate)
})()
