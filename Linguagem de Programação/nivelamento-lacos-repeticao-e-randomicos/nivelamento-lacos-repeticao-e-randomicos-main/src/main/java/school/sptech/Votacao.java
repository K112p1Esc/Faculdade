package school.sptech;

import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class Votacao {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Integer mussarela = 0;
        Integer calabresa = 0;
        Integer quatro = 0;
        for (Integer i = 0; i < 10; i++) {
            Integer random = ThreadLocalRandom.current().nextInt(1, 4);
            if (random.equals(1)) {
                mussarela++;
            } else if (random.equals(2)) {
                calabresa++;
            } else {
                quatro++;
            }
        }
        String maior = "";
        if (mussarela > calabresa) {
            if (mussarela > quatro) {
                maior = "Mussarela";
            } else {
                maior = "Quatro";
            }
        } else if (calabresa > quatro) {
            maior = "Calabresa";
        }else {
            maior = "Quatro";
        }

        System.out.printf("Mussarela: %d\nCalabresa: %d\nQuatro Queijos: %d\n\nSabor favorito: %s",mussarela,calabresa,quatro,maior);
    }
}
