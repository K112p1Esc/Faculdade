package school.sptech;

import java.util.Scanner;

public class Exercicio1 {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    System.out.println("Digite o nome do aluno");
    String nome = in.nextLine();
    System.out.println("Quantas provas o aluno fez");
    Integer quantia = in.nextInt();
    Double soma = 0.0;
    for (int i = 0; i < quantia; i++) {
      System.out.println("Digite a nota de cada uma das provas");
      soma += in.nextDouble();
    }
    Double media = soma/quantia;
    System.out.printf("Aluno: %s \nMédia: %.2f",nome,media);
  }
}