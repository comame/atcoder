function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const [ n ] = readMany(1)
const plans = [{ t: 0, x: 0, y: 0 }]
for (let i = 0; i < n; i += 1) {
    const [ t, x, y ] = readMany(3).map(it => parseInt(it))
    plans.push({ t, x, y })
}

for (let i = 1; i < plans.length; i += 1) {
    const now = plans[i - 1]
    const next = plans[i]

    const interval = next.t - now.t
    const distance = Math.abs(next.x - now.x) + Math.abs(next.y - now.y)

    if (distance > interval) {
        return console.log('No')
    }

    if ((interval - distance) % 2 != 0) {
        return console.log('No')
    }
}

console.log('Yes')
