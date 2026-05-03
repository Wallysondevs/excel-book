import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxRanking() {
  return (
    <PageContainer title="DAX — RANKX e TOPN" subtitle="Posição e top N — com cuidados." difficulty="avancado" timeToRead="6 min">
      <h2>RANKX</h2>
      <CodeBlock language="text" code={`RANKX( tabela ; expressão ; [valor] ; [ordem] ; [empate] )

Ranking de produtos por vendas:
Rank Produto = RANKX( ALL(Produtos[Nome]) ; [Total Vendas] )

→ ALL é essencial para que o ranking compare TODOS os produtos
   (sem ALL, ranking sempre seria 1 — pois há só 1 linha no contexto)`} />
      <h2>TOPN</h2>
      <CodeBlock language="text" code={`TOPN( N ; tabela ; ordem_expr ; ASC|DESC )

Vendas dos top 5 produtos:
Vendas Top 5 = SUMX(
   TOPN( 5 ; ALL(Produtos[Nome]) ; [Total Vendas] ; DESC ) ;
   [Total Vendas]
)`} />
      <h2>Vendas Top 10 + Outros</h2>
      <CodeBlock language="text" code={`Outros = [Total Vendas] - [Vendas Top 10]

→ útil em pizza/treemap "Top N + Outros"`} />
    </PageContainer>
  );
}
