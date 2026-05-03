import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PastasPlanilhas() {
    return (
      <PageContainer title="Pastas, Planilhas e Células" subtitle="Workbook (.xlsx), worksheets, células, linhas e colunas — a hierarquia." difficulty="iniciante" timeToRead="7 min">
        <h2>A hierarquia do Excel</h2>
      <p dangerouslySetInnerHTML={{ __html: "Um arquivo Excel é chamado <strong>Pasta de Trabalho</strong> (Workbook). Cada pasta contém uma ou mais <strong>Planilhas</strong> (Worksheets, as guias na parte de baixo). Cada planilha tem <strong>1.048.576 linhas × 16.384 colunas</strong> (A até XFD)." }} />
      <CodeBlock language="text" code={`📁 Pasta de Trabalho (vendas.xlsx)
     ├── 📄 Planilha "Janeiro"
     │      ├── Linha 1
     │      │    ├── A1 (célula)
     │      │    └── B1 (célula)
     │      └── Linha 2 ...
     ├── 📄 Planilha "Fevereiro"
     └── 📄 Planilha "Resumo"`} />
      <h2>Endereço de uma célula</h2>
      <p dangerouslySetInnerHTML={{ __html: "Cada célula tem coordenada <strong>Coluna+Linha</strong>: <code>A1</code>, <code>B7</code>, <code>AC2025</code>. Para referenciar célula em outra planilha use <code>NomeDaPlanilha!A1</code>. Em outra pasta de trabalho: <code>[Outra.xlsx]Plan1!A1</code>." }} />
      <h2>Operações básicas com planilhas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Nova planilha:</strong> clique no <code>+</code> ao lado das guias ou <code>Shift + F11</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Renomear:</strong> duplo clique na guia." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Cor:</strong> botão direito → Cor da Guia." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mover/Copiar:</strong> botão direito → Mover ou Copiar (segure Ctrl ao arrastar para copiar)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Ocultar:</strong> botão direito → Ocultar." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Proteger:</strong> Revisão → Proteger Planilha." }} />
      </ul>
      <AlertBox type="tip" title="Navegando entre planilhas">
        <span dangerouslySetInnerHTML={{ __html: "<code>Ctrl + Page Down</code> avança para próxima planilha, <code>Ctrl + Page Up</code> volta." }} />
      </AlertBox>
      <h2>Formatos de arquivo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>.xlsx</code> — padrão moderno (XML compactado, desde 2007)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>.xlsm</code> — pasta com macros habilitadas." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>.xlsb</code> — formato binário, mais rápido para arquivos enormes." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>.xls</code> — formato antigo (até 2003), evite." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>.csv</code> — apenas valores separados por vírgula, sem formatação." }} />
      </ul>
      </PageContainer>
    );
  }
  