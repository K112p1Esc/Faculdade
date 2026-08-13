package school.sptech;

import java.util.Scanner;

public class Calorias {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Quanto tempo passou se aquecendo?");
        Integer aquecer = in.nextInt();
        System.out.println("Quanto tempo passou fazendo aeróbicos?");
        Integer aero = in.nextInt();
        System.out.println("Quanto tempo passou fazendo musculação?");
        Integer muscu = in.nextInt();

        Integer caloriaTotal = muscu+aero+aquecer;
        Integer perda = muscu*25+aero*20+aquecer*12;

        System.out.printf("Olá, Jorge. Você fez um total de %d minutos de exercícios e perdeu cerca de %d calorias.",caloriaTotal,perda);
    }
}
