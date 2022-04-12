const lista = [
    {
        name : 'katana' ,
        preco : 300
    },
    {
        name : 'kunai' ,
        preco : 100
    },
];

const saldoDisponivel = 1000;

function meuSaldo (saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada " , index + 1)
        console.log({ prev })
        console.log({ current })
        return prev - current.preco;

    }, saldoDisponivel);
    
}

console.log(meuSaldo(saldoDisponivel, lista));

