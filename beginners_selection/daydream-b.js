function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const [ s ] = readMany(1)
for (let i = s.length; i > 0;) {
    if (s.slice(i - 7, i) == 'dreamer') {
        i -= 7
    } else if (s.slice(i - 5, i) == 'erase') {
        i -= 5
    } else if (s.slice(i - 5, i) == 'dream') {
        i -= 5
    } else if (s.slice(i - 6, i) == 'eraser') {
        i -= 6
    } else {
        console.log('NO')
        return
    }
}
console.log('YES')
