import{j as e}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(i,{title:"SE.MÚLTIPLO (IFS) — adeus SE aninhado",subtitle:"Vários testes lógicos sem virar pirâmide de parênteses.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(o,{language:"text",code:"=SE.MÚLTIPLO( cond1 ; valor1 ; cond2 ; valor2 ; ... ; VERDADEIRO ; padrão )"}),e.jsx("h2",{children:"Antes vs depois"}),e.jsx(o,{language:"text",code:`ANTES (legibilidade horrível):
=SE(B2>=90;"A";SE(B2>=80;"B";SE(B2>=70;"C";SE(B2>=60;"D";"F"))))

DEPOIS:
=SE.MÚLTIPLO(
   B2>=90 ; "A" ;
   B2>=80 ; "B" ;
   B2>=70 ; "C" ;
   B2>=60 ; "D" ;
   VERDADEIRO ; "F"
)`}),e.jsx(r,{type:"warning",title:"Sem ELSE explícito",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Se nenhuma condição bater e você não tiver <code>VERDADEIRO ; padrão</code> no fim, retorna #N/D."}})})]})}export{d as default};
