import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxRelated() {
  return (
    <PageContainer title="DAX — RELATED e RELATEDTABLE" subtitle="Acessar colunas de tabelas relacionadas." difficulty="intermediario" timeToRead="5 min">
      <h2>RELATED</h2>
      <p dangerouslySetInnerHTML={{ __html: "De um lado MUITOS, busca o valor do lado UM (segue a relação)." }} />
      <CodeBlock language="text" code={`Em uma coluna calculada na tabela Vendas:
   Categoria = RELATED( Produtos[Categoria] )

   → para cada linha de Vendas, traz a Categoria do produto correspondente`} />
      <h2>RELATEDTABLE</h2>
      <p dangerouslySetInnerHTML={{ __html: "Caminho inverso: do lado UM, retorna a TABELA filtrada do lado MUITOS." }} />
      <CodeBlock language="text" code={`Em uma coluna calculada na tabela Produtos:
   Vendas Total = SUMX( RELATEDTABLE(Vendas) ; Vendas[Valor] )

   → soma todas as vendas daquele produto`} />
      <AlertBox type="tip" title="Coluna calculada vs Medida">
        <span dangerouslySetInnerHTML={{ __html: "Coluna calculada roda 1× para cada linha (no refresh). Medida roda no momento da análise (cada célula da TD). Em geral, prefira MEDIDA para agregações." }} />
      </AlertBox>
    </PageContainer>
  );
}
