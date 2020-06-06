function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1).map(it => parseInt(it))
    const a = []
    for (let i = 0; i < n; i += 1) {
        a.push(readMany(1)[0])
    }

    const charArr = []
    outer: for (let i = 0; i < n / 2; i += 1) {
        for (const char of a[i]) {
            if (Array.from(a[n - 1 - i]).includes(char)) {
                charArr.push(char)
                continue outer
            }
        }
        return console.log('-1')
    }

    let answerStr = charArr.join('')
    for (let i = charArr.length - 1; i >= 0; i -= 1) {
        if (n % 2 == 1 && i == charArr.length - 1) continue
        answerStr += charArr[i]
    }

    console.log(answerStr)
})()
