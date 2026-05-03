import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxIteradoras() {
  return (
    <PageContainer title="DAX — funções X (SUMX, COUNTX, AVERAGEX)" subtitle="Calcule linha-a-linha e depois agregue." difficulty="avancado" timeToRead="7 min">
      <h2>O 'X' significa iteração</h2>
      <CodeBlock language="text" code={`SUMX( tabela ; expressão )

Para cada LINHA de tabela:
   1. avalia 'expressão' naquela linha
   2. soma todos os resultados`} />
      <h2>Por que precisa</h2>
      <p dangerouslySetInnerHTML={{ __html: "Imagine: você tem Quantidade e PreçoUnit em colunas separadas. <code>SUM(Quantidade) * SUM(Preço)</code> está ERRADO (multiplica somas). O certo é somar os produtos linha a linha:" }} />
      <CodeBlock language="text" code={`Faturamento = SUMX( Vendas ; Vendas[Quantidade] * Vendas[PreçoUnit] )

→ para cada venda calcula Q×P, depois soma tudo`} />
      <h2>Família X</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>SUMX</code> — soma" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>AVERAGEX</code> — média" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>COUNTX</code> — conta linhas com valor" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>MAXX / MINX</code> — extremos da expressão" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>RANKX(tabela; expr)</code> — ranking" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>CONCATENATEX(tab; expr; \", \")</code> — junta strings" }} />
      </ul>
    </PageContainer>
  );
}
