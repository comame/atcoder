function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ n ] = readMany(1)
    const padding = 4 - n.length
    let str = ''
    for (const _ of Array(padding)) { str += '0' }
    str += n
    console.log(str)
})()
