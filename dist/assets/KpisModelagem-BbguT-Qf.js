import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as s}from"./AlertBox-BTEjDUYQ.js";function i(){return e.jsxs(a,{title:"KPIs e modelagem em estrela",subtitle:"Indicadores com semáforo e a estrutura ideal de modelo.",difficulty:"avancado",timeToRead:"7 min",children:[e.jsx("h2",{children:"Modelo estrela (recap)"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Tabela Fato</strong> no centro (Vendas, Pedidos)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Dimensões</strong> ao redor (Calendário, Produtos, Clientes, Lojas)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Relacionamentos 1:N saem das dimensões para a fato"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Evite snowflake (dimensão ligando outra dimensão)"}})]}),e.jsx("h2",{children:"Criar KPI no Power Pivot"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Selecione a medida em Power Pivot"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Botão direito → <strong>Criar KPI</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Defina: Valor de meta (medida ou número fixo)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Limites: ex: <70% vermelho, 70-90% amarelo, ≥90% verde"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Em TD, o KPI aparece com ícone (semáforo, setas, estrela)"}})]}),e.jsx("h2",{children:"Padrão de medidas"}),e.jsx(o,{language:"text",code:`-- Base
Vendas         = SUM( Vendas[Valor] )
Custo          = SUMX( Vendas ; Vendas[Qtd] * RELATED(Produtos[CustoUnit]) )

-- Derivadas
Lucro          = [Vendas] - [Custo]
Margem %       = DIVIDE( [Lucro] ; [Vendas] )

-- Meta
Meta Vendas    = SUM( Metas[Valor] )
Atingimento %  = DIVIDE( [Vendas] ; [Meta Vendas] )`}),e.jsx(s,{type:"tip",title:"Pasta de Medidas",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Em Power Pivot, crie uma tabela auxiliar 'Medidas' (vazia) e mova todas as medidas pra lá. Fica organizado e fácil de achar."}})})]})}export{i as default};
