import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function s(){return a.jsxs(o,{title:"DAX — RELATED e RELATEDTABLE",subtitle:"Acessar colunas de tabelas relacionadas.",difficulty:"intermediario",timeToRead:"5 min",children:[a.jsx("h2",{children:"RELATED"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"De um lado MUITOS, busca o valor do lado UM (segue a relação)."}}),a.jsx(e,{language:"text",code:`Em uma coluna calculada na tabela Vendas:
   Categoria = RELATED( Produtos[Categoria] )

   → para cada linha de Vendas, traz a Categoria do produto correspondente`}),a.jsx("h2",{children:"RELATEDTABLE"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Caminho inverso: do lado UM, retorna a TABELA filtrada do lado MUITOS."}}),a.jsx(e,{language:"text",code:`Em uma coluna calculada na tabela Produtos:
   Vendas Total = SUMX( RELATEDTABLE(Vendas) ; Vendas[Valor] )

   → soma todas as vendas daquele produto`}),a.jsx(r,{type:"tip",title:"Coluna calculada vs Medida",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Coluna calculada roda 1× para cada linha (no refresh). Medida roda no momento da análise (cada célula da TD). Em geral, prefira MEDIDA para agregações."}})})]})}export{s as default};
