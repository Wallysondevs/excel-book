import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function s(){return e.jsxs(a,{title:"SOMARPRODUTO — o canivete suíço",subtitle:"Soma, conta, pondera e filtra — tudo na mesma função.",difficulty:"avancado",timeToRead:"8 min",children:[e.jsx("h2",{children:"Funcionamento básico"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Multiplica matrizes elemento a elemento e soma o resultado."}}),e.jsx(o,{language:"text",code:`=SOMARPRODUTO( A1:A5 ; B1:B5 )

   A     B
   2     10        →  2*10 + 3*5 + 1*7 + 4*2 + 5*8 = 78
   3      5
   1      7
   4      2
   5      8`}),e.jsx("h2",{children:"Como SOMASES alternativo"}),e.jsx(o,{language:"text",code:`Soma de Valor onde Vendedor="Ana" E UF="SP":
=SOMARPRODUTO( (tbl[Vendedor]="Ana") * (tbl[UF]="SP") * tbl[Valor] )

VERDADEIRO * VERDADEIRO * número  →  1 * 1 * número  →  só conta os que batem`}),e.jsx("h2",{children:"Como CONT.SES"}),e.jsx(o,{language:"text",code:`Contar quantas vendas em SP acima de R$ 1000:
=SOMARPRODUTO( (tbl[UF]="SP") * (tbl[Valor]>1000) )`}),e.jsx("h2",{children:"Média ponderada"}),e.jsx(o,{language:"text",code:`Notas com pesos diferentes:
   B  notas    C  pesos
=SOMARPRODUTO(B2:B5 ; C2:C5) / SOMA(C2:C5)`}),e.jsx("h2",{children:"Vantagens"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Funciona em qualquer versão do Excel (não precisa de array dinâmico)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Pode misturar somas e contagens com lógica complexa"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Não precisa de Ctrl+Shift+Enter"}})]})]})}export{s as default};
