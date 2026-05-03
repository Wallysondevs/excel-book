import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FormatoPersonalizado() {
  return (
    <PageContainer title="Formatos personalizados criativos" subtitle="Receitas prontas que parecem mágica." difficulty="intermediario" timeToRead="6 min">
      <h2>Telefone BR</h2>
      <CodeBlock language="text" code={`(00) 00000-0000        (11) 98765-4321
(00) 0000-0000         (11) 3456-7890`} />
      <h2>CEP, CPF, CNPJ</h2>
      <CodeBlock language="text" code={`00000-000              CEP   01310-100
000"."000"."000-00     CPF   123.456.789-01
00"."000"."000\\/0000-00 CNPJ 12.345.678/0001-90`} />
      <h2>Tamanho em bytes</h2>
      <CodeBlock language="text" code={`[<1024]0" B";[<1048576]0," KB";0,," MB"`} />
      <h2>Setas e bandeiras</h2>
      <CodeBlock language="text" code={`[Verde]"▲ "0%;[Vermelho]"▼ "0%;0%
[Verde]"●";[Vermelho]"●";"○"   (semáforo: positivo verde, negativo vermelho, zero círculo)`} />
      <h2>Esconder valor de uma célula</h2>
      <CodeBlock language="text" code={`;;;
(três ponto-e-vírgulas — qualquer valor fica invisível, mas a célula ainda existe e é referenciada)`} />
      <AlertBox type="tip" title="Atalho">
        <span dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>1</kbd> abre Formatar Células direto na aba Número." }} />
      </AlertBox>
    </PageContainer>
  );
}
