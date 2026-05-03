import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaEventos() {
  return (
    <PageContainer title="VBA — Eventos de planilha e pasta" subtitle="Reaja a cliques, mudanças, abrir/fechar pasta." difficulty="avancado" timeToRead="7 min">
      <h2>Onde colocar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>ThisWorkbook</strong> — eventos da pasta inteira (Open, BeforeSave, BeforeClose)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Plan1, Plan2…</strong> — eventos da planilha (Change, SelectionChange, Activate)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Não vão em módulos comuns!" }} />
      </ul>
      <h2>Eventos comuns</h2>
      <CodeBlock language="text" code={`' === Em ThisWorkbook ===
Private Sub Workbook_Open()
    MsgBox "Bem-vindo, " & Application.UserName
End Sub

Private Sub Workbook_BeforeSave(ByVal SaveAsUI As Boolean, Cancel As Boolean)
    Range("UltimoSalvamento") = Now
End Sub

Private Sub Workbook_BeforeClose(Cancel As Boolean)
    If MsgBox("Salvar antes de sair?", vbYesNo) = vbYes Then
        ThisWorkbook.Save
    End If
End Sub

' === Em Plan1 ===
Private Sub Worksheet_Change(ByVal Target As Range)
    If Not Intersect(Target, Range("A2:A100")) Is Nothing Then
        Application.EnableEvents = False
        Target.Offset(0, 1) = Now    ' carimba data ao lado
        Application.EnableEvents = True
    End If
End Sub

Private Sub Worksheet_SelectionChange(ByVal Target As Range)
    Range("InfoCelula") = Target.Address
End Sub`} />
      <AlertBox type="danger" title="EnableEvents">
        <span dangerouslySetInnerHTML={{ __html: "Quando o evento Worksheet_Change escreve em uma célula, ele dispara a si mesmo (loop infinito). Sempre envolva escrita com EnableEvents=False/True." }} />
      </AlertBox>
    </PageContainer>
  );
}
