import{j as e}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as t}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function s(){return e.jsxs(i,{title:"MÁXIMOSES, MÍNIMOSES, MÉDIASES",subtitle:"Estatística com critérios — irmãos do SOMASES.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"Sintaxe (mesma ideia que SOMASES)"}),e.jsx(t,{language:"text",code:`=MÁXIMOSES( max_intervalo ; crit_int1 ; crit1 ; crit_int2 ; crit2 ; ... )
=MÍNIMOSES( min_intervalo ; ... )
=MÉDIASES( méd_intervalo ; ... )`}),e.jsx("h2",{children:"Exemplos"}),e.jsx(t,{language:"text",code:`Maior venda do vendedor "Ana":
=MÁXIMOSES( tbl[Valor] ; tbl[Vendedor] ; "Ana" )

Menor venda em SP no mês 1:
=MÍNIMOSES( tbl[Valor] ;
   tbl[UF] ; "SP" ;
   tbl[Mês] ; 1 )

Ticket médio acima de R$ 500:
=MÉDIASES( tbl[Valor] ; tbl[Valor] ; ">500" )`}),e.jsx(o,{type:"tip",title:"Curingas",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Os critérios aceitam <code>*</code> (qualquer texto) e <code>?</code> (1 caractere). Ex: <code>tbl[Cliente] ; "Sup*"</code> pega Supermarket, Super, Supremo…'}})})]})}export{s as default};
