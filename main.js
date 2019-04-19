alert('Sum of factories is' + sum(factoryAll(getNumbers())))

function factory(number) {
    let factoryNum = 1;
    if (number === 0 || number === 1) {
        return factoryNum;
    }
    for (let i = 2; i <= number; i++) {
        factoryNum *= i;
    }
    return factoryNum;
}