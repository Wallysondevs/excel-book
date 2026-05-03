import{j as r}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function l(){return r.jsxs(o,{title:"VBA — Tratamento de erros",subtitle:"On Error, Err object, padrões profissionais.",difficulty:"avancado",timeToRead:"6 min",children:[r.jsx("h2",{children:"On Error"}),r.jsx(e,{language:"text",code:`On Error Resume Next       ' continua na próxima linha (use com CUIDADO)
On Error GoTo Tratamento   ' pula para o rótulo
On Error GoTo 0            ' restaura comportamento padrão`}),r.jsx("h2",{children:"Padrão profissional"}),r.jsx(e,{language:"text",code:`Sub Processar()
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
End Sub`}),r.jsx("h2",{children:"Err object"}),r.jsxs("ul",{children:[r.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>Err.Number</code> — código do erro"}}),r.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>Err.Description</code> — texto"}}),r.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>Err.Source</code> — onde aconteceu"}}),r.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>Err.Clear</code> — limpa"}}),r.jsx("li",{dangerouslySetInnerHTML:{__html:'<code>Err.Raise 9999, , "Mensagem"</code> — lança erro próprio'}})]}),r.jsx(a,{type:"warning",title:"On Error Resume Next",children:r.jsx("span",{dangerouslySetInnerHTML:{__html:"Esconde TODOS os erros. Use só em trechos curtos onde você espera erro específico, e SEMPRE volte com <code>On Error GoTo 0</code> logo depois."}})})]})}export{l as default};
