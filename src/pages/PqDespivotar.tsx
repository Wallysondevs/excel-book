import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqDespivotar() {
  return (
    <PageContainer title="Power Query — Pivotar e Despivotar" subtitle="Converta entre formato 'matricial' e 'longo' (tidy data)." difficulty="intermediario" timeToRead="6 min">
      <h2>Despivotar (unpivot)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Transforma colunas em linhas. Essencial para Tabela Dinâmica e BI." }} />
      <CodeBlock language="text" code={`ANTES (largo, ruim para BI):
   Cliente  Jan   Fev   Mar
   Ana      100   120   150
   João      80    90   110

DEPOIS (longo, ideal):
   Cliente  Mês   Valor
   Ana      Jan   100
   Ana      Fev   120
   Ana      Mar   150
   João     Jan    80
   João     Fev    90
   João     Mar   110`} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione as colunas a despivotar (Jan, Fev, Mar)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Botão direito → <strong>Transformar Outras Colunas em Linhas</strong>" }} />
      </ul>
      <h2>Pivotar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Caminho inverso. Selecione coluna de categoria → <strong>Transformar → Coluna Dinâmica</strong>. Escolha coluna de valores." }} />
      <AlertBox type="tip" title="Use SEMPRE despivotar">
        <span dangerouslySetInnerHTML={{ __html: "BI precisa de dados 'tidy'. Se um relatório vier em formato matricial, despivote antes de qualquer análise." }} />
      </AlertBox>
    </PageContainer>
  );
}
