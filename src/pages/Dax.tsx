import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Dax() {
    return (
      <PageContainer title="DAX Básico" subtitle="Data Analysis Expressions: a linguagem de medidas do Power Pivot e Power BI." difficulty="avancado" timeToRead="10 min">
        <h2>DAX vs Fórmula tradicional</h2>
      <ul>
        <li>Trabalha com <strong>tabelas inteiras e contextos</strong>, não com células.</li>
        <li>Usa o <strong>modelo de dados</strong> e seus relacionamentos.</li>
        <li>Resulta em <strong>medidas</strong> (calculadas em tempo real conforme filtros) ou <strong>colunas calculadas</strong>.</li>
      </ul>
      <h2>Criar uma medida</h2>
      <p>Janela Power Pivot → área de cálculo embaixo da tabela. Ou na pivot, <strong>Análise → Medidas → Nova Medida</strong>.</p>
      <CodeBlock language="text" code={`Total Vendas := SUM(tblVendas[Total])

  Quantidade := COUNTROWS(tblVendas)

  Ticket Médio := DIVIDE([Total Vendas]; [Quantidade]; 0)

  Vendas SP := CALCULATE([Total Vendas]; tblVendas[Estado] = "SP")`} />
      <h2>CALCULATE — a função mestra</h2>
      <p><code>CALCULATE</code> avalia uma expressão modificando o contexto de filtro. É a função central do DAX.</p>
      <CodeBlock language="text" code={`Vendas Pago := CALCULATE([Total Vendas]; tblVendas[Status]="Pago")

  % do Total :=
  DIVIDE(
      [Total Vendas];
      CALCULATE([Total Vendas]; ALL(tblVendas))
  )`} />
      <h2>Inteligência de tempo (precisa de tabela calendário)</h2>
      <CodeBlock language="text" code={`Vendas YTD :=
  TOTALYTD([Total Vendas]; tblCalendario[Data])

  Vendas MTD :=
  TOTALMTD([Total Vendas]; tblCalendario[Data])

  Mesmo período ano anterior :=
  CALCULATE([Total Vendas]; SAMEPERIODLASTYEAR(tblCalendario[Data]))

  Crescimento YoY :=
  DIVIDE([Total Vendas] - [Mesmo período ano anterior]; [Mesmo período ano anterior])`} />
      <h2>Iteradores: SUMX, AVERAGEX</h2>
      <p>Funções terminadas em X percorrem linha a linha:</p>
      <CodeBlock language="text" code={`Receita Bruta := SUMX(tblVendas; tblVendas[Qtd] * tblVendas[Preço])`} />
      <AlertBox type="warning" title="Medidas vs colunas calculadas">
        Use <strong>medidas</strong> sempre que possível — elas são recalculadas dinamicamente. Colunas calculadas ocupam espaço e são fixas após o load.
      </AlertBox>
      </PageContainer>
    );
  }
  