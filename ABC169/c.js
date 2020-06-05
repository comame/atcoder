function main(input) {
    const [ a, b ] = input.split(' ')
    const bX100 = b.replace('\.', '')
    const answerStrX100 = '' + (a * bX100)
    const ans = answerStrX100.slice(0, -2)
    if (ans == '') {
        console.log(ans)
    } else {
        console.log(ans)
    }
}

// main(require('fs').readFileSync('/dev/stdin', 'utf8'))
main('10 1.11')
