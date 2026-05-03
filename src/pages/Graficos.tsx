import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Graficos() {
    return (
      <PageContainer title="Gráficos no Excel" subtitle="Tipos, quando usar cada um e personalização profissional." difficulty="intermediario" timeToRead="11 min">
        <h2>Inserindo um gráfico</h2>
      <p dangerouslySetInnerHTML={{ __html: "Selecione os dados (com cabeçalhos) → <strong>Inserir → Gráfico</strong>. Use <strong>Gráficos Recomendados</strong> para sugestões inteligentes ou pressione <code>Alt + F1</code> para gráfico padrão imediato." }} />
      <h2>Quando usar cada tipo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Colunas / Barras</strong> — comparar categorias." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Linhas</strong> — tendência ao longo do tempo." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Pizza / Rosca</strong> — partes do todo (até 5-6 fatias)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Área</strong> — volume acumulado ao longo do tempo." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dispersão (XY)</strong> — correlação entre duas variáveis numéricas." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Combinação</strong> — duas séries com escalas diferentes (eixo secundário)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Funil</strong> — etapas de conversão." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Cascata (Waterfall)</strong> — ganhos e perdas até total." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mapa</strong> — geografia (UF, país)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Treemap / Sunburst</strong> — hierarquias." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Histograma</strong> — distribuição de frequências." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Caixa (Box Plot)</strong> — quartis, mediana, outliers." }} />
      </ul>
      <AlertBox type="warning" title="Pizza só com poucas fatias">
        <span dangerouslySetInnerHTML={{ __html: "Pizza com 12 fatias vira ilegível. Para muitos itens, prefira barras ordenadas." }} />
      </AlertBox>
      <h2>Personalização rápida (botões + ao lado)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>+</strong> Elementos: títulos, eixos, rótulos, linhas de tendência." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>🎨</strong> Estilos: cores predefinidas e variações de layout." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>🔍</strong> Filtros: liga/desliga séries sem mexer nos dados." }} />
      </ul>
      <h2>Boas práticas profissionais</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Remova ruído: bordas, gradientes, 3D, sombras." }} />
        <li dangerouslySetInnerHTML={{ __html: "Ordene barras do maior para o menor." }} />
        <li dangerouslySetInnerHTML={{ __html: "Use no máximo 2-3 cores; reserve cor forte para destaque." }} />
        <li dangerouslySetInnerHTML={{ __html: "Eixo Y começa em zero (a menos que muito justificado)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Título descritivo com a conclusão (não \"Gráfico de Vendas\")." }} />
        <li dangerouslySetInnerHTML={{ __html: "Rótulos diretos no gráfico em vez de legenda quando possível." }} />
      </ul>
      <h2>Gráfico Dinâmico</h2>
      <p dangerouslySetInnerHTML={{ __html: "Sob a Tabela Dinâmica, <strong>Análise → Gráfico Dinâmico</strong>. Reage a slicers, filtros e drill-down. Base ideal para dashboards." }} />
      </PageContainer>
    );
  }
  