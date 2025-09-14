public class App {

    public static int Calcular(int [] numeros){
        int Soma = 0;

        for(int numero : numeros){
            if (numero % 3 == 0 && numero % 5 == 0) {
                Soma += numero;
            }
        }
        return Soma;
    }
    public static void main(String[] args) throws Exception {
        int [] Array = {15, 30, 45, 10, 5};
        int Resultado = Calcular(Array);

        System.out.println(Resultado);
    }
}
