package school.sptech;

import java.util.concurrent.ThreadLocalRandom;

public class Acumulador {
    public static void main(String[] args) {
        Integer acumulador = 0;
        for (Integer i = 1; i!=0;){
            i = ThreadLocalRandom.current().nextInt(11);
            acumulador+=i;
            if(i.equals(0)){
                System.out.printf("A soma dos números é %d",acumulador);
                break;
            }
        }
    }
}
