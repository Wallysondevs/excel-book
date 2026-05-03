import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as s}from"./AlertBox-BTEjDUYQ.js";function r(){return a.jsxs(o,{title:"DAX Básico",subtitle:"Data Analysis Expressions: a linguagem de medidas do Power Pivot e Power BI.",difficulty:"avancado",timeToRead:"10 min",children:[a.jsx("h2",{children:"DAX vs Fórmula tradicional"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"Trabalha com <strong>tabelas inteiras e contextos</strong>, não com células."}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Usa o <strong>modelo de dados</strong> e seus relacionamentos."}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Resulta em <strong>medidas</strong> (calculadas em tempo real conforme filtros) ou <strong>colunas calculadas</strong>."}})]}),a.jsx("h2",{children:"Criar uma medida"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Janela Power Pivot → área de cálculo embaixo da tabela. Ou na pivot, <strong>Análise → Medidas → Nova Medida</strong>."}}),a.jsx(e,{language:"text",code:`Total Vendas := SUM(tblVendas[Total])

  Quantidade := COUNTROWS(tblVendas)

  Ticket Médio := DIVIDE([Total Vendas]; [Quantidade]; 0)

  Vendas SP := CALCULATE([Total Vendas]; tblVendas[Estado] = "SP")`}),a.jsx("h2",{children:"CALCULATE — a função mestra"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"<code>CALCULATE</code> avalia uma expressão modificando o contexto de filtro. É a função central do DAX."}}),a.jsx(e,{language:"text",code:`Vendas Pago := CALCULATE([Total Vendas]; tblVendas[Status]="Pago")

  % do Total :=
  DIVIDE(
      [Total Vendas];
      CALCULATE([Total Vendas]; ALL(tblVendas))
  )`}),a.jsx("h2",{children:"Inteligência de tempo (precisa de tabela calendário)"}),a.jsx(e,{language:"text",code:`Vendas YTD :=
  TOTALYTD([Total Vendas]; tblCalendario[Data])

  Vendas MTD :=
  TOTALMTD([Total Vendas]; tblCalendario[Data])

  Mesmo período ano anterior :=
  CALCULATE([Total Vendas]; SAMEPERIODLASTYEAR(tblCalendario[Data]))

  Crescimento YoY :=
  DIVIDE([Total Vendas] - [Mesmo período ano anterior]; [Mesmo período ano anterior])`}),a.jsx("h2",{children:"Iteradores: SUMX, AVERAGEX"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Funções terminadas em X percorrem linha a linha:"}}),a.jsx(e,{language:"text",code:"Receita Bruta := SUMX(tblVendas; tblVendas[Qtd] * tblVendas[Preço])"}),a.jsx(s,{type:"warning",title:"Medidas vs colunas calculadas",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Use <strong>medidas</strong> sempre que possível — elas são recalculadas dinamicamente. Colunas calculadas ocupam espaço e são fixas após o load."}})})]})}export{r as default};
