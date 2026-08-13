package school.sptech;

import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class Loteria {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    Integer guardar = 0;
    System.out.println("Escolha um número de 0 a 10");
    Integer escolhido = in.nextInt();
    for (int i = 0; i > -1; i++) {
      Integer random = ThreadLocalRandom.current().nextInt(11);
      guardar++;
      if(random.equals(escolhido)){
        if(guardar<4){
          System.out.println("Você é MUITO sortudo");
        }else if(guardar<11){
          System.out.println("Você é sortudo");
        }else{
          System.out.println("É melhor você parar de apostar e ir trabalhar");
        }
        break;
      }
    }

  }
}