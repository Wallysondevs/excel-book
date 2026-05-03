import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaErros() {
  return (
    <PageContainer title="VBA — Tratamento de erros" subtitle="On Error, Err object, padrões profissionais." difficulty="avancado" timeToRead="6 min">
      <h2>On Error</h2>
      <CodeBlock language="text" code={`On Error Resume Next       ' continua na próxima linha (use com CUIDADO)
On Error GoTo Tratamento   ' pula para o rótulo
On Error GoTo 0            ' restaura comportamento padrão`} />
      <h2>Padrão profissional</h2>
      <CodeBlock language="text" code={`Sub Processar()
    On Error GoTo TratarErro

    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual

    ' ... seu código ...

Sair:
    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
    Exit Sub

TratarErro:
    MsgBox "Erro " & Err.Number & ": " & Err.Description & vbCrLf & _
           "Linha: " & Erl, vbCritical
    Resume Sair
End Sub`} />
      <h2>Err object</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>Err.Number</code> — código do erro" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>Err.Description</code> — texto" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>Err.Source</code> — onde aconteceu" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>Err.Clear</code> — limpa" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>Err.Raise 9999, , \"Mensagem\"</code> — lança erro próprio" }} />
      </ul>
      <AlertBox type="warning" title="On Error Resume Next">
        <span dangerouslySetInnerHTML={{ __html: "Esconde TODOS os erros. Use só em trechos curtos onde você espera erro específico, e SEMPRE volte com <code>On Error GoTo 0</code> logo depois." }} />
      </AlertBox>
    </PageContainer>
  );
}
