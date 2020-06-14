function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const __xMax = 201;
const __yMax = 201;

(() => {
    const [ n, _x, _y ] = readMany(3).map(it => parseInt(it))

    const map = []

    const [ x, y ] = [ _x + __yMax, _y + __yMax ]

    for (let i = 0; i < __xMax * 2 + 1; i += 1) {
        map.push([])
        for (let j = 0; j < __xMax * 2 + 1; j += 1) {
            map[i].push(0)
        }
    }

    for (let i = 0; i < n; i += 1) {
        const [ ox, oy ] = readMany(2).map(it => parseInt(it))
        map[ox + __xMax][oy + __yMax] = -1
    }
    map[__xMax][__yMax] = 1

    const queue = [[ __xMax, __yMax ]]
    const get = (i, j) => {
        if (typeof map[i] != 'undefined') {
            return map[i][j]
        }
    }

    while (true) {
        if (queue.length == 0) return console.log('-1')
        const [ i, j ] = queue.shift()
        if (i == x && j == y) {
            return console.log(map[i][j] - 1)
        }

        const steps = map[i][j] + 1

        if (get(i + 1, j + 1) == 0) {
            queue.push([ i + 1, j + 1 ])
            map[i + 1][j + 1] = steps
        }
        if (get(i, j + 1) == 0) {
            queue.push([ i, j + 1 ])
            map[i][j + 1] = steps
        }
        if (get(i - 1, j + 1) == 0) {
            queue.push([ i - 1, j + 1 ])
            map[i - 1][j + 1] = steps
        }
        if (get(i + 1, j) == 0) {
            queue.push([ i + 1, j ])
            map[i + 1][j] = steps
        }
        if (get(i - 1, j) == 0) {
            queue.push([ i - 1, j ])
            map[i - 1][j] = steps
        }
        if (get(i, j - 1) == 0) {
            queue.push([ i, j - 1 ])
            map[i][j - 1] = steps
        }
    }
})()
