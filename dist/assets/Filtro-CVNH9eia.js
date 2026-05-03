import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function n(){return e.jsxs(o,{title:"FILTRO — filtre com fórmula",subtitle:"Substitua filtros manuais por fórmula que recalcula sozinha.",difficulty:"intermediario",timeToRead:"7 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(a,{language:"text",code:`=FILTRO( matriz ; incluir ; [se_vazio] )

matriz   o que retornar
incluir  vetor lógico (mesmo tamanho da matriz)
se_vazio o que mostrar se nada bater (opcional)`}),e.jsx("h2",{children:"Exemplos"}),e.jsx(a,{language:"text",code:`Vendas do vendedor "Ana":
=FILTRO( tblVendas ; tblVendas[Vendedor]="Ana" ; "sem registros" )

Vendas acima de R$ 1000 em janeiro:
=FILTRO( tblV ; (tblV[Valor]>1000) * (MÊS(tblV[Data])=1) )

OU lógico (com soma):
=FILTRO( tblV ; (tblV[UF]="SP") + (tblV[UF]="RJ") )

Devolver só algumas colunas:
=FILTRO( tblV[[Cliente]:[Valor]] ; tblV[Vendedor]="Ana" )`}),e.jsx("h2",{children:"Combinando com outras"}),e.jsx(a,{language:"text",code:`Top 5 maiores:
=CLASSIFICAR( FILTRO(tbl[Valor];tbl[Valor]>0) ; ; -1 )
   ↑ inverter ordem com -1
Pegar primeiros 5:
=PEGAR( CLASSIFICAR(...; ; -1) ; 5 )`}),e.jsx(t,{type:"tip",title:"Substitua FILTRO/PROCV",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Onde antes você usava <code>ÍNDICE+CORRESP</code> com matriz CSE, hoje basta <code>FILTRO</code>."}})})]})}export{n as default};
