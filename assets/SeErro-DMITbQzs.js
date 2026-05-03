import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as r}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(a,{title:"SE.ERRO e SEERRO — capturando exceções",subtitle:"Substitui qualquer erro por um valor padrão.",difficulty:"iniciante",timeToRead:"4 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(r,{language:"text",code:`=SEERRO( valor ; valor_se_erro )

=SEERRO( PROCV(B2;tab;3;0) ; "não encontrado" )
=SEERRO( A1/B1 ; 0 )`}),e.jsx("h2",{children:"SE.ERRO vs SEND"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>SEERRO</strong> — captura QUALQUER erro (#N/D, #DIV/0!, #VALOR!…)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>SENDIPS</strong> (SE.NÃO.DISP / IFNA) — captura SÓ #N/D"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Use SENDIPS quando quiser saber se há problema de tipo (#VALOR!) mas tratar só ausência (#N/D)"}})]}),e.jsx("h2",{children:"Diferença prática"}),e.jsx(r,{language:"text",code:`=SEERRO(PROCV(B2;tab;3;0);"") 
   → silencia até erros de tipo

=SE.NÃO.DISP(PROCV(B2;tab;3;0);"")
   → silencia só "não achou"; se tab for inválida, ainda dá #REF!`}),e.jsx(t,{type:"warning",title:"Cuidado com excesso",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Envolver tudo em SEERRO esconde bugs reais. Use só na camada final, não dentro de cada cálculo intermediário."}})})]})}export{l as default};
