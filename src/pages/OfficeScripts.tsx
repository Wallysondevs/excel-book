import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function OfficeScripts() {
  return (
    <PageContainer title="Office Scripts (TypeScript no Excel)" subtitle="A sucessora moderna do VBA — funciona no Excel Online." difficulty="avancado" timeToRead="7 min">
      <h2>O que é</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Linguagem: <strong>TypeScript</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Executa em <strong>Excel Online</strong> (também Desktop com 365)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Editor com IntelliSense embutido na nuvem" }} />
        <li dangerouslySetInnerHTML={{ __html: "Usa <code>workbook.getWorksheet(\"Plan1\")</code> em vez de <code>Worksheets(\"Plan1\")</code>" }} />
      </ul>
      <h2>Hello World</h2>
      <CodeBlock language="text" code={`function main(workbook: ExcelScript.Workbook) {
    let plan = workbook.getActiveWorksheet();
    plan.getRange("A1").setValue("Olá Excel!");
    plan.getRange("A2").setFormula("=HOJE()");
}`} />
      <h2>Loop e formatação</h2>
      <CodeBlock language="text" code={`function main(workbook: ExcelScript.Workbook) {
    let plan = workbook.getActiveWorksheet();
    let dados = plan.getUsedRange().getValues();   // matriz JS

    for (let i = 1; i < dados.length; i++) {
        let valor = Number(dados[i][2]);
        if (valor > 1000) {
            plan.getCell(i, 2).getFormat().getFill().setColor("yellow");
        }
    }
}`} />
      <h2>Acessar Tabelas</h2>
      <CodeBlock language="text" code={`let tabela = workbook.getTable("tblVendas");
let cabec = tabela.getHeaderRowRange().getValues()[0];
let linhas = tabela.getRangeBetweenHeaderAndTotal().getValues();

tabela.addRow(-1, ["Ana", "2025-12-01", 1500]);   // adiciona no fim`} />
      <h2>Vantagens vs VBA</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Funciona no Excel Online e Mac</strong> — VBA não" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Power Automate</strong> chama scripts diretamente" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Sintaxe moderna</strong> (await, async, classes)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Sem GUI/UserForms</strong> — para isso, ainda precisa de VBA" }} />
      </ul>
    </PageContainer>
  );
}
