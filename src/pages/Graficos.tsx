import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Graficos() {
    return (
      <PageContainer title="Gráficos no Excel" subtitle="Tipos, quando usar cada um e personalização profissional." difficulty="intermediario" timeToRead="11 min">
        <h2>Inserindo um gráfico</h2>
      <p>Selecione os dados (com cabeçalhos) → <strong>Inserir → Gráfico</strong>. Use <strong>Gráficos Recomendados</strong> para sugestões inteligentes ou pressione <code>Alt + F1</code> para gráfico padrão imediato.</p>
      <h2>Quando usar cada tipo</h2>
      <ul>
        <li><strong>Colunas / Barras</strong> — comparar categorias.</li>
        <li><strong>Linhas</strong> — tendência ao longo do tempo.</li>
        <li><strong>Pizza / Rosca</strong> — partes do todo (até 5-6 fatias).</li>
        <li><strong>Área</strong> — volume acumulado ao longo do tempo.</li>
        <li><strong>Dispersão (XY)</strong> — correlação entre duas variáveis numéricas.</li>
        <li><strong>Combinação</strong> — duas séries com escalas diferentes (eixo secundário).</li>
        <li><strong>Funil</strong> — etapas de conversão.</li>
        <li><strong>Cascata (Waterfall)</strong> — ganhos e perdas até total.</li>
        <li><strong>Mapa</strong> — geografia (UF, país).</li>
        <li><strong>Treemap / Sunburst</strong> — hierarquias.</li>
        <li><strong>Histograma</strong> — distribuição de frequências.</li>
        <li><strong>Caixa (Box Plot)</strong> — quartis, mediana, outliers.</li>
      </ul>
      <AlertBox type="warning" title="Pizza só com poucas fatias">
        Pizza com 12 fatias vira ilegível. Para muitos itens, prefira barras ordenadas.
      </AlertBox>
      <h2>Personalização rápida (botões + ao lado)</h2>
      <ul>
        <li><strong>+</strong> Elementos: títulos, eixos, rótulos, linhas de tendência.</li>
        <li><strong>🎨</strong> Estilos: cores predefinidas e variações de layout.</li>
        <li><strong>🔍</strong> Filtros: liga/desliga séries sem mexer nos dados.</li>
      </ul>
      <h2>Boas práticas profissionais</h2>
      <ul>
        <li>Remova ruído: bordas, gradientes, 3D, sombras.</li>
        <li>Ordene barras do maior para o menor.</li>
        <li>Use no máximo 2-3 cores; reserve cor forte para destaque.</li>
        <li>Eixo Y começa em zero (a menos que muito justificado).</li>
        <li>Título descritivo com a conclusão (não "Gráfico de Vendas").</li>
        <li>Rótulos diretos no gráfico em vez de legenda quando possível.</li>
      </ul>
      <h2>Gráfico Dinâmico</h2>
      <p>Sob a Tabela Dinâmica, <strong>Análise → Gráfico Dinâmico</strong>. Reage a slicers, filtros e drill-down. Base ideal para dashboards.</p>
      </PageContainer>
    );
  }
  