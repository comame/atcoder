async function*readStdin(){const t={[Symbol.asyncIterator]:()=>({next:()=>(process.stdin.resume().setEncoding("utf-8"),new Promise(t=>{process.stdin.once("data",n=>{t({value:n,done:!1})})}))})};for await(const n of t){let t="";for(const e of n)" "==e||"\n"==e?(yield t,t=""):t+=e;0!=t.length&&(yield t)}}async function readMany(t,n){const e=n||(this._iter=this._iter||readStdin()),o=[];for(let n=0;n<t;n+=1)o.push((await e.next()).value);return o};

(async () => {
    // 高々 50 ^ 3 だから良いけど...

    const [ a, b, c, x ] = (await readMany(4)).map(it => parseInt(it))

    let count = 0
    for (let ia = 0; ia <= a; ia += 1) {
        for (let ib = 0; ib <= b; ib += 1) {
            for (let ic = 0; ic <= c; ic += 1) {
                if (500 * ia + 100 * ib + ic * 50 == x) count += 1
            }
        }
    }

    console.log(count)
})()
