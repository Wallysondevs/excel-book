import{j as e}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function s(){return e.jsxs(t,{title:"Linguagem M — fundamentos",subtitle:"O que está por trás de cada clique no Power Query.",difficulty:"avancado",timeToRead:"8 min",children:[e.jsx("h2",{children:"Estrutura geral"}),e.jsx(o,{language:"text",code:`let
    Fonte = Excel.CurrentWorkbook(){[Name="tblVendas"]}[Content],
    Tipos = Table.TransformColumnTypes(Fonte, {{"Data", type date}, {"Valor", Currency.Type}}),
    Filtrado = Table.SelectRows(Tipos, each [Valor] > 1000),
    Adicionada = Table.AddColumn(Filtrado, "Mês", each Date.Month([Data]))
in
    Adicionada`}),e.jsx("h2",{children:"Tipos de dados"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>text</code>, <code>number</code>, <code>date</code>, <code>datetime</code>, <code>logical</code>, <code>duration</code>, <code>binary</code>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>list</code> = {1,2,3} | <code>record</code> = [a=1, b=2] | <code>table</code>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>type table [Col1=text, Col2=number]</code>"}})]}),e.jsx("h2",{children:"Funções comuns"}),e.jsx(o,{language:"text",code:`Table.SelectRows(t, each [col] > 0)        WHERE
Table.SelectColumns(t, {"Cliente","Valor"}) SELECT
Table.RemoveColumns(t, {"Comentário"})
Table.RenameColumns(t, {{"old","new"}})
Table.Group(t, "UF", {"Total", each List.Sum([Valor])})
Table.Sort(t, {{"Data", Order.Descending}})
Table.Distinct(t)

Text.Trim, Text.Upper, Text.Replace, Text.Contains
Date.Year, Date.AddDays, Date.AddMonths
Number.Round, Number.Abs

List.Sum, List.Average, List.Max, List.First`}),e.jsx("h2",{children:"Editor avançado"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Página Inicial → Editor Avançado</strong> mostra o código M completo. É onde você edita à mão coisas que a interface não permite."}}),e.jsx(a,{type:"tip",title:"Case sensitive",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"M diferencia maiúsculas/minúsculas. <code>each [Valor]</code> ≠ <code>each [valor]</code>."}})})]})}export{s as default};
