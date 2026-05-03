import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function s(){return e.jsxs(a,{title:"Power Query — Parâmetros e funções em M",subtitle:"Reaproveite consultas variando entradas (caminho, ano, filial).",difficulty:"avancado",timeToRead:"6 min",children:[e.jsx("h2",{children:"Parâmetros"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Página Inicial → Gerenciar Parâmetros → Novo</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Tipo: Text/Number/Date e valor padrão"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Use no código M: <code>= Folder.Files(Pasta)</code> onde <code>Pasta</code> é o parâmetro"}})]}),e.jsx("h2",{children:"Função em M"}),e.jsx(o,{language:"text",code:`(ano as number) =>
let
    fonte = Excel.Workbook(File.Contents("C:\\dados\\vendas_" & Number.ToText(ano) & ".xlsx")),
    tabela = fonte{[Item="Vendas",Kind="Sheet"]}[Data]
in
    tabela

→ Use: =fnVendas(2025)`}),e.jsx("h2",{children:"Combinar arquivos com função"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Quando você combina arquivos de pasta, o Power Query cria automaticamente uma função 'Transformar Arquivo de Exemplo' e aplica em cada arquivo. Edite essa função para customizar o tratamento de TODOS os arquivos."}})]})}export{s as default};
