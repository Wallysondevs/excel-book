import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GraficoDinamico() {
  return (
    <PageContainer title="Gráficos Dinâmicos (PivotChart)" subtitle="Gráfico ligado a uma TD — interativo e atualizável." difficulty="intermediario" timeToRead="5 min">
      <h2>Criar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione qualquer célula da Tabela Dinâmica" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Analisar → Gráfico Dinâmico</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Escolha o tipo (não-permitido: dispersão, bolha, ações)" }} />
      </ul>
      <h2>Filtros visuais</h2>
      <p dangerouslySetInnerHTML={{ __html: "O gráfico ganha botões de campo no canto. Clique → filtra. Combine com <strong>Segmentação de Dados</strong> (Slicer) para visual de dashboard." }} />
      <h2>Desconectar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Para usar como gráfico normal sem TD: botão direito → <strong>Converter em Gráfico Estático</strong>. Perde a atualização mas ganha edição livre." }} />
    </PageContainer>
  );
}
