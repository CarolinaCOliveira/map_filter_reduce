function filtraPares (arr) { //usando filter
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

const meuArray = [1, 8, 13, 22, 51, 60];

console.log(filtraPares(meuArray));

