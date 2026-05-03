import{j as o}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function r(){return o.jsxs(a,{title:"DAX — RANKX e TOPN",subtitle:"Posição e top N — com cuidados.",difficulty:"avancado",timeToRead:"6 min",children:[o.jsx("h2",{children:"RANKX"}),o.jsx(e,{language:"text",code:`RANKX( tabela ; expressão ; [valor] ; [ordem] ; [empate] )

Ranking de produtos por vendas:
Rank Produto = RANKX( ALL(Produtos[Nome]) ; [Total Vendas] )

→ ALL é essencial para que o ranking compare TODOS os produtos
   (sem ALL, ranking sempre seria 1 — pois há só 1 linha no contexto)`}),o.jsx("h2",{children:"TOPN"}),o.jsx(e,{language:"text",code:`TOPN( N ; tabela ; ordem_expr ; ASC|DESC )

Vendas dos top 5 produtos:
Vendas Top 5 = SUMX(
   TOPN( 5 ; ALL(Produtos[Nome]) ; [Total Vendas] ; DESC ) ;
   [Total Vendas]
)`}),o.jsx("h2",{children:"Vendas Top 10 + Outros"}),o.jsx(e,{language:"text",code:`Outros = [Total Vendas] - [Vendas Top 10]

→ útil em pizza/treemap "Top N + Outros"`})]})}export{r as default};
