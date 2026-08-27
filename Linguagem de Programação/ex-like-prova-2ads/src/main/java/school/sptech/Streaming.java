package school.sptech;

public class Streaming {
    Boolean validarTelas(Integer telas){
        Boolean vali = false;
        if(telas> 0 && telas < 5){
            vali = true;
        }

        return vali;
    }

    Boolean validarQualidade(String qualidade) {
        Boolean result = false;
        if(qualidade == null){

        }else if(qualidade.equals("4K") || qualidade.equals("1080p") || qualidade.equals("720p")){
            result = true;
        }
        return result;
    }

    Double calcularMensalidade(String qualidade, Integer telas, Boolean anuncios){
        Double result = 0.0;
        Double valor = 0.0;
        if(validarQualidade(qualidade).equals(false) || validarTelas(telas).equals(false)) {
            return result;
        }else {
            if(qualidade.equals("4K")){
                valor = 20.10;
            }else if(qualidade.equals("1080p")){
                valor = 10.20;
            }else {
                valor = 7.30;
            }
            result = telas*6.70+valor;
            if(anuncios.equals(true)){
                result = result-result*0.2;
            }
            return result;
        }
    }

    Double calcularPercentualMais2Telas(Integer[] telas){
        Double result=0.0;
        double valor = 0;
        for (int i = 0; i < telas.length; i++) {
            if(telas[i] > 2){
                valor++;
            }
        }
        if(valor > 0){
            result = (valor/telas.length)*100;
        }
        return result;
    }

    String top1(String[] filmes, Integer[] views){
        String result = "";
        Integer maior = 0;
        Integer saber = 0;
        for (int i = 0; i < views.length; i++) {
            if(views[i] > maior){
                maior = views[i];
                saber = i;
            }
        }
        result = filmes[saber];

        return result;
    }

    Integer[] calcularDuracaoTemporada(Integer[][] segundos, Integer[] segundosAbertura){
        Integer[] result = new Integer[segundos.length];
        for (int i = 0; i < segundos.length; i++) {
            Integer min = 0;
            for (int j = 0; j < segundos[i].length; j++) {
                min += segundos[i][j]+segundosAbertura[i];
            }
            result[i] = min/60;
        }
        return result;
    }

    Integer calcularMelhorTemporada(Double[][] notas) {
        Integer result = 0;
        Double verif = 0.0;

        for (int i = 0; i < notas.length; i++) {
            Double medio = 0.0;

            for (int j = 0; j < notas[i].length; j++) {
                medio += notas[i][j];
            }

            medio = medio / notas[i].length;

            if (medio > verif) {
                verif = medio;
                result = i;
            }
        }

        return result + 1;
    }

}
