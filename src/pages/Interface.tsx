import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Interface() {
    return (
      <PageContainer title="Interface — Faixa de Opções" subtitle="Ribbon, Backstage, Caixa de Nome, Barra de Fórmulas e Status." difficulty="iniciante" timeToRead="10 min">
        <h2>Anatomia da janela</h2>
      <p dangerouslySetInnerHTML={{ __html: "Ao abrir o Excel você verá os elementos principais: <strong>Faixa de Opções</strong> (Ribbon), <strong>Caixa de Nome</strong>, <strong>Barra de Fórmulas</strong>, <strong>Grade de células</strong>, <strong>Guias de Planilhas</strong> e <strong>Barra de Status</strong>." }} />
      <h2>Faixa de Opções (Ribbon)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Substituiu os menus tradicionais a partir do Excel 2007. Organiza comandos em <strong>guias</strong> (Página Inicial, Inserir, Layout, Fórmulas, Dados, Revisão, Exibição) e cada guia tem <strong>grupos</strong>." }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial:</strong> formatação, alinhamento, número, estilos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir:</strong> tabelas, gráficos, ilustrações, links." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas:</strong> biblioteca de funções, gerenciador de nomes." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dados:</strong> Power Query, classificar/filtrar, validação." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Revisão:</strong> ortografia, comentários, proteção." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Exibição:</strong> zoom, congelar painéis, macros." }} />
      </ul>
      <AlertBox type="tip" title="Acesso rápido por teclado">
        <span dangerouslySetInnerHTML={{ __html: "Pressione <code>Alt</code> e o Excel mostra letras sobre cada guia. <code>Alt + H</code> abre Página Inicial, <code>Alt + N</code> Inserir, <code>Alt + M</code> Fórmulas." }} />
      </AlertBox>
      <h2>Backstage (menu Arquivo)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Clique em <strong>Arquivo</strong> para abrir o Backstage: novo, abrir, salvar, exportar, imprimir, compartilhar e opções. É o único \"menu antigo\" preservado." }} />
      <h2>Caixa de Nome e Barra de Fórmulas</h2>
      <CodeBlock language="text" code={`Caixa de Nome    Barra de Fórmulas
  ┌─────────┐    ┌─────────────────────────────┐
  │   B2    │ fx │ =SOMA(A1:A10)               │
  └─────────┘    └─────────────────────────────┘`} />
      <p dangerouslySetInnerHTML={{ __html: "A <strong>Caixa de Nome</strong> mostra o endereço da célula ativa (e permite navegar digitando, ex: <code>F500</code> + Enter). A <strong>Barra de Fórmulas</strong> mostra o conteúdo real (fórmula ou valor)." }} />
      <h2>Barra de Status</h2>
      <p dangerouslySetInnerHTML={{ __html: "No rodapé. Ao selecionar várias células numéricas, mostra automaticamente <strong>Média, Contagem e Soma</strong>. Clique com botão direito para adicionar Mínimo, Máximo, Contagem Numérica." }} />
      <AlertBox type="info" title="Modo de exibição">
        <span dangerouslySetInnerHTML={{ __html: "À direita da barra de status há três botões: <strong>Normal</strong>, <strong>Layout de Página</strong> (preview de impressão) e <strong>Quebra de Página</strong>." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  