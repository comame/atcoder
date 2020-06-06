function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

(() => {
    const [ a, r, n ] = readMany(3).map(it => parseInt(it))

    if ((Math.log10(a) + (n - 1) * Math.log10(r)) > 9) {
        console.log('large')
    } else {
        console.log(a * (r ** (n - 1)))
    }
})()
