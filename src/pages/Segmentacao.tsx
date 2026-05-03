import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Segmentacao() {
    return (
      <PageContainer title="Segmentação de Dados (Slicers)" subtitle="Filtros visuais elegantes para tabelas e dashboards." difficulty="intermediario" timeToRead="5 min">
        <h2>O que é?</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Slicer</strong> é um filtro visual com botões. Funciona em Tabelas (Ctrl+T) e Tabelas Dinâmicas. Indispensável para construir dashboards." }} />
      <h2>Inserir</h2>
      <p dangerouslySetInnerHTML={{ __html: "Clique na tabela/pivot → <strong>Inserir → Segmentação de Dados</strong>. Escolha os campos. Cada um vira um painel de botões." }} />
      <h2>Conectar a várias pivots</h2>
      <p dangerouslySetInnerHTML={{ __html: "Botão direito no slicer → <strong>Conexões de Relatório</strong> → marque todas as pivots que devem responder. Assim um slicer central controla várias visualizações simultaneamente." }} />
      <h2>Linha do Tempo (Timeline)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Para campos de data, use <strong>Inserir → Linha do Tempo</strong>. Permite arrastar para selecionar período (dia, mês, trimestre, ano)." }} />
      <AlertBox type="tip" title="Estilo do dashboard">
        <span dangerouslySetInnerHTML={{ __html: "Personalize os slicers em <strong>Slicer → Estilo</strong>. Ajuste cores, número de colunas (botões em grade), e ordene alfabeticamente em <strong>Configurações</strong>." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  