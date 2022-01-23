
export const utilService = {
    makeId,
    getCapitalDisplay,
    sortByValue
}

function makeId(length: number = 15): string {
    let txt = ''
    const possible = '0123456789abcdefghijclmnoartxyz'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getCapitalDisplay(word: string): string {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

function sortByValue(array: any[], value: string) {
    return array.sort((a, b) => (b[value] - a[value]))
}