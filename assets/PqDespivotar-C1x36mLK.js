import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(a,{title:"Power Query — Pivotar e Despivotar",subtitle:"Converta entre formato 'matricial' e 'longo' (tidy data).",difficulty:"intermediario",timeToRead:"6 min",children:[e.jsx("h2",{children:"Despivotar (unpivot)"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Transforma colunas em linhas. Essencial para Tabela Dinâmica e BI."}}),e.jsx(o,{language:"text",code:`ANTES (largo, ruim para BI):
   Cliente  Jan   Fev   Mar
   Ana      100   120   150
   João      80    90   110

DEPOIS (longo, ideal):
   Cliente  Mês   Valor
   Ana      Jan   100
   Ana      Fev   120
   Ana      Mar   150
   João     Jan    80
   João     Fev    90
   João     Mar   110`}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Selecione as colunas a despivotar (Jan, Fev, Mar)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Botão direito → <strong>Transformar Outras Colunas em Linhas</strong>"}})]}),e.jsx("h2",{children:"Pivotar"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Caminho inverso. Selecione coluna de categoria → <strong>Transformar → Coluna Dinâmica</strong>. Escolha coluna de valores."}}),e.jsx(r,{type:"tip",title:"Use SEMPRE despivotar",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"BI precisa de dados 'tidy'. Se um relatório vier em formato matricial, despivote antes de qualquer análise."}})})]})}export{l as default};
