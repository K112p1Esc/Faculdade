package school.sptech;

import java.util.Scanner;

public class Potencia {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Insira a base");
        Integer base = in.nextInt();
        System.out.println("Insira o expoente");
        Integer expoente = in.nextInt();
        Integer total = base;
        for (Integer i = 1; i <expoente;i++){
            total = total*base;
        }
        System.out.printf("o valor de %d elevado a %d = %d",base,expoente,total);
    }
}
