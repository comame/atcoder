function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const DEBUG = process.env.DEBUG

function test(...msg) {
    if (DEBUG) console.log(...msg)
}

// const [ a, b, c ] = readMany(3)

(() => {
    const [ n, q ] = readMany(2).map(it => parseInt(it, 10))
    let [ s ] = readMany(1)

    let ans = ''

    for (let queryIndex = 0; queryIndex < q; queryIndex += 1) {
        const [ type, l, r ] = readMany(3).map(it => parseInt(it, 10))
        if (type == 1) {
            s = s.slice(0, l - 1) + s[r - 1] + s.slice(l, r - 1) + s[l - 1] + s.slice(r)
        }
        if (type == 2) {
            ans += check(s.slice(l - 1, r)) + '\n'
        }
    }

    console.log(ans)

    function check(s) {
        let depth = 0
        for (let i = 0; i < s.length; i += 1) {
            const c = s[i]
            if (c == '(') {
                depth += 1
            }
            if (c == ')') {
                depth -= 1
            }
            if (depth < 0) {
                return 'No'
            }
        }
        if (depth == 0) {
            return 'Yes'
        } else {
            return 'No'
        }
    }
})()

// cat $1 | DEBUG=1 node $1.js
