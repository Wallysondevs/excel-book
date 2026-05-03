import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Sparklines() {
    return (
      <PageContainer title="Sparklines" subtitle="Mini-gráficos dentro de uma única célula." difficulty="iniciante" timeToRead="4 min">
        <h2>Conceito</h2>
      <p dangerouslySetInnerHTML={{ __html: "Sparkline é um gráfico minúsculo (1 célula) ao lado de uma série de números. Inventado por Edward Tufte, perfeito para mostrar tendência sem ocupar espaço." }} />
      <h2>Como inserir</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Sparklines → Linha / Coluna / Ganhos e Perdas</strong>. Selecione o intervalo de dados e a célula de destino." }} />
      <CodeBlock language="text" code={`Janeiro Fevereiro Março Abril   Sparkline
    100      120     90    150     ▁▃▁▆      ← Linha
    100      120     90    150     ▄▆▂█      ← Coluna
    +5       -3      +8    +2      ▲▼▲▲      ← Ganhos e Perdas`} />
      <h2>Personalizar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Aba <strong>Sparkline</strong> aparece quando você clica em um. Permite destacar pontos: alto, baixo, primeiro, último, marcadores. E ajustar eixos para que vários sparklines compartilhem a mesma escala." }} />
      <AlertBox type="tip" title="Use em dashboards">
        <span dangerouslySetInnerHTML={{ __html: "Coluna com vendas mensais e sparkline ao lado dá visão imediata da tendência de cada produto/cliente." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  