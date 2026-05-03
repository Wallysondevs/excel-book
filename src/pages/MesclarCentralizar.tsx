import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MesclarCentralizar() {
  return (
    <PageContainer title="Mesclar e centralizar — e por que (quase nunca) usar" subtitle="O recurso mais bonito e mais problemático do Excel." difficulty="intermediario" timeToRead="5 min">
      <h2>O que faz</h2>
      <p dangerouslySetInnerHTML={{ __html: "Junta várias células em uma só visualmente. <strong>Página Inicial → Mesclar e Centralizar</strong>." }} />
      <h2>Por que evitar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Quebra ordenação</strong> — Excel reclama ou desordena." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Quebra filtro</strong> — só a 1ª linha aparece quando filtra." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Quebra Tabela Dinâmica</strong> — exige listas planas." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Quebra fórmula</strong> — só a célula superior-esquerda guarda valor." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Quebra VBA/Power Query</strong> — comportamento inconsistente." }} />
      </ul>
      <h2>A alternativa: Centralizar na Seleção</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione as células que pareceriam mescladas." }} />
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>1</kbd> → aba Alinhamento → Horizontal: <strong>Centralizar Seleção</strong>." }} />
        <li dangerouslySetInnerHTML={{ __html: "Visualmente igual; tecnicamente são células normais." }} />
      </ul>
      <h2>Quando mesclar é OK</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Cabeçalho de relatório <strong>fora da tabela</strong> de dados." }} />
        <li dangerouslySetInnerHTML={{ __html: "Capa, sumário, página de impressão — áreas que não vão ser ordenadas/filtradas." }} />
        <li dangerouslySetInnerHTML={{ __html: "Relatórios <strong>finais</strong> que serão exportados em PDF e não voltarão para análise." }} />
      </ul>
    </PageContainer>
  );
}
