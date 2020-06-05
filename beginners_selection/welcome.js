async function*readStdin(){const t={[Symbol.asyncIterator]:()=>({next:()=>(process.stdin.resume().setEncoding("utf-8"),new Promise(t=>{process.stdin.once("data",n=>{t({value:n,done:!1})})}))})};for await(const n of t){let t="";for(const e of n)" "==e||"\n"==e?(yield t,t=""):t+=e;0!=t.length&&(yield t)}}async function readMany(t,n){const e=n||(this._iter=this._iter||readStdin()),o=[];for(let n=0;n<t;n+=1)o.push((await e.next()).value);return o};


(async () => {
    const [ a, b, c ] = (await readMany(3)).map(it => parseInt(it))
    const [ s ] = await readMany(1)
    console.log(`${ a + b + c } ${ s }`)
})()
