import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as t}from"./CodeBlock-CbV_OQLb.js";function s(){return e.jsxs(o,{title:"Office Scripts (TypeScript no Excel)",subtitle:"A sucessora moderna do VBA — funciona no Excel Online.",difficulty:"avancado",timeToRead:"7 min",children:[e.jsx("h2",{children:"O que é"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Linguagem: <strong>TypeScript</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Executa em <strong>Excel Online</strong> (também Desktop com 365)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Editor com IntelliSense embutido na nuvem"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:'Usa <code>workbook.getWorksheet("Plan1")</code> em vez de <code>Worksheets("Plan1")</code>'}})]}),e.jsx("h2",{children:"Hello World"}),e.jsx(t,{language:"text",code:`function main(workbook: ExcelScript.Workbook) {
    let plan = workbook.getActiveWorksheet();
    plan.getRange("A1").setValue("Olá Excel!");
    plan.getRange("A2").setFormula("=HOJE()");
}`}),e.jsx("h2",{children:"Loop e formatação"}),e.jsx(t,{language:"text",code:`function main(workbook: ExcelScript.Workbook) {
    let plan = workbook.getActiveWorksheet();
    let dados = plan.getUsedRange().getValues();   // matriz JS

    for (let i = 1; i < dados.length; i++) {
        let valor = Number(dados[i][2]);
        if (valor > 1000) {
            plan.getCell(i, 2).getFormat().getFill().setColor("yellow");
        }
    }
}`}),e.jsx("h2",{children:"Acessar Tabelas"}),e.jsx(t,{language:"text",code:`let tabela = workbook.getTable("tblVendas");
let cabec = tabela.getHeaderRowRange().getValues()[0];
let linhas = tabela.getRangeBetweenHeaderAndTotal().getValues();

tabela.addRow(-1, ["Ana", "2025-12-01", 1500]);   // adiciona no fim`}),e.jsx("h2",{children:"Vantagens vs VBA"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Funciona no Excel Online e Mac</strong> — VBA não"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Power Automate</strong> chama scripts diretamente"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Sintaxe moderna</strong> (await, async, classes)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Sem GUI/UserForms</strong> — para isso, ainda precisa de VBA"}})]})]})}export{s as default};
