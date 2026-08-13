package school.sptech;

import java.util.Scanner;

public class Media {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Insira seu nome");
        String nome = in.nextLine();
        System.out.println("Insira a primeira nota");
        Double nota1 = in.nextDouble();
        System.out.println("Insira a segunda nota");
        Double nota2 = in.nextDouble();

        Double media = (nota1+nota2)/2;

        System.out.printf("Olá, %s. Sua média foi de %.2f",nome,media);
    }
}
