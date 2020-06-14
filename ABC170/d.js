function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it))
    const a = readMany(n).map(it => parseInt(it)).sort((a, b) => a- b)

    const dp = []
    for (let i = 1; i <= a[n - 1]; i += 1) {
        dp[i] = false
    }

    for (const num of a) {
        for (let i = 2; num * i <= a[a.length - 1]; i += 1) {
            dp[i * num] = true
        }
    }

    let count = 0
    let duplicated = false
    for (let i = 0; i < n; i += 1) {
        const num = a[i]

        if (num == a[i + 1]) {
            duplicated = true
            continue
        }
        if (duplicated) {
            duplicated = false
            continue
        }

        if (!dp[num]) {
            count += 1
        }
    }

    console.log(count)
})()
