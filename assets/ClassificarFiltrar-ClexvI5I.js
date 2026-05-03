import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function n(){return e.jsxs(o,{title:"Classificar e Filtrar",subtitle:"Sort, AutoFilter e Filtro Avançado.",difficulty:"iniciante",timeToRead:"8 min",children:[e.jsx("h2",{children:"Classificar (Sort)"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Selecione qualquer célula da lista e <strong>Dados → Classificar</strong>. Excel detecta os cabeçalhos automaticamente."}}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Atalho rápido: A→Z (<code>Alt + A + S + A</code>) ou Z→A (<code>Alt + A + S + D</code>)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Múltiplos níveis: classificar por Estado, depois por Vendedor, depois por Data."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Por cor de célula ou cor de fonte (formatação condicional)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Lista personalizada: ordenar por Janeiro, Fevereiro... (não alfabética)."}})]}),e.jsx("h2",{children:"AutoFiltro"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Selecione célula da tabela e <strong>Dados → Filtro</strong> (ou <code>Ctrl + Shift + L</code>). Aparecem setinhas em cada cabeçalho. Tabelas (Ctrl+T) já vêm com filtro."}}),e.jsx(a,{language:"text",code:`Cliques na setinha:
  • Ordenação rápida
  • Filtros de texto: contém, começa com, igual...
  • Filtros de número: maior que, top 10, acima da média...
  • Filtros de data: este mês, último trimestre, ano passado...
  • Caixas de seleção para escolher valores específicos
  • Filtrar por cor`}),e.jsx("h2",{children:"Filtro Avançado"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Dados → Avançado</strong>. Permite filtros com regras complexas em outra área da planilha e copiar resultado para outro local. Suporta E (mesma linha) e OU (linhas diferentes)."}}),e.jsx(a,{language:"text",code:`Critérios em E10:F12:
  | Estado | Total |
  | SP     | >5000 |     ← E
  | RJ     | >3000 |     ← OU

  Resultado: SP com >5000  OU  RJ com >3000`}),e.jsx("h2",{children:"FILTRO (função dinâmica)"}),e.jsx(a,{language:"text",code:`=FILTRO(tblVendas; tblVendas[Estado]="SP")
  =FILTRO(A:C; (B:B>1000)*(C:C="Pago"); "Sem dados")

  * representa E,  + representa OU.`}),e.jsx(r,{type:"tip",title:"FILTRO + CLASSIFICAR + ÚNICO",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Combine: <code>=CLASSIFICAR(ÚNICO(FILTRO(A:A; B:B="SP"))) </code> — lista única e ordenada de SP.'}})})]})}export{n as default};
