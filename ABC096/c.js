function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ h, w ] = readMany(2)
    const s = []
    for (let i = 0; i < h; i += 1) {
        const tmp = readMany(1)[0].split('')
        s.push(tmp)
    }

    const get = (arr, i, j) => {
        const tmp = arr[i]
        if (tmp) {
            return tmp[j]
        } else {
            void 0
        }
    }

    for (let i = 0; i < h; i += 1) {
        for (let j = 0; j < w; j += 1) {
            if (get(s, i, j) != '#') continue

            if (
                get(s, i - 1, j) == '#' ||
                get(s, i, j - 1) == '#' ||
                get(s, i, j + 1) == '#' ||
                get(s, i + 1, j) == '#'
            ) {
                // ok
            } else {
                return console.log('No')
            }
        }
    }

    console.log('Yes')
})()
