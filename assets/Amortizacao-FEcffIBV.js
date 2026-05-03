import{j as o}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as e}from"./AlertBox-BTEjDUYQ.js";function l(){return o.jsxs(r,{title:"Tabela de amortização (Price e SAC)",subtitle:"Construa do zero usando IPGTO e PPGTO.",difficulty:"avancado",timeToRead:"8 min",children:[o.jsx("h2",{children:"PRICE (parcelas iguais)"}),o.jsx(a,{language:"text",code:`Parâmetros:
   B1 = 50000      (valor)
   B2 = 1,8%       (juros am)
   B3 = 36         (meses)

Parcela fixa:
   B4 = =PGTO(B2;B3;-B1)    → 1.913,42

Tabela:
   col A: 1..36
   col B (Juros):       =PRINCIPAL_RESTANTE(linha-1) * $B$2
   col C (Amortização): =$B$4 - B(linha)
   col D (Saldo):       =D(linha-1) - C(linha)

Funções prontas:
=IPGTO( taxa ; período ; nper ; vp )    → juros do período
=PPGTO( taxa ; período ; nper ; vp )    → amortização do período`}),o.jsx("h2",{children:"SAC (amortização constante)"}),o.jsx(a,{language:"text",code:`Amortização fixa = VP / NPER     (50000 / 36 = 1.388,89)
Juros = saldo anterior × taxa
Parcela = amortização + juros (decrescente)

   Mês 1:  amort 1.388,89 + juros 900,00 = 2.288,89
   Mês 36: amort 1.388,89 + juros  25,00 = 1.413,89`}),o.jsx(e,{type:"tip",title:"Comparativo",children:o.jsx("span",{dangerouslySetInnerHTML:{__html:"Price tem parcela menor no início, mas paga MAIS juros totais. SAC tem parcela maior no início e MENOS juros totais."}})})]})}export{l as default};
