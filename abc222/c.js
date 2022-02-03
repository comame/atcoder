function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = false

function test(msg) {
    if (DEBUG) console.log(msg)
}

(() => {
    const [ n, m ] = readMany(2).map(it => parseInt(it, 10))
    const a = new Array(2 * n)
    for (let i = 0; i < 2 * n; i += 1) {
        a[i] = readMany(1)[0].split('')
    }

    const wins = new Array(2 * n).fill(0)
    let prevOrder = new Array(2 * n).fill(0)
    for (let i = 0; i < 2 * n; i += 1) {
        prevOrder[i] = i
    }

    for (let round = 0; round < m; round += 1) {
        for (let match = 1; match <= n; match += 1) {
            test(round, match)
            test('order', prevOrder)
            test('wins', wins)
            const p1 = prevOrder[2 * match - 1 - 1]
            const p2 = prevOrder[2 * match - 1]
            test('p', p1, p2)
            const winner = doMatch(a[p1][round], a[p2][round])
            if (winner != 0) test('winner', winner == 1 ? p1 + 1: p2 + 1)
            if (winner != 0) wins[winner == 1 ? p1 : p2] += 1
            test('-')
        }
        prevOrder = calculateOrder(wins)
    }

    test('order', prevOrder)
    test('wins', wins)

    for (const o of prevOrder.map(it => it + 1)) {
        console.log(o)
    }
})()

// 1 なら p1 の勝ち、2 なら p2 の勝ち、0 なら引き分け
function doMatch(p1, p2) {
    if (p1 == 'G') {
        switch (p2) {
            case 'G': return 0
            case 'C': return 1
            case 'P': return 2
        }
    } else if (p1 == 'C') {
        switch (p2) {
            case 'G': return 2
            case 'C': return 0
            case 'P': return 1
        }
    } else if (p1 == 'P') {
        switch (p2) {
            case 'G': return 1
            case 'C': return 2
            case 'P': return 0
        }
    }
}

// 新しい orders を返す
function calculateOrder(wins) {
    const winsMap = wins.map((wins, index) => [ index, wins ])
    const order = winsMap.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    }).map(it => it[0])
    return order
}
