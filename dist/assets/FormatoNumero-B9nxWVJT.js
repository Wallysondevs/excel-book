import{j as o}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function n(){return o.jsxs(r,{title:"Códigos de formato de número",subtitle:"Tudo que você pode escrever em Formatar Células → Personalizado.",difficulty:"intermediario",timeToRead:"7 min",children:[o.jsx("h2",{children:"Estrutura geral"}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"Um código de formato pode ter <strong>até 4 seções</strong> separadas por ponto-e-vírgula:"}}),o.jsx(e,{language:"text",code:`positivo ; negativo ; zero ; texto

Exemplo:
[Verde]#.##0,00 ; [Vermelho]-#.##0,00 ; "—" ; @`}),o.jsx("h2",{children:"Símbolos básicos"}),o.jsx(e,{language:"text",code:`0       dígito obrigatório (mostra zero se não tiver)
#       dígito opcional (não mostra zero à toa)
?       dígito alinhador (espaço se vazio)
,       separador decimal
.       separador de milhar
%       multiplica por 100 e mostra %
"texto" texto fixo
\\      escapa o próximo caractere
@       posição do texto na seção de texto`}),o.jsx("h2",{children:"Exemplos prontos"}),o.jsx(e,{language:"text",code:`#.##0,00              1.234,56
"R$ "#.##0,00         R$ 1.234,56
0,00%                 12,34%
0" un"                42 un
[>=1000]"K";0          1500 → "K"; 50 → 50
[Azul]"▲ "0,0%;[Vermelho]"▼ "0,0%   ▲ 12,3% / ▼ 5,1%
0;-0;;@               oculta zeros (mostra texto)
;;;                   oculta TUDO (visualmente em branco)`}),o.jsx(t,{type:"tip",title:"Cores válidas",children:o.jsx("span",{dangerouslySetInnerHTML:{__html:"[Preto] [Branco] [Vermelho] [Verde] [Azul] [Amarelo] [Magenta] [Ciano] e [Cor1] até [Cor56]."}})})]})}export{n as default};
