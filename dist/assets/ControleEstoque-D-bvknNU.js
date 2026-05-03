import{j as o}from"./index-COQxS6Ql.js";import{P as e}from"./PageContainer-D1JhFxkd.js";import{C as t}from"./CodeBlock-CbV_OQLb.js";function s(){return o.jsxs(e,{title:"Modelo: Controle de Estoque",subtitle:"Entradas, saídas, saldo atual e ponto de reposição.",difficulty:"intermediario",timeToRead:"6 min",children:[o.jsx("h2",{children:"Tabelas"}),o.jsx(t,{language:"text",code:`tblProdutos:   SKU | Nome | Categoria | EstoqueMín | CustoUnit
tblMovim:      Data | SKU | Tipo (E/S) | Qtd | Obs`}),o.jsx("h2",{children:"Saldo atual"}),o.jsx(t,{language:"text",code:`=SOMASES(tblMovim[Qtd]; tblMovim[SKU]; A2; tblMovim[Tipo]; "E")
 -SOMASES(tblMovim[Qtd]; tblMovim[SKU]; A2; tblMovim[Tipo]; "S")`}),o.jsx("h2",{children:"Alerta de reposição"}),o.jsx(t,{language:"text",code:`Coluna Status:
=SE(SaldoAtual <= EstoqueMín; "🔴 REPOR"; "🟢 OK")

Formatação Condicional → Texto que contém "REPOR" → fundo vermelho`}),o.jsx("h2",{children:"Curva ABC"}),o.jsx(t,{language:"text",code:`Em uma TD: Soma de Vendas por SKU, ordenada decrescente
% acumulado:  =Soma(linha) / Soma(total)
Classifique:
   ≤ 80%   → A
   ≤ 95%   → B
   restante → C`})]})}export{s as default};
