import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PowerAutomate() {
  return (
    <PageContainer title="Excel + Power Automate" subtitle="Automatize o que está fora do Excel — e-mails, aprovações, integrações." difficulty="intermediario" timeToRead="6 min">
      <h2>O que dá pra fazer</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Acionar quando linha for adicionada/atualizada em uma tabela" }} />
        <li dangerouslySetInnerHTML={{ __html: "Atualizar Power Query/Tabela Dinâmica em horário agendado" }} />
        <li dangerouslySetInnerHTML={{ __html: "Enviar e-mail (Outlook) com a planilha em anexo" }} />
        <li dangerouslySetInnerHTML={{ __html: "Postar mensagem no Teams ao bater meta" }} />
        <li dangerouslySetInnerHTML={{ __html: "Inserir linhas em planilha a partir de um Form/SharePoint" }} />
        <li dangerouslySetInnerHTML={{ __html: "Chamar Office Script salvo no OneDrive" }} />
      </ul>
      <h2>Conector Excel Online (Business)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Apenas tabelas em arquivos .xlsx no OneDrive/SharePoint" }} />
        <li dangerouslySetInnerHTML={{ __html: "Ações: List rows, Add row, Update row, Get row, Delete row" }} />
        <li dangerouslySetInnerHTML={{ __html: "Trigger: When a row is added/modified" }} />
      </ul>
      <h2>Exemplo: Form → Excel → Aprovação</h2>
      <CodeBlock language="text" code={`1. Trigger: Microsoft Forms — When new response is submitted
2. Action: Get response details
3. Action: Excel — Add row to table (tblPedidos)
4. Action: Approvals — Start approval (gerente aprova)
5. Action: Update row — coluna Status = "Aprovado/Recusado"
6. Action: Outlook — Send email ao solicitante`} />
    </PageContainer>
  );
}
