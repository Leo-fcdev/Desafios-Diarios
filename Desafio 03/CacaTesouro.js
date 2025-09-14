const FraseSecreta = "Libertatem ex tenebris"

function decifrarCodigo(numeros){
    let MensagemDecifrada = '';

    for(const numero of numeros){

        if(numero >= 1 && numero <=21){

            indice = numero - 1;
    
            MensagemDecifrada += FraseSecreta[indice];
        }
    }
    return MensagemDecifrada;
}

 const entrada1 = [1, 5, 18, 21];
 const saida1 = decifrarCodigo(entrada1)
 console.log(`Entrada: [${entrada1}]`);
 console.log(`Saida: '${saida1}'`);

 console.log('----------------')

 const entrada2 = [2, 8, 15, 1, 14];
 const saida2 = decifrarCodigo(entrada2)
 console.log(`Entrada: [${entrada2}]`);
 console.log(`Saida: '${saida2}'`);