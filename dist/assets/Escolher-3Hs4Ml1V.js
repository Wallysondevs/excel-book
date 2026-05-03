import{j as e}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function a(){return e.jsxs(t,{title:"ESCOLHER, ESCOLHERLINS, ESCOLHERCOLS",subtitle:"Pegue elementos por índice — sem PROCV.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"ESCOLHER (clássico)"}),e.jsx(o,{language:"text",code:`=ESCOLHER( índice ; valor1 ; valor2 ; ... )

=ESCOLHER( DIA.DA.SEMANA(HOJE();2) ; "seg";"ter";"qua";"qui";"sex";"sáb";"dom" )

→ retorna o nome do dia atual em pt-BR`}),e.jsx("h2",{children:"ESCOLHERLINS / ESCOLHERCOLS (modernos)"}),e.jsx(o,{language:"text",code:`=ESCOLHERLINS( matriz ; lin1 ; lin2 ; ... )
=ESCOLHERCOLS( matriz ; col1 ; col2 ; ... )

Reordenar colunas:
=ESCOLHERCOLS( tblFunc ; 3 ; 1 ; 5 )
   → coluna 3, depois 1, depois 5

Pegar última linha:
=ESCOLHERLINS( tbl ; -1 )

Top 3 + bottom 3:
=ESCOLHERLINS( tbl_ord ; 1 ; 2 ; 3 ; -3 ; -2 ; -1 )`})]})}export{a as default};
