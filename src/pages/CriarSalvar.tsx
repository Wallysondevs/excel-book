import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CriarSalvar() {
  return (
    <PageContainer title="Criar e salvar arquivos" subtitle="Pasta nova, salvar, salvar como, AutoRecuperação." difficulty="iniciante" timeToRead="4 min">
      <h2>Criar uma pasta de trabalho</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>N</kbd> — pasta em branco." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Novo</strong> — escolher modelo (orçamento, calendário, etc)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Modelos online: digite <em>'fluxo de caixa'</em>, <em>'cronograma'</em> e veja resultados." }} />
      </ul>
      <h2>Salvar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>B</kbd> — salvar (no inglês <kbd>Ctrl</kbd>+<kbd>S</kbd>)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<kbd>F12</kbd> — salvar como (escolher local e formato)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>OneDrive/SharePoint</strong> — ativa AutoSalvamento e versionamento." }} />
      </ul>
      <h2>Formatos principais</h2>
      <CodeBlock language="text" code={`.xlsx   pasta padrão (sem macros)
.xlsm   pasta com macros habilitadas
.xlsb   binário — abre/salva mais rápido, ocupa menos espaço
.csv    texto, separado por vírgula (ou ; no BR)
.xltx   modelo de pasta (.xltm com macros)
.ods    formato OpenDocument (LibreOffice)
.pdf    exportação para leitura/impressão`} />
      <h2>AutoRecuperação</h2>
      <p dangerouslySetInnerHTML={{ __html: "Em <strong>Arquivo → Opções → Salvar</strong>, ative <em>'Salvar informações de AutoRecuperação a cada X minutos'</em>. Padrão: 10 minutos. Reduza para 3-5 minutos se você trabalha com pastas grandes." }} />
      <AlertBox type="warning" title="Cuidado com .xlsx + macros">
        <span dangerouslySetInnerHTML={{ __html: "Se você gravar uma macro e salvar como .xlsx, o Excel <strong>apaga</strong> as macros sem aviso forte. Sempre use .xlsm para pastas com VBA." }} />
      </AlertBox>
    </PageContainer>
  );
}
