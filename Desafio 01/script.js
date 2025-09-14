function Calcular(numeros){
    let Soma = 0;

    for (const numero of numeros){
        
        if(numero % 3 === 0 && numero % 5 === 0){
            Soma += numero;
        }
    }

    return Soma;
}

const Array = [17, 15 , 5, 3, 60];
const Resultado = Calcular(Array);

console.log(Resultado)