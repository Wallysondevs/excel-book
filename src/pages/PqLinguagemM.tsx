import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqLinguagemM() {
  return (
    <PageContainer title="Linguagem M — fundamentos" subtitle="O que está por trás de cada clique no Power Query." difficulty="avancado" timeToRead="8 min">
      <h2>Estrutura geral</h2>
      <CodeBlock language="text" code={`let
    Fonte = Excel.CurrentWorkbook(){[Name="tblVendas"]}[Content],
    Tipos = Table.TransformColumnTypes(Fonte, {{"Data", type date}, {"Valor", Currency.Type}}),
    Filtrado = Table.SelectRows(Tipos, each [Valor] > 1000),
    Adicionada = Table.AddColumn(Filtrado, "Mês", each Date.Month([Data]))
in
    Adicionada`} />
      <h2>Tipos de dados</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>text</code>, <code>number</code>, <code>date</code>, <code>datetime</code>, <code>logical</code>, <code>duration</code>, <code>binary</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>list</code> = {1,2,3} | <code>record</code> = [a=1, b=2] | <code>table</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>type table [Col1=text, Col2=number]</code>" }} />
      </ul>
      <h2>Funções comuns</h2>
      <CodeBlock language="text" code={`Table.SelectRows(t, each [col] > 0)        WHERE
Table.SelectColumns(t, {"Cliente","Valor"}) SELECT
Table.RemoveColumns(t, {"Comentário"})
Table.RenameColumns(t, {{"old","new"}})
Table.Group(t, "UF", {"Total", each List.Sum([Valor])})
Table.Sort(t, {{"Data", Order.Descending}})
Table.Distinct(t)

Text.Trim, Text.Upper, Text.Replace, Text.Contains
Date.Year, Date.AddDays, Date.AddMonths
Number.Round, Number.Abs

List.Sum, List.Average, List.Max, List.First`} />
      <h2>Editor avançado</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Editor Avançado</strong> mostra o código M completo. É onde você edita à mão coisas que a interface não permite." }} />
      <AlertBox type="tip" title="Case sensitive">
        <span dangerouslySetInnerHTML={{ __html: "M diferencia maiúsculas/minúsculas. <code>each [Valor]</code> ≠ <code>each [valor]</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
