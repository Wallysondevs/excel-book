import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function KpisModelagem() {
  return (
    <PageContainer title="KPIs e modelagem em estrela" subtitle="Indicadores com semáforo e a estrutura ideal de modelo." difficulty="avancado" timeToRead="7 min">
      <h2>Modelo estrela (recap)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Tabela Fato</strong> no centro (Vendas, Pedidos)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dimensões</strong> ao redor (Calendário, Produtos, Clientes, Lojas)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Relacionamentos 1:N saem das dimensões para a fato" }} />
        <li dangerouslySetInnerHTML={{ __html: "Evite snowflake (dimensão ligando outra dimensão)" }} />
      </ul>
      <h2>Criar KPI no Power Pivot</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione a medida em Power Pivot" }} />
        <li dangerouslySetInnerHTML={{ __html: "Botão direito → <strong>Criar KPI</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina: Valor de meta (medida ou número fixo)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Limites: ex: <70% vermelho, 70-90% amarelo, ≥90% verde" }} />
        <li dangerouslySetInnerHTML={{ __html: "Em TD, o KPI aparece com ícone (semáforo, setas, estrela)" }} />
      </ul>
      <h2>Padrão de medidas</h2>
      <CodeBlock language="text" code={`-- Base
Vendas         = SUM( Vendas[Valor] )
Custo          = SUMX( Vendas ; Vendas[Qtd] * RELATED(Produtos[CustoUnit]) )

-- Derivadas
Lucro          = [Vendas] - [Custo]
Margem %       = DIVIDE( [Lucro] ; [Vendas] )

-- Meta
Meta Vendas    = SUM( Metas[Valor] )
Atingimento %  = DIVIDE( [Vendas] ; [Meta Vendas] )`} />
      <AlertBox type="tip" title="Pasta de Medidas">
        <span dangerouslySetInnerHTML={{ __html: "Em Power Pivot, crie uma tabela auxiliar 'Medidas' (vazia) e mova todas as medidas pra lá. Fica organizado e fácil de achar." }} />
      </AlertBox>
    </PageContainer>
  );
}
