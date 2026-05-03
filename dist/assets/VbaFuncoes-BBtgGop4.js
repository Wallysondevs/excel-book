import{j as o}from"./index-COQxS6Ql.js";import{P as n}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function t(){return o.jsxs(n,{title:"VBA — Sub vs Function, parâmetros",subtitle:"Crie suas funções de planilha e procedimentos automáticos.",difficulty:"intermediario",timeToRead:"6 min",children:[o.jsx("h2",{children:"Sub — não retorna nada"}),o.jsx(e,{language:"text",code:`Sub LimparAbas()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        ws.UsedRange.ClearContents
    Next ws
End Sub`}),o.jsx("h2",{children:"Function — retorna valor (e pode virar fórmula no Excel)"}),o.jsx(e,{language:"text",code:`Function ICMS(valor As Double, Optional aliquota As Double = 0.18) As Double
    ICMS = valor * aliquota
End Function

' Na planilha: =ICMS(1000)        → 180
'             =ICMS(1000; 0,07)   → 70`}),o.jsx("h2",{children:"Parâmetros"}),o.jsxs("ul",{children:[o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ByVal</strong>: passa cópia (padrão recomendado)"}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ByRef</strong>: passa referência (alterações refletem no chamador)"}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Optional</strong>: pode ser omitido (com valor padrão)"}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ParamArray</strong>: lista variável de argumentos"}})]}),o.jsx(e,{language:"text",code:`Function Maximo(ParamArray nums()) As Double
    Dim m As Double : m = nums(0)
    Dim i As Long
    For i = 1 To UBound(nums)
        If nums(i) > m Then m = nums(i)
    Next
    Maximo = m
End Function

' =Maximo(10; 5; 17; 3)   → 17`})]})}export{t as default};
