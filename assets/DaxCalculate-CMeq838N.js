import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function n(){return e.jsxs(a,{title:"DAX — CALCULATE e contexto de filtro",subtitle:"A função mais importante do DAX. Ponto.",difficulty:"avancado",timeToRead:"9 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(o,{language:"text",code:"CALCULATE( expressão ; filtro1 ; filtro2 ; ... )"}),e.jsx("h2",{children:"O que faz"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Recalcula a expressão <strong>modificando o contexto de filtro</strong>. Usado em quase toda medida não-trivial."}}),e.jsx("h2",{children:"Exemplos"}),e.jsx(o,{language:"text",code:`Vendas total:
   Total Vendas = SUM( Vendas[Valor] )

Vendas de SP (ignora filtros e força UF=SP):
   Vendas SP = CALCULATE( [Total Vendas] ; Vendas[UF] = "SP" )

Vendas SEM filtro algum (total geral):
   Total Geral = CALCULATE( [Total Vendas] ; ALL(Vendas) )

% sobre o total:
   % Vendas = DIVIDE( [Total Vendas] ; [Total Geral] )

Vendas só de Produtos da Categoria "A":
   Vendas Cat A = CALCULATE( [Total Vendas] ; Produtos[Categoria] = "A" )`}),e.jsx("h2",{children:"Modificadores de filtro"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>ALL(tabela ou coluna)</code> — remove filtros"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>ALLEXCEPT(tabela; col1; col2)</code> — remove tudo MENOS as colunas listadas"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>KEEPFILTERS(...)</code> — adiciona filtro sem remover existentes"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>USERELATIONSHIP(col1; col2)</code> — usa relacionamento inativo"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>REMOVEFILTERS(...)</code> — sinônimo claro de ALL"}})]})]})}export{n as default};
