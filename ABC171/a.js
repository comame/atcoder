function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ char ] = readMany(1)
    if (char == char.toLowerCase()) {
        console.log('a')
    } else {
        console.log('A')
    }
})()
