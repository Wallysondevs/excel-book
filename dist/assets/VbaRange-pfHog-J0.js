import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function s(){return e.jsxs(o,{title:"VBA — Range, Cells, Offset, Resize",subtitle:"Dominar células é dominar VBA.",difficulty:"intermediario",timeToRead:"7 min",children:[e.jsx("h2",{children:"Formas de referência"}),e.jsx(a,{language:"text",code:`Range("A1")              célula A1
Range("A1:C10")          intervalo
Range("MeuNome")         nome definido
Cells(2, 3)              linha 2, coluna 3 = C2  ← ótimo p/ loops
Cells(2, "C")            também aceita letra
[A1]                     atalho — Range("A1")`}),e.jsx("h2",{children:"Offset e Resize"}),e.jsx(a,{language:"text",code:`Range("A1").Offset(2, 3)            move: A1 → D3
Range("A1").Resize(5, 2)            redimensiona: A1 → A1:B5
Range("A1").Offset(1).Resize(10)    A2:A11

' Ler última linha de uma coluna:
Dim ult As Long
ult = Cells(Rows.Count, "A").End(xlUp).Row
Range("B1:B" & ult)`}),e.jsx("h2",{children:"Ler/escrever em massa"}),e.jsx(a,{language:"text",code:`' RUIM (lento) - célula por célula:
For i = 1 To 10000
    Cells(i, 1) = i
Next

' BOM (rápido) - array em uma operação:
Dim arr(1 To 10000, 1 To 1) As Long
For i = 1 To 10000
    arr(i, 1) = i
Next
Range("A1").Resize(10000, 1).Value = arr`}),e.jsx(r,{type:"tip",title:"Atalho secreto",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Sempre que puder, leia o intervalo TODO em um array, processe, devolva. Fica 100x a 1000x mais rápido."}})})]})}export{s as default};
