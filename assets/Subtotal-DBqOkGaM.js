import{j as o}from"./index-COQxS6Ql.js";import{P as e}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function n(){return o.jsxs(e,{title:"SUBTOTAL e AGREGAR — soma que respeita filtros",subtitle:"Estatísticas que ignoram linhas ocultas/filtradas e erros.",difficulty:"intermediario",timeToRead:"6 min",children:[o.jsx("h2",{children:"SUBTOTAL"}),o.jsx(a,{language:"text",code:`=SUBTOTAL( função_núm ; intervalo )

Função:    Inclui ocultas    Ignora ocultas
SOMA       9                 109
MÉDIA      1                 101
CONT.NÚM   2                 102
MÁXIMO     4                 104
MÍNIMO     5                 105
PRODUTO    6                 106
DESVPAD    7                 107
VAR        8                 108

Em tabela filtrada:
=SUBTOTAL( 9 ; tbl[Valor] )  → soma só das linhas visíveis pelo filtro`}),o.jsx("h2",{children:"AGREGAR (mais poderoso)"}),o.jsx(a,{language:"text",code:`=AGREGAR( função ; opções ; matriz1 ; ... )

Funções 1-19 (mais que SUBTOTAL: MAIOR, MENOR, PERCENTIL...)
Opções: o que ignorar
   1 = ignora SUBTOTAL aninhado
   2 = ignora ERROS
   4 = ignora ocultas
   7 = ignora ocultas + erros + subtotal

Maior valor IGNORANDO erros:
=AGREGAR( 4 ; 6 ; tbl[Valor] )

Top 3 quando há #N/D no meio:
=AGREGAR( 14 ; 6 ; tbl[Valor] ; {1;2;3} )`}),o.jsx(t,{type:"tip",title:"Numeração automática que ignora filtro",children:o.jsx("span",{dangerouslySetInnerHTML:{__html:"Em A2: <code>=SUBTOTAL(3;$B$2:B2)</code> e arraste — numeração 1,2,3,… que pula linhas filtradas."}})})]})}export{n as default};
