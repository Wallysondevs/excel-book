import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function VbaLoops() {
    return (
      <PageContainer title="VBA — Loops e Condicionais" subtitle="If/Then, For, Do While e percorrendo planilhas inteiras." difficulty="avancado" timeToRead="10 min">
        <h2>If / Then / Else</h2>
      <CodeBlock language="vbnet" code={`If Range("A1").Value > 100 Then
      MsgBox "Acima de 100"
  ElseIf Range("A1").Value > 50 Then
      MsgBox "Entre 51 e 100"
  Else
      MsgBox "Até 50"
  End If`} />
      <h2>Select Case</h2>
      <CodeBlock language="vbnet" code={`Select Case Range("A1").Value
      Case "SP", "RJ", "MG"
          MsgBox "Sudeste"
      Case "BA", "PE", "CE"
          MsgBox "Nordeste"
      Case Else
          MsgBox "Outras regiões"
  End Select`} />
      <h2>For ... Next</h2>
      <CodeBlock language="vbnet" code={`Dim i As Long
  For i = 1 To 100
      Cells(i, 1).Value = i ^ 2
  Next i

  ' contagem regressiva (Step -1):
  For i = 100 To 1 Step -1
      Debug.Print i
  Next i`} />
      <h2>For Each — percorrer coleção</h2>
      <CodeBlock language="vbnet" code={`Dim cel As Range
  For Each cel In Range("A2:A100")
      If cel.Value < 0 Then
          cel.Interior.Color = RGB(255, 200, 200)
      End If
  Next cel

  ' percorrer todas as planilhas:
  Dim ws As Worksheet
  For Each ws In ThisWorkbook.Worksheets
      Debug.Print ws.Name
  Next ws`} />
      <h2>Do While / Do Until</h2>
      <CodeBlock language="vbnet" code={`Dim linha As Long
  linha = 2
  Do While Cells(linha, 1).Value <> ""
      Cells(linha, 2).Value = Cells(linha, 1).Value * 1.18
      linha = linha + 1
  Loop`} />
      <h2>Encontrar última linha preenchida</h2>
      <CodeBlock language="vbnet" code={`Dim ultima As Long
  ultima = Cells(Rows.Count, 1).End(xlUp).Row
  ' equivale a Ctrl + Seta para Cima a partir da última linha`} />
      <AlertBox type="tip" title="Performance">
        Antes de loops grandes, desligue temporariamente:<br><code>Application.ScreenUpdating = False</code><br><code>Application.Calculation = xlCalculationManual</code><br>E reative no fim. Pode acelerar 10-100x.
      </AlertBox>
      </PageContainer>
    );
  }
  