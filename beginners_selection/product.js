async function*readStdin(){const t={[Symbol.asyncIterator]:()=>({next:()=>(process.stdin.resume().setEncoding("utf-8"),new Promise(t=>{process.stdin.once("data",n=>{t({value:n,done:!1})})}))})};for await(const n of t){let t="";for(const e of n)" "==e||"\n"==e?(yield t,t=""):t+=e;0!=t.length&&(yield t)}}async function readMany(t,n){const e=n||(this._iter=this._iter||readStdin()),o=[];for(let n=0;n<t;n+=1)o.push((await e.next()).value);return o};


(async () => {
    const [ a, b ] = (await readMany(2))
        .map(it => parseInt(it))
        .map(it => it % 2)
    if ((a * b) % 2 == 0) {
        console.log('Even')
    } else {
        console.log('Odd')
    }
})()
