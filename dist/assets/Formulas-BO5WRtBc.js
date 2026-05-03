import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function c(){return e.jsxs(a,{title:"Operadores e Fórmulas",subtitle:"Toda fórmula começa com = . Aritméticos, comparação, texto e referência.",difficulty:"iniciante",timeToRead:"8 min",children:[e.jsx("h2",{children:"Anatomia de uma fórmula"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Toda fórmula começa com o sinal de igual <code>=</code>. Pode conter operadores, funções, referências e constantes."}}),e.jsx(o,{language:"text",code:`=  A2  *  B2  +  IMPOSTO  -  SOMA(C2:C10)
  ↑   ↑    ↑    ↑      ↑           ↑
  sinal  ref  op   op   nome     função
  inicial`}),e.jsx("h2",{children:"Operadores aritméticos"}),e.jsx(o,{language:"text",code:`+    soma             =A1+B1
  -    subtração        =A1-B1
  *    multiplicação    =A1*B1
  /    divisão          =A1/B1
  ^    exponenciação    =A1^2  (A1 ao quadrado)
  %    porcentagem      =50%   (= 0,5)`}),e.jsx("h2",{children:"Operadores de comparação"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Resultam em <code>VERDADEIRO</code> ou <code>FALSO</code>. Usados em SE, FILTRO, SOMASE etc."}}),e.jsx(o,{language:"text",code:`=    igual             =A1=B1
  <>   diferente         =A1<>B1
  >    maior             =A1>10
  <    menor             =A1<10
  >=   maior ou igual    =A1>=0
  <=   menor ou igual    =A1<=100`}),e.jsx("h2",{children:"Operador de concatenação de texto"}),e.jsx(o,{language:"text",code:`=A1 & " " & B1            → "Maria Silva"
  =CONCAT(A1; " "; B1)      → mesmo efeito (função moderna)
  ="Olá, " & A1 & "!"       → "Olá, Maria!"`}),e.jsx("h2",{children:"Operadores de referência"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>:</code> intervalo — <code>A1:A10</code> (10 células)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>;</code> união — <code>SOMA(A1:A5;C1:C5)</code>."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code> </code> (espaço) interseção — <code>SOMA(A1:C3 B2:B5)</code> = só B2:B3."}})]}),e.jsx("h2",{children:"Precedência"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Mesma regra da matemática. Em ordem: <code>:</code>, espaço, <code>;</code>, <code>%</code>, <code>^</code>, <code>* /</code>, <code>+ -</code>, <code>&</code>, comparações. Use parênteses para forçar:"}}),e.jsx(o,{language:"text",code:`=2+3*4       → 14
  =(2+3)*4     → 20`}),e.jsx(r,{type:"warning",title:"Vírgula ou ponto-e-vírgula?",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'No Excel em português usamos <strong>vírgula como separador decimal</strong> e <strong>ponto-e-vírgula entre argumentos</strong>: <code>=SE(A1>10;"alto";"baixo")</code>. Em inglês é o oposto.'}})})]})}export{c as default};
