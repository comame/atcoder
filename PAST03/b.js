function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n, m, q ] = readMany(3).map(it => parseInt(it))

    // probremScores[i]: 問題 i のスコア
    const probremScores = []
    for (let i = 0; i < m; i += 1) {
        probremScores.push(n)
    }

    // contestantACs[i]: 参加者 i が正解した問題番号の配列
    const contestantACs = []
    for (let i = 0; i < n; i += 1) {
        contestantACs.push([])
    }

    for (let queryIndex = 0; queryIndex < q; queryIndex += 1) {
        const [ mode ] = readMany(1)
        if (mode == 1) {
            const contestant = (readMany(1))[0] - 1
            const acceptedProbrems = contestantACs[contestant]
            let score = 0
            for (const ac of acceptedProbrems) {
                score += probremScores[ac]
            }
            console.log(score)
        } else {
            const [ contestant, probrem ] = readMany(2).map(it => parseInt(it) - 1)
            probremScores[probrem] -= 1
            contestantACs[contestant].push(probrem)
        }
    }
})()
