import{j as e}from"./index-COQxS6Ql.js";import{P as l}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function t(){return e.jsxs(l,{title:"VBA — Loops e Condicionais",subtitle:"If/Then, For, Do While e percorrendo planilhas inteiras.",difficulty:"avancado",timeToRead:"10 min",children:[e.jsx("h2",{children:"If / Then / Else"}),e.jsx(a,{language:"vbnet",code:`If Range("A1").Value > 100 Then
      MsgBox "Acima de 100"
  ElseIf Range("A1").Value > 50 Then
      MsgBox "Entre 51 e 100"
  Else
      MsgBox "Até 50"
  End If`}),e.jsx("h2",{children:"Select Case"}),e.jsx(a,{language:"vbnet",code:`Select Case Range("A1").Value
      Case "SP", "RJ", "MG"
          MsgBox "Sudeste"
      Case "BA", "PE", "CE"
          MsgBox "Nordeste"
      Case Else
          MsgBox "Outras regiões"
  End Select`}),e.jsx("h2",{children:"For ... Next"}),e.jsx(a,{language:"vbnet",code:`Dim i As Long
  For i = 1 To 100
      Cells(i, 1).Value = i ^ 2
  Next i

  ' contagem regressiva (Step -1):
  For i = 100 To 1 Step -1
      Debug.Print i
  Next i`}),e.jsx("h2",{children:"For Each — percorrer coleção"}),e.jsx(a,{language:"vbnet",code:`Dim cel As Range
  For Each cel In Range("A2:A100")
      If cel.Value < 0 Then
          cel.Interior.Color = RGB(255, 200, 200)
      End If
  Next cel

  ' percorrer todas as planilhas:
  Dim ws As Worksheet
  For Each ws In ThisWorkbook.Worksheets
      Debug.Print ws.Name
  Next ws`}),e.jsx("h2",{children:"Do While / Do Until"}),e.jsx(a,{language:"vbnet",code:`Dim linha As Long
  linha = 2
  Do While Cells(linha, 1).Value <> ""
      Cells(linha, 2).Value = Cells(linha, 1).Value * 1.18
      linha = linha + 1
  Loop`}),e.jsx("h2",{children:"Encontrar última linha preenchida"}),e.jsx(a,{language:"vbnet",code:`Dim ultima As Long
  ultima = Cells(Rows.Count, 1).End(xlUp).Row
  ' equivale a Ctrl + Seta para Cima a partir da última linha`}),e.jsx(o,{type:"tip",title:"Performance",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Antes de loops grandes, desligue temporariamente:<br><code>Application.ScreenUpdating = False</code><br><code>Application.Calculation = xlCalculationManual</code><br>E reative no fim. Pode acelerar 10-100x."}})})]})}export{t as default};
