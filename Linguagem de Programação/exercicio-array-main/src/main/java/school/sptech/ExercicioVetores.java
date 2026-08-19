package school.sptech;

public class ExercicioVetores {
    Integer somar(Integer[] vetor) {
        Integer result = 0;
        for (Integer i : vetor) {
            result += i;
        }
        return result;
    }

    Double calcularMedia(Double[] notas) {
        Double result = 0.0;
        for (Double nota : notas) {
            result += nota;
        }
        result = result / notas.length;
        return result;
    }

    Integer buscarMaiorNumero(Integer[] vetor) {
        Integer maior = vetor[0];
        for (Integer i : vetor) {
            if (i >= maior) {
                maior = i;
            }
        }
        return maior;
    }

    Integer calcularDecimal(Integer[] binario) {
        Integer result = 0;
        Integer potencia = 0;

        for (int i = binario.length - 1; i >= 0; i--) {
            result += (int) (binario[i] * Math.pow(2, potencia));
            potencia++;
        }
        return result;
    }

    Character[] inverter(Character[] vetor) {
        Character[] copiei = new Character[vetor.length];
        Integer a = 0;
        for (int i = vetor.length - 1; i >= 0; i--) {
            copiei[a] = vetor[i];
            a++;
        }

        return copiei;
    }

    Integer[] mesclar(Integer[] vetor1, Integer[] vetor2) {
        Integer[] mesclado = new Integer[vetor1.length + vetor2.length];

        Integer i = 0;
        Integer j = 0;
        Integer k = 0;
        while (i < vetor1.length && j < vetor2.length) {
            if (vetor1[i] < vetor2[j]) {
                mesclado[k] = vetor1[i];
                i++;
            } else {
                mesclado[k] = vetor2[j];
                j++;
            }
            k++;
        }

        while (i < vetor1.length) {
            mesclado[k] = vetor1[i];
            i++;
            k++;
        }

        while (j < vetor2.length) {
            mesclado[k] = vetor2[j];
            j++;
            k++;
        }
        return mesclado;
    }

    Integer[] somarDois(Integer[] vetor, Integer alvo){
        Integer[] result = new Integer[2];
        for (int i = 0; i < vetor.length; i++) {
            for (int j = 0; j < vetor.length; j++) {
                if(vetor[j]+vetor[i]==alvo && i!=j){
                    result[0] = j;
                    result[1] = i;
                }
            }
        }
        return result;
    }
}