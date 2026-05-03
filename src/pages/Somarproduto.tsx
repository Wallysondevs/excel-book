import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Somarproduto() {
  return (
    <PageContainer title="SOMARPRODUTO — o canivete suíço" subtitle="Soma, conta, pondera e filtra — tudo na mesma função." difficulty="avancado" timeToRead="8 min">
      <h2>Funcionamento básico</h2>
      <p dangerouslySetInnerHTML={{ __html: "Multiplica matrizes elemento a elemento e soma o resultado." }} />
      <CodeBlock language="text" code={`=SOMARPRODUTO( A1:A5 ; B1:B5 )

   A     B
   2     10        →  2*10 + 3*5 + 1*7 + 4*2 + 5*8 = 78
   3      5
   1      7
   4      2
   5      8`} />
      <h2>Como SOMASES alternativo</h2>
      <CodeBlock language="text" code={`Soma de Valor onde Vendedor="Ana" E UF="SP":
=SOMARPRODUTO( (tbl[Vendedor]="Ana") * (tbl[UF]="SP") * tbl[Valor] )

VERDADEIRO * VERDADEIRO * número  →  1 * 1 * número  →  só conta os que batem`} />
      <h2>Como CONT.SES</h2>
      <CodeBlock language="text" code={`Contar quantas vendas em SP acima de R\$ 1000:
=SOMARPRODUTO( (tbl[UF]="SP") * (tbl[Valor]>1000) )`} />
      <h2>Média ponderada</h2>
      <CodeBlock language="text" code={`Notas com pesos diferentes:
   B  notas    C  pesos
=SOMARPRODUTO(B2:B5 ; C2:C5) / SOMA(C2:C5)`} />
      <h2>Vantagens</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Funciona em qualquer versão do Excel (não precisa de array dinâmico)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Pode misturar somas e contagens com lógica complexa" }} />
        <li dangerouslySetInnerHTML={{ __html: "Não precisa de Ctrl+Shift+Enter" }} />
      </ul>
    </PageContainer>
  );
}
