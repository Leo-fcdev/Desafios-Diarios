function NPrimos(num){
    
    if(num <= 1){
        return false
    }

    for (let i = 2 ; i <= Math.sqrt(num) ; i++){
        if (num % i === 0){
            return false
        }

    }

    return true;
}

 function PlanetaExotico(planetas){
    
    let ContadorDePlanetaExotico = 0;

    for (const planeta of planetas){
        let ContadorDePrimosNoPlaneta = 0;

        for(const caracterisca of planeta){

            if (NPrimos(caracterisca)){
                ContadorDePrimosNoPlaneta++;
            }
        }
        if(ContadorDePrimosNoPlaneta === 3){
            ContadorDePlanetaExotico++;
        }
    }
    
    return ContadorDePlanetaExotico
}


const DadosPlanetas = [[2, 3, 5, 7, 8], [1, 4, 6, 8, 10], [7, 11, 13, 17], [2, 4, 5, 9, 3]];

const Resultado = PlanetaExotico(DadosPlanetas)

console.log(`Numero de planetas Exóticos encontrados:  ${Resultado}`);