function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

const main = async () => {
    let [ s ] = await readMany(1)
    s = s.trim()

    let tokens = []
    while (s.length) {
        if (s.startsWith('dream')) {
            tokens.push('dream')
            s = s.slice(5)
        } else if (s.startsWith('er')) {
            tokens.push('er')
            s = s.slice(2)
        } else if (s.startsWith('ase')) {
            tokens.push('ase')
            s = s.slice(3)
        } else if (s.startsWith('r')) {
            tokens.push('r')
            s = s.slice(1)
        } else {
            console.log('NO')
            return
        }
    }

    if (tokens.length == 0) {
        console.log('NO')
        return
    }
    if (![ 'er', 'dream' ].includes(tokens[0])) {
        console.log('NO')
        return
    }

    for (let i = 0; i < tokens.length; i += 1) {
        const next = tokens[i + 1]

        switch (tokens[i]) {
            case 'dream': {
                if (![ 'dream', 'er', void 0 ].includes(next)) {
                    console.log('NO')
                    return
                }
                break
            }
            case 'er': {
                const before = tokens[i - 1]
                if ([ 'r', 'er', void 0 ].includes(before)) {
                    if (next != 'ase') {
                        console.log('NO')
                        return
                    }
                } else {
                    if (![ 'er', 'dream', 'ase', void 0 ].includes(next)) {
                        console.log('NO')
                        return
                    }
                }
                break
            }
            case 'ase': {
                if (![ 'dream', 'er', 'r', void 0 ].includes(next)) {
                    console.log('NO')
                    return
                }
                break
            }
            case 'r': {
                if (![ 'dream', 'er', void 0 ].includes(next)) {
                    console.log('NO')
                    return
                }
            }
        }
    }

    console.log('YES')
}

main()
