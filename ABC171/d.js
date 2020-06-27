function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it))
    const a = readMany(n).map(it => parseInt(it))
    const [ q ] = readMany(1).map(it => parseInt(it))
    const queries = []
    for (let i = 0; i < q; i += 1) {
        queries.push(readMany(2).map(it => parseInt(it)))
    }

    const map = {}
    let sum = 0
    for (let i = 0; i < n; i += 1) {
        if (a[i] in map) {
            map[a[i]] += 1
        } else {
            map[a[i]] = 1
        }
        sum += a[i]
    }

    for (let i = 0; i < q; i += 1) {
        const [ b, c ] = queries[i]

        sum += (c - b) * (map[b] || 0)

        if (c in map) {
            map[c] += map[b] || 0
        } else {
            map[c] = map[b] || 0
        }
        map[b] = 0

        console.log(sum)
    }

})()
