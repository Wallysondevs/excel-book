import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AbrirArquivos() {
  return (
    <PageContainer title="Abrir e converter arquivos" subtitle="Abrir CSV, TSV, planilhas antigas e arquivos protegidos." difficulty="iniciante" timeToRead="5 min">
      <h2>Abrir uma pasta</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>A</kbd> ou <strong>Arquivo → Abrir</strong>." }} />
        <li dangerouslySetInnerHTML={{ __html: "Recentes ficam fixos no painel esquerdo — clique no alfinete para fixar." }} />
        <li dangerouslySetInnerHTML={{ __html: "Atalho rápido: <kbd>Ctrl</kbd>+<kbd>F12</kbd> abre o diálogo direto." }} />
      </ul>
      <h2>Importar CSV de forma certa</h2>
      <p dangerouslySetInnerHTML={{ __html: "Não dê duplo-clique em CSV — abra <strong>via Power Query</strong> para escolher delimitador e tipos. Vá em <strong>Dados → Obter Dados → De Arquivo → De Texto/CSV</strong>." }} />
      <CodeBlock language="text" code={`Por que não dar duplo-clique?
- Códigos com zeros à esquerda viram número (00123 → 123)
- Datas em formato US viram texto ou ficam erradas
- CPF/CNPJ longos viram notação científica (1,23E+11)`} />
      <h2>Modo Protegido</h2>
      <p dangerouslySetInnerHTML={{ __html: "Arquivos baixados da internet ou anexos de e-mail abrem em <strong>Modo de Exibição Protegido</strong>. Clique em <em>'Habilitar Edição'</em> só se você confia na origem." }} />
      <AlertBox type="danger" title="Macros desconhecidas">
        <span dangerouslySetInnerHTML={{ __html: "NUNCA habilite macros em arquivos vindos de origem duvidosa. Macros maliciosas podem apagar arquivos, enviar dados ou instalar vírus." }} />
      </AlertBox>
    </PageContainer>
  );
}
