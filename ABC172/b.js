function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ s, t ] = readMany(2)
    let count = 0

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] != t[i]) count += 1
    }

    console.log(count)
})()
