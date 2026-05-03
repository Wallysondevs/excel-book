import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function n(){return e.jsxs(a,{title:"UNIRTEXTO e CONCAT",subtitle:"Junte intervalos com delimitador, ignorando vazios.",difficulty:"iniciante",timeToRead:"4 min",children:[e.jsx("h2",{children:"CONCAT"}),e.jsx(o,{language:"text",code:`=CONCAT( A1:A10 )
   → "Maria" & "João" & "Pedro" & ...   (sem separador, sem pular vazios)`}),e.jsx("h2",{children:"UNIRTEXTO (TEXTJOIN) — o melhor"}),e.jsx(o,{language:"text",code:`=UNIRTEXTO( delim ; ignorar_vazias ; texto1 ; texto2 ; ... )

=UNIRTEXTO( ", " ; VERDADEIRO ; A1:A10 )
   → "Maria, João, Pedro" (pula vazios)

=UNIRTEXTO( CARACT(10) ; VERDADEIRO ; tblItens[Descrição] )
   → cada item em uma linha (Alt+Enter visual)`}),e.jsx("h2",{children:"Combinado com FILTRO"}),e.jsx(o,{language:"text",code:`Lista de produtos do cliente "Ana", separados por vírgula:
=UNIRTEXTO( ", " ; VERDADEIRO ;
   FILTRO(tbl[Produto] ; tbl[Cliente]="Ana") )`})]})}export{n as default};
