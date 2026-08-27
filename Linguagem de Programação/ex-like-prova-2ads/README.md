# Exercício - Streaming 🎬

## Orientações Gerais: 📝

1. Utilize **apenas** tipos **wrapper** (`Integer`, `Double`, `Boolean`, `String`) para atributos, parâmetros e retornos.
2. **Respeite** os nomes de métodos definidos no exercício.
3. Tome **cuidado** com os **argumentos** especificados no exercício. **Não** adicione argumentos não solicitados e mantenha a ordem definida no enunciado.
4. Verifique se **não** há **erros de compilação** no projeto antes de enviar.

---

## Orientações Adicionais ⚠️

1. Rode os testes para validar sua implementação contra a suíte de testes.
2. Caso encontre erros nos testes unitários, avise o professor e, se for confirmado, o teste incorreto será desconsiderado para avaliação.

Boa sorte no desenvolvimento! 🚀

---

## Case: Streaming 🎬

Você foi contratado para desenvolver um conjunto de funções que auxiliam na gestão de uma plataforma de streaming de filmes e séries.

O sistema deve permitir:

* validação da quantidade de telas simultâneas de uma assinatura
* validação da qualidade de vídeo contratada
* cálculo do valor da mensalidade
* cálculo do percentual de assinantes com mais de 2 telas
* identificação do filme mais assistido
* cálculo da duração (em minutos) de cada temporada de uma série
* identificação da temporada com melhor avaliação média

Todas as funções pertencem à classe `Streaming`.

---

## Classe `Streaming`

### Métodos

* `Boolean validarTelas(Integer telas)`

    * Verifica se a quantidade de telas simultâneas contratada é válida e retorna `true` caso válido e `false` caso inválido.
    * É válida quando está entre `1` e `4`, inclusive.
    * Exemplos:
        * `validarTelas(1)` → `true`
        * `validarTelas(4)` → `true`
        * `validarTelas(0)` → `false`
        * `validarTelas(5)` → `false`

* `Boolean validarQualidade(String qualidade)`

    * Verifica se a qualidade de vídeo informada é suportada pela plataforma e retorna `true` caso válido e `false` caso inválido.
    * São suportadas as qualidades `"4K"`, `"1080p"` e `"720p"` (comparação sensível a maiúsculas/minúsculas).
    * Deve retornar `false` quando `qualidade` for `null`.
    * Exemplos:
        * `validarQualidade("4K")` → `true`
        * `validarQualidade("SD")` → `false`
        * `validarQualidade("4k")` → `false`
        * `validarQualidade(null)` → `false`

* `Double calcularMensalidade(String qualidade, Integer telas, Boolean anuncios)`

    * Retorna o valor da mensalidade a partir da quantidade de telas e da qualidade contratadas.
    * Caso `telas` ou `qualidade` sejam inválidos (ver `validarTelas` e `validarQualidade`), retorna `0.0`.
    * O preço por tela é de `R$ 6,70` por tela.
    * O preço da qualidade é somado ao preço das telas:
        * `"4K"` → `R$ 20,10`
        * `"1080p"` → `R$ 10,20`
        * `"720p"` → `R$ 7,30`
    * Caso `anuncios` seja `true`, aplica um desconto de `20%` sobre o valor total.
    * Exemplos:
        * `calcularMensalidade("4K", 2, false)` → `33.50` (2 × 6,70 + 20,10)
        * `calcularMensalidade("1080p", 1, true)` → `13.52` (6,70 + 10,20 = 16,90; com 20% de desconto)
        * `calcularMensalidade("SD", 2, false)` → `0.0` (qualidade inválida)
        * `calcularMensalidade("4K", 5, false)` → `0.0` (quantidade de telas inválida)

* `Double calcularPercentualMais2Telas(Integer[] telas)`

    * Recebe a quantidade de telas de cada assinatura de uma lista de assinantes.
    * Retorna o percentual de assinantes que possuem **mais de 2 telas** em relação ao total de assinantes.
    * Exemplos:
        * `calcularPercentualMais2Telas({1, 2, 3, 4, 5})` → `60.0` (3 de 5 assinantes têm mais de 2 telas)
        * `calcularPercentualMais2Telas({1, 1, 2})` → `0.0`
        * `calcularPercentualMais2Telas({3, 3, 3})` → `100.0`

* `String top1(String[] filmes, Integer[] views)`

    * Recebe os nomes dos filmes e a quantidade de visualizações de cada um (mesmo índice = mesmo filme).
    * Retorna o nome do filme com o **maior número de visualizações**.
    * Em caso de empate, retorna o primeiro filme encontrado com a maior quantidade de visualizações.
    * Exemplos:
        * Filmes: `{"Filme A", "Filme B", "Filme C"}`, Views: `{100, 250, 180}`
            * `top1(filmes, views)` → `"Filme B"`

* `Integer[] calcularDuracaoTemporada(Integer[][] segundos, Integer[] segundosAbertura)`

    * Recebe, para cada temporada, a duração em segundos de cada episódio (`segundos[temporada][episodio]`) e a duração da abertura da temporada (`segundosAbertura[temporada]`).
    * Para cada temporada, soma a duração de todos os episódios com a duração da abertura repetida para cada episódio (`abertura × número de episódios`), e converte o total para **minutos** (parte inteira, sem arredondar).
    * Retorna um vetor com a duração (em minutos) de cada temporada, na mesma ordem recebida.
    * Exemplos:
        * Episódios: `{{1500, 1500}, {1800, 1600}}`, Aberturas: `{60, 40}`
            * `calcularDuracaoTemporada(segundos, segundosAbertura)` → `{52, 58}`

* `Integer calcularMelhorTemporada(Double[][] notas)`

    * Recebe as notas de avaliação de cada episódio de cada temporada (`notas[temporada][episodio]`).
    * Calcula a média de notas de cada temporada.
    * Retorna o **número da temporada** (começando em `1`) com a **maior média** de notas.
    * Exemplos:
        * Notas: `{{8.0, 9.0}, {7.0, 7.0}, {9.5, 9.5}}` (médias `8.5`, `7.0`, `9.5`)
            * `calcularMelhorTemporada(notas)` → `3`

---

`[]~('>')~*` ✨
