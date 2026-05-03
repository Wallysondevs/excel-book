import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";function n(){return e.jsxs(o,{title:"PARÂMETRO (SWITCH)",subtitle:"Quando a comparação é exata, use SWITCH no lugar de SE.MÚLTIPLO.",difficulty:"intermediario",timeToRead:"4 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(a,{language:"text",code:"=PARÂMETRO( valor ; caso1 ; resultado1 ; caso2 ; resultado2 ; ... ; [padrão] )"}),e.jsx("h2",{children:"Exemplo"}),e.jsx(a,{language:"text",code:`=PARÂMETRO( B2 ;
   "A" ; "Aprovado" ;
   "R" ; "Reprovado" ;
   "P" ; "Pendente" ;
   "Status desconhecido"
)

Equivalente em SE:
=SE(B2="A";"Aprovado";SE(B2="R";"Reprovado";SE(B2="P";"Pendente";"Status desconhecido")))`}),e.jsx("h2",{children:"Quando preferir SE.MÚLTIPLO"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"PARÂMETRO só compara igualdade. Para faixas (>=, <), use <code>SE.MÚLTIPLO</code>."}})]})}export{n as default};
