function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, s ] = readMany(2)

    const west = []
    for (let i = 0; i < n; i += 1) {
        const before = west[i - 1] || 0
        if (s[i] == 'W') {
            west.push(before + 1)
        } else {
            west.push(before)
        }
    }

    const leader = []
    for (let i = 0; i < n; i += 1) {
        const people = (west[i - 1] || 0) + ((n - i - 1) - (west[n - 1] - west[i]))
        leader.push(people)
    }

    let ans = Infinity
    for (let i = 0; i < n; i += 1) {
        if (leader[i] < ans) ans = leader[i]
    }

    console.log(ans)
})()
