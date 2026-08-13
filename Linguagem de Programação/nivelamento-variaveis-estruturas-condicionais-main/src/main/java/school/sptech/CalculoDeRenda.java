package school.sptech;

import java.util.Scanner;

public class CalculoDeRenda {

    public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      System.out.println("Insira quantos filhos de 0 a 3 anos você possui");
      Integer filhos1 = in.nextInt();
      System.out.println("Insira quantos filhos de 4 a 16 anos você possui");
      Integer filhos2 = in.nextInt();
      System.out.println("Insira quantos filhos de 17 a 18 anos você possui");
      Integer filhos3 = in.nextInt();

      Integer totalFilho = filhos1+filhos2+filhos3;
      Double bolsa = filhos1*25.12+filhos2*15.88+filhos3*12.44;
      System.out.printf("Você tem um total de "+totalFilho+" filhos e vai receber R$"+bolsa+" de bolsa");
      in.close();
    }
}