import{j as a}from"./index-B7FO_Trq.js";import{P as i}from"./PageContainer-D5OsdXj6.js";import{C as e}from"./CodeBlock-CjZI5FLa.js";function s(){return a.jsxs(i,{title:"SEQUÊNCIA — gere séries numéricas",subtitle:"Substitui '1, 2, 3, …' arrastado a mão.",difficulty:"intermediario",timeToRead:"4 min",children:[a.jsx("h2",{children:"Sintaxe"}),a.jsx(e,{language:"text",code:`=SEQUÊNCIA( linhas ; [colunas] ; [início] ; [passo] )

=SEQUÊNCIA(10)             1..10 em coluna
=SEQUÊNCIA(1;10)           1..10 em linha
=SEQUÊNCIA(5;5)            matriz 5×5 com 1..25
=SEQUÊNCIA(12;1;0;30)      0,30,60,90... (12 valores)
=SEQUÊNCIA(31;1;DATA(2025;1;1))  todos os dias de janeiro`}),a.jsx("h2",{children:"Calendário em uma fórmula"}),a.jsx(e,{language:"text",code:'=TEXTO( SEQUÊNCIA(31;1;DATA(2025;1;1)) ; "ddd dd/mm" )'}),a.jsx("h2",{children:"Combinando com outras"}),a.jsx(e,{language:"text",code:`Tabuada do 7:
="7 × " & SEQUÊNCIA(10) & " = " & 7*SEQUÊNCIA(10)

Numerar linhas filtradas:
=SEQUÊNCIA( LINS( resultado_filtro# ) )`})]})}export{s as default};
