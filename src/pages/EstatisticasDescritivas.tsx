import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function EstatisticasDescritivas() {
  return (
    <PageContainer title="MED, MODO, DESVPAD, VAR — descritiva no Excel" subtitle="Resumo estatístico de uma amostra de dados." difficulty="intermediario" timeToRead="6 min">
      <h2>Funções</h2>
      <CodeBlock language="text" code={`MED(intervalo)             mediana (50%)
MODO.ÚNICO(int)            valor mais frequente
MODO.MULT(int)             todos os modos (matriz)
DESVPAD.A(int)             desvio padrão amostral
DESVPAD.P(int)             desvio padrão populacional
VAR.A(int)                 variância amostral
VAR.P(int)                 variância populacional
MÁXIMO/MÍNIMO              extremos
MAIOR(int; k)              k-ésimo maior
MENOR(int; k)              k-ésimo menor`} />
      <h2>Exemplo: top 3 valores</h2>
      <CodeBlock language="text" code={`=MAIOR( tbl[Valor] ; 1 )    1º maior
=MAIOR( tbl[Valor] ; 2 )    2º maior
=MAIOR( tbl[Valor] ; 3 )    3º maior

Em uma fórmula só (array dinâmico):
=MAIOR( tbl[Valor] ; SEQUÊNCIA(3) )`} />
      <h2>Coeficiente de variação</h2>
      <CodeBlock language="text" code={`=DESVPAD.A(int) / MÉDIA(int)
   → mostra dispersão relativa (útil p/ comparar conjuntos diferentes)`} />
    </PageContainer>
  );
}
