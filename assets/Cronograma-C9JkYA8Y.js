import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function i(){return a.jsxs(o,{title:"Cronograma com gráfico de Gantt",subtitle:"Linha do tempo de projetos sem usar MS Project.",difficulty:"intermediario",timeToRead:"6 min",children:[a.jsx("h2",{children:"Tabela base"}),a.jsx(e,{language:"text",code:`Tarefa         Início      Duração (dias)    Responsável
Levantamento   05/01/2025  10                Ana
Design         15/01/2025  20                João
Desenvolv.     04/02/2025  40                Pedro
Testes         16/03/2025  15                Ana
Deploy         31/03/2025  3                 Ana`}),a.jsx("h2",{children:"Construir Gantt com gráfico de barras empilhadas"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"Selecione Tarefa, Início, Duração"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Inserir → Barras 2D Empilhadas</strong>"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Mude a 1ª série (Início) para SEM preenchimento e SEM borda → vira espaço"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Inverta a ordem do eixo (Y) para 1ª tarefa em cima"}})]}),a.jsx("h2",{children:"Versão moderna com fórmula"}),a.jsx(e,{language:"text",code:`Em uma matriz onde colunas = datas (1 a N), linhas = tarefas:
=SE(E(coluna_data >= Início; coluna_data < Início+Duração); "■"; "")

Aplique formatação condicional para colorir e tem o Gantt em texto.`})]})}export{i as default};
