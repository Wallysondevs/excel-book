import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as s}from"./AlertBox-BTEjDUYQ.js";function l(){return a.jsxs(o,{title:"Tabela Dinâmica",subtitle:"Resuma, agrupe e analise milhares de linhas em segundos.",difficulty:"intermediario",timeToRead:"12 min",children:[a.jsx("h2",{children:"Conceito"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Tabela Dinâmica (PivotTable)</strong> é a ferramenta mais poderosa de análise do Excel. Você pega uma base de linhas e a transforma em resumo cruzando dimensões — tudo arrastando campos."}}),a.jsx("h2",{children:"Pré-requisitos da base"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"Tabela <strong>plana</strong> (uma observação por linha)."}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Cabeçalhos únicos na primeira linha, sem células mescladas."}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Sem linhas vazias intermediárias."}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Idealmente formate como Tabela (Ctrl+T) antes — assim a Pivot expande automaticamente."}})]}),a.jsx("h2",{children:"Criar uma"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Selecione a base → <strong>Inserir → Tabela Dinâmica</strong>. Escolha o destino (nova planilha é o padrão). Aparece o painel <strong>Campos da Tabela Dinâmica</strong> com 4 áreas:"}}),a.jsx(e,{language:"text",code:`┌──────────────────┐
  │  Filtros         │  ← filtra a tabela toda
  ├──────────────────┤
  │  Colunas         │  ← campos viram colunas
  ├──────────────────┤
  │  Linhas          │  ← campos viram linhas
  ├──────────────────┤
  │  Valores         │  ← o que calcular (soma, média...)
  └──────────────────┘`}),a.jsx("h2",{children:"Exemplo: vendas por estado e mês"}),a.jsx(e,{language:"text",code:`Base: Data | Estado | Vendedor | Total

  Linhas:    Estado
  Colunas:   Mês (clique direito em Data → Agrupar → Meses)
  Valores:   Total (Soma)
  Filtros:   Vendedor`}),a.jsx("h2",{children:"Mudar agregação"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Botão direito no campo de Valores → <strong>Resumir Valores Por</strong>: Soma, Contagem, Média, Máx, Mín, Produto, Desvio Padrão, Variância."}}),a.jsx("h2",{children:"Mostrar valores como"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Mesmo menu → <strong>Mostrar Valores Como</strong>: % do total, % do total da linha/coluna, diferença em relação a, classificação, número acumulado."}}),a.jsx(e,{language:"text",code:`% do total geral         → quanto cada estado representa
  % do total da coluna     → 100% por mês, distribui entre estados
  Diferença de             → comparar com mês anterior
  Classificação            → ranking 1, 2, 3...`}),a.jsx(s,{type:"tip",title:"Atualizar dados",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Quando a base muda, clique direito na pivot → <strong>Atualizar</strong>, ou <code>Alt + F5</code>. Se a base for Tabela (Ctrl+T), novas linhas aparecem automaticamente após Atualizar."}})}),a.jsx("h2",{children:"Layout e estilo"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Aba <strong>Design</strong> da pivot: layout (Compacto / Esboço / Tabular), subtotais, totais gerais, linhas em faixas, estilos."}})]})}export{l as default};
