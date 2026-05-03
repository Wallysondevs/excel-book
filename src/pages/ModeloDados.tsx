import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ModeloDados() {
  return (
    <PageContainer title="Adicionar ao Modelo de Dados" subtitle="O passo entre Tabela Dinâmica simples e Power Pivot." difficulty="intermediario" timeToRead="6 min">
      <h2>O que é</h2>
      <p dangerouslySetInnerHTML={{ __html: "É um motor analítico embutido (mesma engine do Power BI) que guarda múltiplas tabelas relacionadas dentro do arquivo Excel." }} />
      <h2>Quando usar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Quando você quer Tabela Dinâmica usando <strong>2 ou mais tabelas relacionadas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando precisa de <strong>contagem distinta</strong> (ÚNICO em TD)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando vai escrever fórmulas DAX para medidas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando o volume de dados está perto de 1 milhão de linhas" }} />
      </ul>
      <h2>Adicionar tabela ao modelo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Tabela (Ctrl+T) já criada em qualquer planilha" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Tabela Dinâmica → Adicionar este dado ao Modelo de Dados</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Repita para outras tabelas" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dados → Gerenciar Modelo de Dados</strong> abre o Power Pivot" }} />
      </ul>
      <h2>Contagem distinta</h2>
      <CodeBlock language="text" code={`Sem modelo: Contagem de Cliente conta REPETIÇÕES
Com modelo: aparece "Contagem Distinta" → conta clientes únicos`} />
    </PageContainer>
  );
}
