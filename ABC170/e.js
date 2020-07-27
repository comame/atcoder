function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, q ] = readMany(2).map(it => parseInt(it))
    const highests = []
    const rates = [ -1 ]
    const belongs = [ -1 ]
    const kinders = []

    for (let i = 1; i <= 2 * 10 ** 5; i += 1) {
        highests[i] = 0
        kinders[i] = []
    }

    for (let i = 0; i < n; i += 1) {
        const [ a, b ] = readMany(2).map(it => parseInt(it))
        rates.push(a)
        belongs.push(b)
        kinders[b].push(a)
        if (highests[b] < a) highests[b] = a
    }

    for (let i = 0; i < q; i += 1) {
        const [ c, d ] = readMany(2).map(it => parseInt(it))
        const currentBelongs = belongs[c]
        const currentKinder = kinders[currentBelongs]

        currentKinder.splice(currentKinder.findIndex(it => it == rates[c]), 1)
        if (rates[c] == highests[currentBelongs]) {
            const nextHighest = currentKinder.sort()[currentKinder.length - 1]
            highests[currentBelongs] = nextHighest
        }
        kinders[d].push(rates[c])
        if (rates[c] > highests[d]) highests[d] = rates[c]

        belongs[c] = d

        console.log([ ...highests ].sort().find(it => it != 0))
    }
})()
