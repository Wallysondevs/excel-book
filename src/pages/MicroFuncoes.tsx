import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MicroFuncoes() {
  return (
    <PageContainer title="AGRUPAR / MOSTRAR — funções pequenas que salvam o dia" subtitle="PROCV, ARRUMAR, MAIÚSCULA, EXATO e companhia." difficulty="iniciante" timeToRead="5 min">
      <h2>Limpeza de texto</h2>
      <CodeBlock language="text" code={`=ARRUMAR(t)          remove espaços extras
=TIRAR(t)            remove caracteres não-imprimíveis
=MAIÚSCULA(t)        TUDO MAIÚSCULO
=MINÚSCULA(t)        tudo minúsculo
=PRI.MAIÚSCULA(t)    Primeira Letra De Cada Palavra
=NÚM.CARACT(t)       quantidade de caracteres`} />
      <h2>Comparação rigorosa</h2>
      <CodeBlock language="text" code={`=EXATO(a;b)          compara MAIÚSCULAS x minúsculas
                     (= "abc"="ABC" no Excel é VERDADEIRO; EXATO é FALSO)`} />
      <h2>Substituir e contar</h2>
      <CodeBlock language="text" code={`=SUBSTITUIR(t; "antigo"; "novo")            todas as ocorrências
=SUBSTITUIR(t; "antigo"; "novo"; 2)         só a 2ª ocorrência
=MUDAR(t; início; quantos; novo)            por posição

Contar palavras:
=NÚM.CARACT(ARRUMAR(A1)) - NÚM.CARACT(SUBSTITUIR(ARRUMAR(A1);" ";"")) + 1`} />
      <h2>Conversões</h2>
      <CodeBlock language="text" code={`=VALOR("123,45")          texto → número (respeitando vírgula BR)
=TEXTO(1234,5; "#.##0,00") número → texto formatado
=NÚMARÁBICO("XIV")        14
=NUMARABICO("XII")        12
=ROMANO(2025)             "MMXXV"`} />
    </PageContainer>
  );
}
