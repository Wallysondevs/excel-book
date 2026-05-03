import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function TiposGraficos() {
  return (
    <PageContainer title="Catálogo de tipos de gráfico" subtitle="Quando usar cada um — guia rápido." difficulty="iniciante" timeToRead="7 min">
      <h2>Comparação</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Coluna</strong> — comparar valores entre categorias (poucas)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Barra</strong> — igual ao de coluna, mas para nomes longos (legibilidade horizontal)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Linha</strong> — evolução ao longo do tempo" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Área</strong> — evolução com noção de volume" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Pizza/Rosca</strong> — proporção de UM total (no máx 5 fatias)" }} />
      </ul>
      <h2>Distribuição</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Histograma</strong> — frequência por faixas" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Caixa (Boxplot)</strong> — quartis, mediana, outliers" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Pareto</strong> — colunas + linha de % acumulado (princípio 80/20)" }} />
      </ul>
      <h2>Composição hierárquica</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Treemap</strong> — retângulos proporcionais aninhados" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Sunburst</strong> — anéis concêntricos" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Cascata (Waterfall)</strong> — entrada → saída → resultado (DRE)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Funil</strong> — etapas de processo (vendas, conversão)" }} />
      </ul>
      <h2>Relação</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dispersão (XY)</strong> — correlação entre 2 variáveis numéricas" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Bolha</strong> — XY com 3ª variável no tamanho" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Radar</strong> — comparar múltiplas dimensões" }} />
      </ul>
      <h2>Geográfico / temporal</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mapa</strong> — cor por região/país" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mapa 3D (Power Map)</strong> — animação geográfica" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Sparklines</strong> — micro-linha dentro da célula" }} />
      </ul>
      <AlertBox type="warning" title="Pizza com mais de 5 fatias">
        <span dangerouslySetInnerHTML={{ __html: "Não ajuda ninguém. Use barra horizontal ordenada." }} />
      </AlertBox>
    </PageContainer>
  );
}
