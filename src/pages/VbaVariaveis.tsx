import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaVariaveis() {
  return (
    <PageContainer title="VBA — Variáveis, tipos e escopo" subtitle="Dim, Const, escopo de procedimento, módulo e projeto." difficulty="intermediario" timeToRead="6 min">
      <h2>Tipos comuns</h2>
      <CodeBlock language="text" code={`Integer    -32768 a 32767       (use Long no lugar — Int é legacy)
Long       inteiro 32 bits
Double     número decimal
String     texto
Boolean    True / False
Date       data e hora
Variant    qualquer (lento, evite quando possível)
Object     referência genérica
Range      intervalo do Excel
Worksheet  planilha
Workbook   pasta`} />
      <h2>Declaração</h2>
      <CodeBlock language="text" code={`Option Explicit                ' Sempre coloque! Força declarar variáveis

Sub Exemplo()
    Dim total As Double
    Dim nome As String
    Dim itens As Long
    Const TAXA As Double = 0.18
    Const NOME_PADRAO As String = "Sem nome"

    total = 1500
    nome = "Ana"
    MsgBox nome & " - R\$ " & total
End Sub`} />
      <h2>Escopo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Local</strong>: <code>Dim</code> dentro de Sub/Function — só vive ali" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Módulo</strong>: <code>Dim</code> ou <code>Private</code> no topo do módulo (acima da 1ª Sub)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Projeto</strong>: <code>Public</code> no topo — visível em qualquer módulo" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Estática</strong>: <code>Static</code> — preserva valor entre execuções" }} />
      </ul>
      <AlertBox type="warning" title="Option Explicit">
        <span dangerouslySetInnerHTML={{ __html: "Sem essa linha, VBA cria variáveis na hora se você digitar <code>tota = 5</code> em vez de <code>total</code>. Bug silencioso garantido." }} />
      </AlertBox>
    </PageContainer>
  );
}
