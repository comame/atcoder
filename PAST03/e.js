function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, m, q ] = readMany(3).map(it => parseInt(it))

    const nodes = []
    for (let i = 0; i < n; i += 1) {
        nodes.push({
            color: 0,
            connects: [] // node index
        })
    }
    for (let i = 0; i < m; i += 1) {
        const [ u, v ] = readMany(2).map(it => parseInt(it) - 1)
        nodes[u].connects.push(v)
        nodes[v].connects.push(u)
    }
    readMany(n).map(it => parseInt(it)).forEach((it, index) => {
        nodes[index].color = it
    })

    for (let queryIndex = 0; queryIndex < q; queryIndex += 1) {
        const [ mode ] = readMany(1)
        if (mode == 1) {
            const x = readMany(1)[0] - 1
            console.log(nodes[x].color)
            nodes[x].connects.forEach(it => {
                nodes[it].color = nodes[x].color
            })
        } else {
            const [ x, y ] = readMany(2).map(it => parseInt(it))
            console.log(nodes[x - 1].color)
            nodes[x - 1].color = y
        }
    }
})()
