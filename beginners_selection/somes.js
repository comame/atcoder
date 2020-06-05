async function*readStdin(){const t={[Symbol.asyncIterator]:()=>({next:()=>(process.stdin.resume().setEncoding("utf-8"),new Promise(t=>{process.stdin.once("data",n=>{t({value:n,done:!1})})}))})};for await(const n of t){let t="";for(const e of n)" "==e||"\n"==e?(yield t,t=""):t+=e;0!=t.length&&(yield t)}}async function readMany(t,n){const e=n||(this._iter=this._iter||readStdin()),o=[];for(let n=0;n<t;n+=1)o.push((await e.next()).value);return o};


(async () => {
    const [ n, a, b ] = (await readMany(3)).map(it => parseInt(it))

    let sum = 0

    for (let i = 1; i <= n; i += 1) {
        const sumDigits = Array.from('' + i).reduce((acc, current) => acc + parseInt(current), 0)
        if (a <= sumDigits && sumDigits <= b) {
            sum += i
        }
    }

    console.log(sum)
})()
