package school.sptech;

import java.util.Scanner;
import java.util.Random;

public class Exercicio2 {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Random random = new Random();
        Integer num = 0;
        for (int i = 0; i < 2; i--) {
            System.out.println("Digite um número entre 0 e 100");
            num = in.nextInt();
            if(num>=0 && num<=100){
                i = 100;
            }
        }

        Integer quantia = 0;
        for (int i = 0; i < 200; i++) {
            random.nextInt(0, 101);
            if(random.equals(num)){
                quantia++;
            }
        }
        if(quantia<10){
            System.out.println("Você é muito sortudo");
        }else if(quantia<51){
            System.out.println("Você é sortudo");
        }else {
            System.out.println("Melhor para de apostar e ir trabalhar!");
        }
    }
}
