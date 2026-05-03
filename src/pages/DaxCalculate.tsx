import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxCalculate() {
  return (
    <PageContainer title="DAX — CALCULATE e contexto de filtro" subtitle="A função mais importante do DAX. Ponto." difficulty="avancado" timeToRead="9 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`CALCULATE( expressão ; filtro1 ; filtro2 ; ... )`} />
      <h2>O que faz</h2>
      <p dangerouslySetInnerHTML={{ __html: "Recalcula a expressão <strong>modificando o contexto de filtro</strong>. Usado em quase toda medida não-trivial." }} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`Vendas total:
   Total Vendas = SUM( Vendas[Valor] )

Vendas de SP (ignora filtros e força UF=SP):
   Vendas SP = CALCULATE( [Total Vendas] ; Vendas[UF] = "SP" )

Vendas SEM filtro algum (total geral):
   Total Geral = CALCULATE( [Total Vendas] ; ALL(Vendas) )

% sobre o total:
   % Vendas = DIVIDE( [Total Vendas] ; [Total Geral] )

Vendas só de Produtos da Categoria "A":
   Vendas Cat A = CALCULATE( [Total Vendas] ; Produtos[Categoria] = "A" )`} />
      <h2>Modificadores de filtro</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>ALL(tabela ou coluna)</code> — remove filtros" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>ALLEXCEPT(tabela; col1; col2)</code> — remove tudo MENOS as colunas listadas" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>KEEPFILTERS(...)</code> — adiciona filtro sem remover existentes" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>USERELATIONSHIP(col1; col2)</code> — usa relacionamento inativo" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>REMOVEFILTERS(...)</code> — sinônimo claro de ALL" }} />
      </ul>
    </PageContainer>
  );
}
