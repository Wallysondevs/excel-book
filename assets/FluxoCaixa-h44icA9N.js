import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function s(){return a.jsxs(o,{title:"Modelo: Fluxo de Caixa",subtitle:"Diário, mensal e projetado — 3 abas, 1 modelo.",difficulty:"intermediario",timeToRead:"7 min",children:[a.jsx("h2",{children:"Estrutura básica"}),a.jsx(e,{language:"text",code:`Colunas:  Data | Descrição | Categoria | Entrada | Saída | Saldo

Saldo (linha 2):  =D2 - E2
Saldo (linha n):  =F(n-1) + Dn - En

→ acumulado com SCAN (moderno):
=SCAN(0; (D2:D1000) - (E2:E1000); LAMBDA(s;v; s+v))`}),a.jsx("h2",{children:"Por categoria"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"Crie uma coluna Categoria com validação (Lista)"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Tabela Dinâmica: Categoria em Linhas, soma de Entrada-Saída em Valores"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Slicer por Mês para análise temporal"}})]}),a.jsx("h2",{children:"Projeção"}),a.jsx(e,{language:"text",code:`Aba "Recorrentes":  Categoria | Valor mensal | Início | Fim | Tipo

Aba "Projeção":  para cada mês futuro, soma os recorrentes ativos
=SOMARPRODUTO(
   (Recorrentes[Início] <= MesFinal) *
   (Recorrentes[Fim] >= MesFinal) *
   Recorrentes[Valor]
)`})]})}export{s as default};
