import{j as a}from"./index-COQxS6Ql.js";import{P as m}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function i(){return a.jsxs(m,{title:"Formatos de data e moeda BR",subtitle:"Datas em pt-BR sem dor — e moeda no padrão correto.",difficulty:"iniciante",timeToRead:"5 min",children:[a.jsx("h2",{children:"Datas"}),a.jsx(e,{language:"text",code:`d       dia (1)
dd      dia (01)
ddd     dia abreviado (qua)
dddd    dia por extenso (quarta-feira)
m       mês (3)
mm      mês (03)
mmm     mês abreviado (mar)
mmmm    mês por extenso (março)
mmmmm   inicial do mês (M)
aa      ano com 2 dígitos (25)
aaaa    ano com 4 dígitos (2025)`}),a.jsx("h2",{children:"Exemplos pt-BR"}),a.jsx(e,{language:"text",code:`dd/mm/aaaa            05/03/2025
dd/mm/aaaa hh:mm      05/03/2025 14:30
dddd, d "de" mmmm     quarta-feira, 5 de março
mmm/aa                mar/25
[$-pt-BR]d-mmm-aaaa   5-mar-2025`}),a.jsx("h2",{children:"Hora"}),a.jsx(e,{language:"text",code:`h:mm                  14:30
h:mm AM/PM            2:30 PM
[h]:mm                36:00 (mais de 24h, p/ totais)
mm:ss,000             30:45,123 (milissegundos)`}),a.jsx("h2",{children:"Moeda BR"}),a.jsx(e,{language:"text",code:`"R$ "#.##0,00              R$ 1.234,56
[$R$-pt-BR] #.##0,00       R$ 1.234,56  (com ícone de moeda)
#.##0,00" R$"              1.234,56 R$
[Vermelho]-"R$ "#.##0,00   negativos em vermelho`}),a.jsx(o,{type:"warning",title:"Datas não são datas",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Se aparecer alinhado à esquerda, é texto. Se aparecer à direita e responder a soma/cálculo, é data de verdade. Para converter texto em data: <code>=DATA.VALOR(A1)</code> ou Power Query."}})})]})}export{i as default};
