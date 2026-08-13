package school.sptech;

import java.util.Scanner;

public class Troco {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Insira o valor unitário do seu produto");
        Double unidade = in.nextDouble();
        System.out.println("Quanto você vendeu?");
        Double vendido = in.nextDouble();
        System.out.println("Quanto foi pago");
        Double pago = in.nextDouble();

        Double devolvido = pago-unidade*vendido;

        System.out.printf("Seu troco será de R$ %.2f, onde \"%.2f\" é o valor a ser devolvido ao cliente.", devolvido, devolvido);
    }
}
