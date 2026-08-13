package school.sptech;

import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class Sorteio {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Escolha número de 1 a 100");
        Integer escolha = in.nextInt();
        Integer achado = 0;
        Integer par = 0;
        Integer impar = 0;

        for (Integer i = 0; i<200;i++){
            Integer random = ThreadLocalRandom.current().nextInt(201);
            if(escolha.equals(random)){
                achado = i;
            }
            if (random%2==0){
                par++;
            }else {
                impar++;
            }
        }
        System.out.printf("Número escolhido na posição: %dº\nQuantia de números pares sorteados:%d\nQuantia de números impares sorteados:%d",achado,par,impar);
    }
}
