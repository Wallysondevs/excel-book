import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Dashboard() {
  return (
    <PageContainer title="Construindo um dashboard" subtitle="Princípios e roteiro completo." difficulty="avancado" timeToRead="10 min">
      <h2>4 princípios</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Foco</strong>: máximo 5 KPIs principais. Mais que isso vira poluição." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Hierarquia visual</strong>: KPIs no topo, gráficos no meio, tabela detalhada embaixo." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Interação</strong>: Slicers que filtram TUDO ao mesmo tempo." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Atualização</strong>: 1 clique em <em>Atualizar Tudo</em> renova fontes." }} />
      </ul>
      <h2>Layout sugerido (1280×720)</h2>
      <CodeBlock language="text" code={`┌────────────────────────────────────────────────────┐
│  TÍTULO                       Slicer UF | Slicer Mês│
├──────┬──────┬──────┬──────┬─────────────────────────┤
│ KPI1 │ KPI2 │ KPI3 │ KPI4 │      KPI5  (R\$ total)   │
├──────┴──────┴──────┴──────┼─────────────────────────┤
│   Linha (evolução temporal)│   Barra (top produtos)  │
│                            │                         │
├────────────────────────────┼─────────────────────────┤
│   Mapa (UF)                │   Tabela (top clientes) │
└────────────────────────────┴─────────────────────────┘`} />
      <h2>Roteiro</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "1. Importe dados via Power Query (limpos)" }} />
        <li dangerouslySetInnerHTML={{ __html: "2. Crie modelo de dados com relacionamentos" }} />
        <li dangerouslySetInnerHTML={{ __html: "3. Em planilha 'Cálculos': Tabelas Dinâmicas escondidas para cada KPI" }} />
        <li dangerouslySetInnerHTML={{ __html: "4. Em planilha 'Dashboard': caixas com referência <code>=Cálculos!H10</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "5. Insira gráficos baseados nas TDs" }} />
        <li dangerouslySetInnerHTML={{ __html: "6. Insira Slicers, conecte a todas as TDs" }} />
        <li dangerouslySetInnerHTML={{ __html: "7. Esconda planilhas auxiliares; oculte grade; remova barra/cabeçalhos" }} />
      </ul>
      <h2>Esconder visual do Excel</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Exibir → desmarcar: Linhas de Grade, Cabeçalhos, Barra de Fórmulas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Layout da Página → Plano de Fundo (cor sólida)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Para impressão: Layout → Área de Impressão" }} />
      </ul>
    </PageContainer>
  );
}
