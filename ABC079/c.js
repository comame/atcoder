function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ abcd ] = readMany(1)
    const nums = abcd.split('').map(it => parseInt(it))

    const ops = [ false, false, false ] // false: -, true: +
    for (let i = 0; i < 2 ** ops.length; i += 1) {
        for (let j = 0; j < ops.length; j += 1) {
            ops[j] = (1 << (ops.length - 1 - j)) & i
        }

        let calculated = nums[0]
        for (let j = 0; j < ops.length; j += 1) {
            if (ops[j]) {
                calculated += nums[j + 1]
            } else {
                calculated -= nums[j + 1]
            }
        }

        if (calculated == 7) {
            let answer = nums[0] + ''
            for (let j = 0; j < ops.length; j += 1) {
                if (ops[j]) {
                    answer += '+'
                } else {
                    answer += '-'
                }
                answer += nums[j + 1]
            }
            answer += '=7'
            return console.log(answer)
        }
    }
})()
