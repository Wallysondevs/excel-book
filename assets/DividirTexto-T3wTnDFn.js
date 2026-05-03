import{j as a}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function m(){return a.jsxs(i,{title:"DIVIDIRTEXTO — split em uma fórmula",subtitle:"Quebra texto em várias colunas/linhas por delimitador.",difficulty:"intermediario",timeToRead:"5 min",children:[a.jsx("h2",{children:"Sintaxe"}),a.jsx(e,{language:"text",code:"=DIVIDIRTEXTO( texto ; col_delim ; [linha_delim] ; [ignorar_vazias] ; [diferenciar] ; [preencher_com] )"}),a.jsx("h2",{children:"Exemplos"}),a.jsx(e,{language:"text",code:`=DIVIDIRTEXTO( "maçã,banana,uva" ; "," )
   → derrama em 3 colunas

=DIVIDIRTEXTO( "1;2;3¶4;5;6" ; ";" ; "¶" )
   → matriz 2×3 (¶ é só símbolo - use CARACT(10) para Alt+Enter)

=DIVIDIRTEXTO( "a,,b,c" ; "," ; ; VERDADEIRO )
   → ignora vazios → {"a";"b";"c"}`}),a.jsx("h2",{children:"Caso real — separar nomes"}),a.jsx(e,{language:"text",code:`Em A: "Maria da Silva Souza"

=DIVIDIRTEXTO(A1;" ")  →  Maria | da | Silva | Souza
=ÍNDICE(DIVIDIRTEXTO(A1;" ");1;1)             primeiro nome
=PEGAR(DIVIDIRTEXTO(A1;" ");-1)               último sobrenome`})]})}export{m as default};
