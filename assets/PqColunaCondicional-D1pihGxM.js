import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function i(){return e.jsxs(a,{title:"Power Query — Coluna Condicional e Personalizada",subtitle:"SE/CASO de Power Query com clique e Linguagem M.",difficulty:"intermediario",timeToRead:"6 min",children:[e.jsx("h2",{children:"Coluna Condicional (sem código)"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Adicionar Coluna → Coluna Condicional</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Defina: SE [coluna] = X então 'Resultado' senão 'Outro'"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Adicione vários SE empilhados"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Equivalente a SE.MÚLTIPLO no Excel"}})]}),e.jsx("h2",{children:"Coluna Personalizada (Linguagem M)"}),e.jsx(o,{language:"text",code:`= if [Status] = "A" then "Aprovado"
  else if [Status] = "R" then "Reprovado"
  else "Pendente"

= [Quantidade] * [PrecoUnit]
= Text.Upper([Cidade])
= Date.Year([DataVenda])
= Date.AddMonths([Data], 3)
= Number.Round([Valor], 2)
= List.Max({[Meta1], [Meta2], [Meta3]})`}),e.jsx("h2",{children:"Coluna a partir de exemplos"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Adicionar Coluna → Coluna de Exemplos</strong>. Digite 1-2 resultados e o Power Query infere a fórmula M sozinho. Ótimo para extrair, formatar texto e juntar campos."}})]})}export{i as default};
