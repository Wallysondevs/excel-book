import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as l}from"./AlertBox-BTEjDUYQ.js";function r(){return a.jsxs(o,{title:"MAP, REDUCE, SCAN, BYROW, BYCOL",subtitle:"Programação funcional dentro do Excel.",difficulty:"avancado",timeToRead:"8 min",children:[a.jsx("h2",{children:"Visão geral"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>MAP</code> — aplica LAMBDA a cada elemento"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>REDUCE</code> — acumula um único resultado"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>SCAN</code> — como REDUCE mas devolve cada estado intermediário"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>BYROW</code> / <code>BYCOL</code> — aplica em cada linha/coluna"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>MAKEARRAY</code> — gera matriz pelos índices (i,j)"}})]}),a.jsx("h2",{children:"MAP — exemplos"}),a.jsx(e,{language:"text",code:`Quadrado de cada elemento:
=MAP( A1:A10 ; LAMBDA(x ; x^2) )

Combinar 2 colunas:
=MAP( A1:A10 ; B1:B10 ; LAMBDA(p;q ; p & " - " & q) )`}),a.jsx("h2",{children:"REDUCE — soma manual"}),a.jsx(e,{language:"text",code:`=REDUCE( 0 ; A1:A10 ; LAMBDA(acum;x ; acum + x) )

(Equivalente a =SOMA(A1:A10) — mas mostra o conceito)

Maior valor:
=REDUCE( -1E300 ; A1:A10 ; LAMBDA(acum;x ; MÁXIMO(acum;x)) )`}),a.jsx("h2",{children:"SCAN — saldo acumulado"}),a.jsx(e,{language:"text",code:`=SCAN( 0 ; A1:A10 ; LAMBDA(acum;x ; acum + x) )

→ retorna a coluna de soma cumulativa
   (ideal para fluxo de caixa: saldo após cada transação)`}),a.jsx("h2",{children:"BYROW — média por linha"}),a.jsx(e,{language:"text",code:`=BYROW( B2:F100 ; LAMBDA(linha ; MÉDIA(linha)) )

→ devolve uma coluna com a média de cada linha`}),a.jsx("h2",{children:"MAKEARRAY — tabuada"}),a.jsx(e,{language:"text",code:"=MAKEARRAY( 10 ; 10 ; LAMBDA(i;j ; i*j) )    matriz 10×10 multiplicação"}),a.jsx(l,{type:"tip",title:"Combinando",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Esses 5 + LAMBDA + LET formam um mini-sistema de programação. Você consegue resolver praticamente qualquer transformação de dados sem VBA."}})})]})}export{r as default};
