import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Quartis() {
  return (
    <PageContainer title="QUARTIL, PERCENTIL e ORDEM" subtitle="Análise de distribuição e ranking." difficulty="intermediario" timeToRead="5 min">
      <h2>Quartis</h2>
      <CodeBlock language="text" code={`=QUARTIL.INC( int ; 0 )    mínimo
=QUARTIL.INC( int ; 1 )    Q1 (25%)
=QUARTIL.INC( int ; 2 )    mediana (50%)
=QUARTIL.INC( int ; 3 )    Q3 (75%)
=QUARTIL.INC( int ; 4 )    máximo

QUARTIL.EXC excluindo extremos`} />
      <h2>Percentil</h2>
      <CodeBlock language="text" code={`=PERCENTIL.INC( int ; 0,90 )    valor abaixo do qual ficam 90%

→ útil para "tempo de resposta P90" em SLA`} />
      <h2>Ranking</h2>
      <CodeBlock language="text" code={`=ORDEM.EQ( valor ; intervalo ; [ordem] )
   ordem: 0 (descendente, padrão), 1 (ascendente)

=ORDEM.EQ( B2 ; B\$2:B\$100 ; 0 )    posição entre os maiores

Sem empate (cada um tem rank único):
=ORDEM.EQ(B2;B\$2:B\$100) + CONT.SE(B\$2:B2;B2) - 1`} />
    </PageContainer>
  );
}
