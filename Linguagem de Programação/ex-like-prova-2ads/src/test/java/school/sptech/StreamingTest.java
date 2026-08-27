package school.sptech;

import org.junit.jupiter.api.ClassOrderer;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestClassOrder;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;

/**
 * Suíte de testes de especificação para {@link Streaming}, por reflexão.
 *
 * A classe não tem atributos, construtor próprio nem herança/interfaces —
 * é um conjunto de métodos utilitários. Ainda assim, TODOS os testes
 * acessam a classe via {@code java.lang.reflect} (nunca chamando
 * {@code streaming.metodo(...)} diretamente): isso desacopla a
 * COMPILAÇÃO da suíte de a implementação existir. Se um método for
 * removido/renomeado em {@link Streaming}, a suíte continua compilando
 * normalmente e o teste correspondente falha com
 * {@code NoSuchMethodException} — funcionando como especificação
 * executável, não como confirmação de que algo já está pronto.
 *
 * As classes {@code @Nested} e os métodos de teste são numerados
 * (1, 2, 3... e 2.1, 2.2...) e ordenados via {@code @Order} para a árvore
 * de testes aparecer sempre na mesma sequência no preview da IDE. Cada
 * cenário parametrizado também é numerado ({@code {index}}) no nome.
 */
@TestClassOrder(ClassOrderer.OrderAnnotation.class)
class StreamingTest {

    private static final Class<Streaming> CLAZZ = Streaming.class;

    /**
     * Cria uma instância de {@link Streaming} via reflexão (construtor
     * padrão), sem depender de acesso direto ao construtor.
     */
    private static Object novaInstancia() throws ReflectiveOperationException {
        Constructor<Streaming> construtor = CLAZZ.getDeclaredConstructor();
        construtor.setAccessible(true);
        return construtor.newInstance();
    }

    /**
     * Invoca, via reflexão, o método {@code nomeMetodo} de {@link Streaming}
     * (qualquer visibilidade) com os {@code argumentos} informados.
     * {@code argumentos} é sempre montado explicitamente como
     * {@code new Object[]{...}} nos testes (nunca varargs) para não cair na
     * armadilha de um array-parâmetro (ex.: {@code Integer[]}) ser
     * "espalhado" pelo próprio mecanismo de varargs do Java.
     */
    private static Object invocar(String nomeMetodo, Class<?>[] tiposParametros, Object[] argumentos)
            throws ReflectiveOperationException {
        Method metodo = CLAZZ.getDeclaredMethod(nomeMetodo, tiposParametros);
        metodo.setAccessible(true);
        return metodo.invoke(novaInstancia(), argumentos);
    }

    @Nested
    @Order(1)
    @DisplayName("1. Métodos")
    class MetodosTest {

        @Test
        @DisplayName("1. Deve possuir todos os métodos com a assinatura esperada")
        void deveValidarMetodos() {
            assertAll(
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod("validarTelas", Integer.class),
                            "Deve possuir o método validarTelas(Integer)"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod("validarQualidade", String.class),
                            "Deve possuir o método validarQualidade(String)"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod(
                                    "calcularMensalidade", String.class, Integer.class, Boolean.class),
                            "Deve possuir o método calcularMensalidade(String, Integer, Boolean)"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod(
                                    "calcularPercentualMais2Telas", Integer[].class),
                            "Deve possuir o método calcularPercentualMais2Telas(Integer[])"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod("top1", String[].class, Integer[].class),
                            "Deve possuir o método top1(String[], Integer[])"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod(
                                    "calcularDuracaoTemporada", Integer[][].class, Integer[].class),
                            "Deve possuir o método calcularDuracaoTemporada(Integer[][], Integer[])"),
                    () -> assertDoesNotThrow(() -> CLAZZ.getDeclaredMethod(
                                    "calcularMelhorTemporada", Double[][].class),
                            "Deve possuir o método calcularMelhorTemporada(Double[][])")
            );
        }
    }

    @Nested
    @Order(2)
    @DisplayName("2. validarTelas(Integer telas)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class ValidarTelasTest {

        @Order(1)
        @ParameterizedTest(name = "{index} - telas={0} -> {1}")
        @DisplayName("2.1. Deve validar se a quantidade de telas está entre 1 e 4")
        @CsvSource({
                "1, true",
                "2, true",
                "3, true",
                "4, true",
                "0, false",
                "5, false",
                "-1, false",
                "6, false",
                "10, false",
                "-5, false",
                "100, false",
                "-100, false"
        })
        void deveValidarQuantidadeDeTelas(Integer telas, Boolean esperado) throws ReflectiveOperationException {
            Object atual = invocar("validarTelas", new Class<?>[]{Integer.class}, new Object[]{telas});
            assertEquals(esperado, atual);
        }
    }

    @Nested
    @Order(3)
    @DisplayName("3. validarQualidade(String qualidade)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class ValidarQualidadeTest {

        @Order(1)
        @ParameterizedTest(name = "{index} - qualidade=\"{0}\" -> {1}")
        @DisplayName("3.1. Deve validar se a qualidade informada é suportada (4K, 1080p, 720p)")
        @CsvSource({
                "4K, true",
                "1080p, true",
                "720p, true",
                "SD, false",
                "4k, false",
                "'', false",
                "1090p, false",
                "8K, false",
                "HD, false",
                "Full HD, false"
        })
        void deveValidarQualidadeSuportada(String qualidade, Boolean esperado) throws ReflectiveOperationException {
            Object atual = invocar("validarQualidade", new Class<?>[]{String.class}, new Object[]{qualidade});
            assertEquals(esperado, atual);
        }

        @Order(2)
        @Test
        @DisplayName("3.2. Deve retornar false quando a qualidade for nula")
        void deveRetornarFalseParaQualidadeNula() throws ReflectiveOperationException {
            Object atual = invocar("validarQualidade", new Class<?>[]{String.class}, new Object[]{null});
            assertFalse((Boolean) atual);
        }
    }

    @Nested
    @Order(4)
    @DisplayName("4. calcularMensalidade(String qualidade, Integer telas, Boolean anuncios)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class CalcularMensalidadeTest {

        static Stream<Arguments> cenariosValidos() {
            return Stream.of(
                    // qualidade, telas, anuncios, mensalidade esperada
                    Arguments.of("4K", 2, false, 33.50),
                    Arguments.of("1080p", 1, true, 13.52),
                    Arguments.of("720p", 4, false, 34.10),
                    Arguments.of("4K", 4, true, 37.52),
                    Arguments.of("4K", 1, false, 26.80),
                    Arguments.of("720p", 2, true, 16.56)
            );
        }

        @Order(1)
        @ParameterizedTest(name = "{index} - qualidade={0}, telas={1}, anuncios={2} -> {3}")
        @DisplayName("4.1. Deve calcular o preço de telas + qualidade, aplicando 20% de desconto quando há anúncios")
        @MethodSource("cenariosValidos")
        void deveCalcularMensalidadeComDadosValidos(String qualidade, Integer telas, Boolean anuncios, Double esperado)
                throws ReflectiveOperationException {
            Object atual = invocar("calcularMensalidade",
                    new Class<?>[]{String.class, Integer.class, Boolean.class},
                    new Object[]{qualidade, telas, anuncios});
            assertEquals(esperado, (Double) atual, 0.001);
        }

        static Stream<Arguments> cenariosInvalidos() {
            return Stream.of(
                    Arguments.of("4K", 5, false),      // telas fora da faixa 1-4
                    Arguments.of("4K", 0, false),      // telas fora da faixa 1-4
                    Arguments.of("SD", 2, false),      // qualidade não suportada
                    Arguments.of(null, 2, false),      // qualidade nula
                    Arguments.of("4K", -1, false),     // telas negativa
                    Arguments.of("1080p", 10, true)    // telas muito acima da faixa
            );
        }

        @Order(2)
        @ParameterizedTest(name = "{index} - qualidade={0}, telas={1}, anuncios={2} -> 0.0")
        @DisplayName("4.2. Deve retornar 0.0 quando a quantidade de telas ou a qualidade forem inválidas")
        @MethodSource("cenariosInvalidos")
        void deveRetornarZeroParaDadosInvalidos(String qualidade, Integer telas, Boolean anuncios)
                throws ReflectiveOperationException {
            Object atual = invocar("calcularMensalidade",
                    new Class<?>[]{String.class, Integer.class, Boolean.class},
                    new Object[]{qualidade, telas, anuncios});
            assertEquals(0.0, (Double) atual, 0.001);
        }
    }

    @Nested
    @Order(5)
    @DisplayName("5. calcularPercentualMais2Telas(Integer[] telas)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class CalcularPercentualMais2TelasTest {

        static Stream<Arguments> cenarios() {
            return Stream.of(
                    Arguments.of(new Integer[]{1, 2, 3, 4, 5}, 60.0),
                    Arguments.of(new Integer[]{1, 1, 2}, 0.0),
                    Arguments.of(new Integer[]{3, 3, 3}, 100.0),
                    Arguments.of(new Integer[]{2, 4}, 50.0),
                    Arguments.of(new Integer[]{1}, 0.0),
                    Arguments.of(new Integer[]{3}, 100.0),
                    Arguments.of(new Integer[]{4, 4, 4, 4}, 100.0),
                    Arguments.of(new Integer[]{1, 2}, 0.0),
                    Arguments.of(new Integer[]{5, 5, 1, 1}, 50.0),
                    Arguments.of(new Integer[]{2, 2, 2, 2, 3}, 20.0)
            );
        }

        @Order(1)
        @ParameterizedTest(name = "{index} - telas={0} -> {1}%")
        @DisplayName("5.1. Deve calcular o percentual de assinantes com mais de 2 telas")
        @MethodSource("cenarios")
        void deveCalcularPercentualDeAssinantesComMaisDe2Telas(Integer[] telas, Double esperado)
                throws ReflectiveOperationException {
            Object atual = invocar("calcularPercentualMais2Telas", new Class<?>[]{Integer[].class}, new Object[]{telas});
            assertEquals(esperado, (Double) atual, 0.001);
        }
    }

    @Nested
    @Order(6)
    @DisplayName("6. top1(String[] filmes, Integer[] views)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class Top1Test {

        static Stream<Arguments> cenarios() {
            return Stream.of(
                    Arguments.of(new String[]{"Filme A", "Filme B", "Filme C"}, new Integer[]{100, 250, 180}, "Filme B"),
                    Arguments.of(new String[]{"Filme X", "Filme Y", "Filme Z"}, new Integer[]{30, 80, 45}, "Filme Y"),
                    Arguments.of(new String[]{"Filme Solo"}, new Integer[]{10}, "Filme Solo"),
                    Arguments.of(new String[]{"A", "B", "C", "D"}, new Integer[]{10, 20, 5, 40}, "D"),
                    Arguments.of(new String[]{"A", "B", "C", "D"}, new Integer[]{40, 20, 5, 10}, "A"),
                    Arguments.of(new String[]{"A", "B", "C"}, new Integer[]{0, 0, 1}, "C"),
                    Arguments.of(new String[]{"A", "B"}, new Integer[]{100, 99}, "A"),
                    Arguments.of(new String[]{"A", "B", "C", "D", "E"}, new Integer[]{5, 5, 5, 5, 10}, "E"),
                    Arguments.of(new String[]{"A", "B", "C"}, new Integer[]{7, 9, 8}, "B"),
                    Arguments.of(new String[]{"Unico"}, new Integer[]{0}, "Unico"),
                    Arguments.of(new String[]{"A", "B", "C"}, new Integer[]{3, 1, 2}, "A")
            );
        }

        @Order(1)
        @ParameterizedTest(name = "{index} - filmes={0}, views={1} -> {2}")
        @DisplayName("6.1. Deve retornar o filme com maior número de visualizações")
        @MethodSource("cenarios")
        void deveRetornarFilmeMaisVisto(String[] filmes, Integer[] views, String esperado)
                throws ReflectiveOperationException {
            Object atual = invocar("top1", new Class<?>[]{String[].class, Integer[].class}, new Object[]{filmes, views});
            assertEquals(esperado, atual);
        }
    }

    @Nested
    @Order(7)
    @DisplayName("7. calcularDuracaoTemporada(Integer[][] segundos, Integer[] segundosAbertura)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class CalcularDuracaoTemporadaTest {

        static Stream<Arguments> cenarios() {
            return Stream.of(
                    Arguments.of(new Integer[][]{{1500, 1500}, {1800, 1600}}, new Integer[]{60, 40}, new Integer[]{52, 58}),
                    Arguments.of(new Integer[][]{{600}}, new Integer[]{59}, new Integer[]{10}),
                    Arguments.of(new Integer[][]{{60}}, new Integer[]{0}, new Integer[]{1}),
                    Arguments.of(new Integer[][]{{3600}}, new Integer[]{0}, new Integer[]{60}),
                    Arguments.of(new Integer[][]{{100, 100, 100}}, new Integer[]{20}, new Integer[]{6}),
                    Arguments.of(new Integer[][]{{1200}, {2400}, {3600}}, new Integer[]{0, 0, 0}, new Integer[]{20, 40, 60}),
                    Arguments.of(new Integer[][]{{59}}, new Integer[]{0}, new Integer[]{0}),
                    Arguments.of(new Integer[][]{{1000, 2000}, {500}}, new Integer[]{100, 50}, new Integer[]{53, 9}),
                    Arguments.of(new Integer[][]{{45, 45, 45, 45}}, new Integer[]{0}, new Integer[]{3}),
                    Arguments.of(new Integer[][]{{700}, {1400}, {2100}, {2800}}, new Integer[]{0, 0, 0, 0}, new Integer[]{11, 23, 35, 46}),
                    Arguments.of(new Integer[][]{{0}}, new Integer[]{0}, new Integer[]{0})
            );
        }

        @Order(1)
        @ParameterizedTest(name = "{index} - segundos={0}, abertura={1} -> {2} min")
        @DisplayName("7.1. Deve somar a duração dos episódios com a abertura repetida por episódio, truncando para minutos")
        @MethodSource("cenarios")
        void deveCalcularDuracaoDeCadaTemporadaEmMinutos(Integer[][] segundos, Integer[] segundosAbertura, Integer[] esperado)
                throws ReflectiveOperationException {
            Object atual = invocar("calcularDuracaoTemporada",
                    new Class<?>[]{Integer[][].class, Integer[].class},
                    new Object[]{segundos, segundosAbertura});
            assertIterableEquals(Arrays.asList(esperado), Arrays.asList((Integer[]) atual));
        }
    }

    @Nested
    @Order(8)
    @DisplayName("8. calcularMelhorTemporada(Double[][] notas)")
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    class CalcularMelhorTemporadaTest {

        static Stream<Arguments> cenarios() {
            return Stream.of(
                    Arguments.of(new Double[][]{{8.0, 9.0}, {7.0, 7.0}, {9.5, 9.5}}, 3),
                    Arguments.of(new Double[][]{{10.0, 10.0}, {1.0, 1.0}, {9.0, 9.0}}, 1),
                    Arguments.of(new Double[][]{{6.0, 8.0}}, 1),
                    Arguments.of(new Double[][]{{5.0, 5.0}, {6.0, 6.0}}, 2),
                    Arguments.of(new Double[][]{{1.0, 1.0}, {2.0, 2.0}, {3.0, 3.0}, {4.0, 4.0}}, 4),
                    Arguments.of(new Double[][]{{4.0, 4.0}, {3.0, 3.0}, {2.0, 2.0}, {1.0, 1.0}}, 1),
                    Arguments.of(new Double[][]{{6.0, 4.0}, {2.0, 2.0}, {9.0, 3.0}}, 3),
                    Arguments.of(new Double[][]{{9.0, 9.0, 9.0}}, 1),
                    Arguments.of(new Double[][]{{2.0, 2.0}, {2.0, 2.0}, {2.0, 2.0}, {10.0, 10.0}}, 4),
                    Arguments.of(new Double[][]{{7.0, 8.0, 9.0}, {9.0, 9.0, 9.0}, {6.0, 6.0, 6.0}}, 2)
            );
        }

        @Order(1)
        @ParameterizedTest(name = "{index} - notas={0} -> temporada {1}")
        @DisplayName("8.1. Deve retornar o número da temporada (1-based) com a maior média de notas")
        @MethodSource("cenarios")
        void deveRetornarTemporadaComMaiorMedia(Double[][] notas, Integer esperado) throws ReflectiveOperationException {
            Object atual = invocar("calcularMelhorTemporada", new Class<?>[]{Double[][].class}, new Object[]{notas});
            assertEquals(esperado, atual);
        }
    }
}
