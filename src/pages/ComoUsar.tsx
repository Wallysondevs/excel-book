import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ComoUsar() {
  return (
    <PageContainer title="Como usar este livro" subtitle="Roteiros sugeridos por nível e por objetivo." difficulty="iniciante" timeToRead="4 min">
      <h2>Roteiro 1 — nunca usei Excel</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "História → Interface → Pastas e Planilhas → Inserir Dados" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipos de Dados → Formatação → Operadores e Fórmulas" }} />
        <li dangerouslySetInnerHTML={{ __html: "SOMA/MÉDIA → Função SE → PROCV/PROCX → Tabelas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tabela Dinâmica → Gráficos → Atalhos" }} />
      </ul>
      <h2>Roteiro 2 — quero dominar fórmulas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Referências → Nomes → SE.MÚLTIPLO → SOMASES/CONT.SES" }} />
        <li dangerouslySetInnerHTML={{ __html: "PROCX → ÍNDICE+CORRESP → Arrays Dinâmicos → FILTRO/CLASSIFICAR/ÚNICO" }} />
        <li dangerouslySetInnerHTML={{ __html: "LET → LAMBDA → MAP/REDUCE" }} />
        <li dangerouslySetInnerHTML={{ __html: "SOMARPRODUTO → AGREGAR → SUBTOTAL" }} />
      </ul>
      <h2>Roteiro 3 — analista de BI</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Tabelas (Ctrl+T) → Tabela Dinâmica → Modelo de Dados" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Query → Mesclar/Anexar → Linguagem M" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Pivot → Relacionamentos → DAX → CALCULATE → Time Intelligence" }} />
        <li dangerouslySetInnerHTML={{ __html: "Dashboards → Segmentação → KPIs" }} />
      </ul>
      <h2>Roteiro 4 — automação</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Gravar Macros → VBA Intro → Variáveis → Range/Cells" }} />
        <li dangerouslySetInnerHTML={{ __html: "VBA Loops → Eventos → UserForms → Tratamento de Erros" }} />
        <li dangerouslySetInnerHTML={{ __html: "Dictionary → Manipular Arquivos → Suplementos (.xlam)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Office Scripts → Power Automate" }} />
      </ul>
    </PageContainer>
  );
}
