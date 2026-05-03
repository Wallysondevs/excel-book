import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as t}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function i(){return e.jsxs(r,{title:"LET — variáveis dentro da fórmula",subtitle:"Calcule uma vez, use várias vezes — fórmula mais rápida e legível.",difficulty:"intermediario",timeToRead:"6 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(t,{language:"text",code:"=LET( nome1 ; valor1 ; nome2 ; valor2 ; ... ; resultado )"}),e.jsx("h2",{children:"Por que usar"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Performance</strong>: cada cálculo intermediário roda só uma vez."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Legibilidade</strong>: dá nome às partes (em vez de repetir <code>SOMA(B2:B100)</code> 5×)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Manutenção</strong>: mude o intervalo em 1 lugar."}})]}),e.jsx("h2",{children:"Antes vs depois"}),e.jsx(t,{language:"text",code:`ANTES (lento e ilegível):
=SE( SOMA(B2:B100) > 1000 ;
     SOMA(B2:B100) * 0,1 ;
     SOMA(B2:B100) * 0,05 ) + SOMA(B2:B100)

DEPOIS:
=LET(
   total ; SOMA(B2:B100) ;
   bonus ; SE(total > 1000 ; total * 0,1 ; total * 0,05) ;
   total + bonus
)`}),e.jsx("h2",{children:"LET com PROCX"}),e.jsx(t,{language:"text",code:`=LET(
  busca ; PROCX(B2 ; tbl[Cód] ; tbl[[Nome]:[Preço]]) ;
  nome  ; ÍNDICE(busca;1;1) ;
  preco ; ÍNDICE(busca;1;2) ;
  nome & " - R$ " & TEXTO(preco;"#.##0,00")
)`}),e.jsx(o,{type:"tip",title:"Identação",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Quebrar fórmula em linhas com Alt+Enter dentro da barra de fórmulas é fundamental quando se usa LET."}})})]})}export{i as default};
