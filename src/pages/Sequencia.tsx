import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Sequencia() {
  return (
    <PageContainer title="SEQUÊNCIA — gere séries numéricas" subtitle="Substitui '1, 2, 3, …' arrastado a mão." difficulty="intermediario" timeToRead="4 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=SEQUÊNCIA( linhas ; [colunas] ; [início] ; [passo] )

=SEQUÊNCIA(10)             1..10 em coluna
=SEQUÊNCIA(1;10)           1..10 em linha
=SEQUÊNCIA(5;5)            matriz 5×5 com 1..25
=SEQUÊNCIA(12;1;0;30)      0,30,60,90... (12 valores)
=SEQUÊNCIA(31;1;DATA(2025;1;1))  todos os dias de janeiro`} />
      <h2>Calendário em uma fórmula</h2>
      <CodeBlock language="text" code={`=TEXTO( SEQUÊNCIA(31;1;DATA(2025;1;1)) ; "ddd dd/mm" )`} />
      <h2>Combinando com outras</h2>
      <CodeBlock language="text" code={`Tabuada do 7:
="7 × " & SEQUÊNCIA(10) & " = " & 7*SEQUÊNCIA(10)

Numerar linhas filtradas:
=SEQUÊNCIA( LINS( resultado_filtro# ) )`} />
    </PageContainer>
  );
}
