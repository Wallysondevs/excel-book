import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DashboardVendas() {
  return (
    <PageContainer title="Modelo: Dashboard de Vendas" subtitle="KPIs, evolução, top clientes e mapa por UF." difficulty="avancado" timeToRead="10 min">
      <h2>KPIs do topo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Vendas (R$) — total geral" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tickets — quantidade de pedidos" }} />
        <li dangerouslySetInnerHTML={{ __html: "Ticket Médio — Vendas / Tickets" }} />
        <li dangerouslySetInnerHTML={{ __html: "Crescimento — vs mês anterior" }} />
        <li dangerouslySetInnerHTML={{ __html: "% Atingimento — vs meta" }} />
      </ul>
      <h2>Medidas DAX</h2>
      <CodeBlock language="text" code={`Vendas         = SUM( fVendas[Valor] )
Tickets        = DISTINCTCOUNT( fVendas[CodPedido] )
Ticket Médio   = DIVIDE( [Vendas] ; [Tickets] )
Vendas Mês Ant = CALCULATE( [Vendas] ; PREVIOUSMONTH( dCalend[Date] ) )
Crescimento %  = DIVIDE( [Vendas] - [Vendas Mês Ant] ; [Vendas Mês Ant] )
Meta           = SUM( fMetas[Valor] )
Atingimento %  = DIVIDE( [Vendas] ; [Meta] )`} />
      <h2>Visuais</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Linha</strong> mensal de Vendas vs Meta" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Barra horizontal</strong> top 10 clientes (TOPN)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mapa</strong> por UF (Inserir → Mapa)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Treemap</strong> por categoria de produto" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Cards</strong> de KPI usando referência <code>=Cálculos!H10</code>" }} />
      </ul>
      <h2>Slicers</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Período (Linha do Tempo)" }} />
        <li dangerouslySetInnerHTML={{ __html: "UF, Vendedor, Categoria" }} />
        <li dangerouslySetInnerHTML={{ __html: "Conecte cada Slicer a TODAS as TDs (botão direito → Conexões de Relatório)" }} />
      </ul>
    </PageContainer>
  );
}
