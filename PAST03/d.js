function*stdinIter(){const t=require("fs").readFileSync("/dev/stdin","utf-8").trim().split(/\n|\s/);yield*t}function readMany(t,e){const i=e||this.iter||(this.iter=stdinIter()),n=[];for(let e=0;e<t;e+=1)n.push(i.next().value);return n};

// .###..#..###.###.#.#.###.###.###.###.###.
// .#.#.##....#...#.#.#.#...#.....#.#.#.#.#.
// .#.#..#..###.###.###.###.###...#.###.###.
// .#.#..#..#.....#...#...#.#.#...#.#.#...#.
// .###.###.###.###...#.###.###...#.###.###.

(() => {
    const n = parseInt(readMany(1)[0])
    const s = []
    for (let i = 0; i < 5; i += 1) {
        s.push(readMany(1)[0])
    }

    const presetFlattenNumbers = [
        '.###.#.#.#.#.#.#.###',
        '..#..##...#...#..###',
        '.###...#.###.#...###',
        '.###...#.###...#.###',
        '.#.#.#.#.###...#...#',
        '.###.#...###...#.###',
        '.###.#...###.#.#.###',
        '.###...#...#...#...#',
        '.###.#.#.###.#.#.###',
        '.###.#.#.###...#.###'
      ]

    const flattenNumbers = []
    for (let i = 0; i < n; i += 1) {
        let str = ''
        for (let j = 0; j < 5; j += 1) {
            str += s[j].slice(i * 4, (i + 1) * 4)
        }
        flattenNumbers.push(str)
    }

    const answerCharArray = []

    for (const num of flattenNumbers) {
        answerCharArray.push(presetFlattenNumbers.findIndex(it => it == num))
    }

    console.log(answerCharArray.join(''))
})()
