import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqAnexar() {
  return (
    <PageContainer title="Power Query — Anexar consultas (UNION)" subtitle="Empilhe planilhas/arquivos do mesmo formato." difficulty="intermediario" timeToRead="5 min">
      <h2>Anexar 2 consultas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Anexar Consultas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Cria uma nova consulta com as linhas de ambas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Colunas com mesmo nome empilham; diferentes ficam com vazios" }} />
      </ul>
      <h2>Anexar várias</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Anexar como nova → Três ou mais tabelas</strong> e adicione todas. Útil para consolidar 12 planilhas mensais idênticas." }} />
      <h2>Combinar arquivos de uma pasta</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dados → Obter Dados → De Arquivo → De Pasta</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Aponte para a pasta com os Excel/CSV mensais" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Combinar e Transformar</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Query cria função + consulta exemplo, e aplica em todos os arquivos" }} />
      </ul>
      <AlertBox type="tip" title="Histórico que cresce">
        <span dangerouslySetInnerHTML={{ __html: "Coloque novos arquivos na pasta. Apenas <strong>Atualizar Tudo</strong> e a tabela cresce sozinha." }} />
      </AlertBox>
    </PageContainer>
  );
}
