import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";function n(){return e.jsxs(r,{title:"VBA — Dictionary e Collection",subtitle:"Estruturas de dados que você não sabia que precisava.",difficulty:"avancado",timeToRead:"7 min",children:[e.jsx("h2",{children:"Dictionary"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Chave-valor (como hash em outras linguagens)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Chaves únicas, lookup O(1) — muito rápido"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Precisa adicionar referência: <strong>Ferramentas → Referências → Microsoft Scripting Runtime</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:'Ou criar com late binding: <code>CreateObject("Scripting.Dictionary")</code>'}})]}),e.jsx(a,{language:"text",code:`Dim d As Object
Set d = CreateObject("Scripting.Dictionary")

d("Ana") = 1500
d("João") = 2200
d.Add "Pedro", 1700        ' erro se chave já existe
d("Ana") = 1800            ' atualiza

If d.Exists("Maria") Then ...
For Each chave In d.Keys
    Debug.Print chave, d(chave)
Next
d.Remove "João"
d.RemoveAll`}),e.jsx("h2",{children:"Caso típico — somar por categoria"}),e.jsx(a,{language:"text",code:`Dim d As Object, arr As Variant, i As Long
Set d = CreateObject("Scripting.Dictionary")
arr = Range("A2:B10000").Value      ' [Categoria, Valor]

For i = 1 To UBound(arr)
    d(arr(i,1)) = d(arr(i,1)) + arr(i,2)    ' chave nova vira 0 + valor
Next

' resultado:  d("Eletrônicos") = 15000, etc.`}),e.jsx("h2",{children:"Collection"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Mais simples: aceita chave opcional, mas não tem .Exists. Use Dictionary quando precisa testar existência ou atualizar."}})]})}export{n as default};
