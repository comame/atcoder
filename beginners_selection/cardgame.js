async function*readStdin(){const t={[Symbol.asyncIterator]:()=>({next:()=>(process.stdin.resume().setEncoding("utf-8"),new Promise(t=>{process.stdin.once("data",n=>{t({value:n,done:!1})})}))})};for await(const n of t){let t="";for(const e of n)" "==e||"\n"==e?(yield t,t=""):t+=e;0!=t.length&&(yield t)}}async function readMany(t,n){const e=n||(this._iter=this._iter||readStdin()),o=[];for(let n=0;n<t;n+=1)o.push((await e.next()).value);return o};

(async () => {
    const [ n ] = await readMany(1)
    const a = (await readMany(n)).map(it => parseInt(it))

    const sorted = a.sort((a, b) => b - a)
    let alice = 0
    let bob = 0
    for (let i = 0; i < sorted.length; i += 1) {
        if (i % 2 == 0) {
            alice += sorted[i]
        } else {
            bob += sorted[i]
        }
    }

    console.log(alice - bob)
})()
