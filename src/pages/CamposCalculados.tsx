import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CamposCalculados() {
    return (
      <PageContainer title="Campos e Itens Calculados" subtitle="Adicionar fórmulas dentro da Tabela Dinâmica." difficulty="avancado" timeToRead="7 min">
        <h2>Campo Calculado vs Item Calculado</h2>
      <ul>
        <li><strong>Campo Calculado:</strong> nova "coluna" baseada em outras colunas (ex: Margem = Receita - Custo).</li>
        <li><strong>Item Calculado:</strong> nova "linha" agrupando itens existentes (ex: Sudeste = SP+RJ+MG+ES).</li>
      </ul>
      <h2>Criar Campo Calculado</h2>
      <p>Clique na pivot → <strong>Análise de Tabela Dinâmica → Campos, Itens e Conjuntos → Campo Calculado</strong>.</p>
      <CodeBlock language="text" code={`Nome: Margem
  Fórmula: = Receita - Custo

  Ou margem percentual:
  Fórmula: = (Receita - Custo) / Receita`} />
      <h2>Criar Item Calculado</h2>
      <p>Clique no <strong>cabeçalho de um campo</strong> (ex: Estado) → mesmo menu → Item Calculado.</p>
      <CodeBlock language="text" code={`Nome: Sudeste
  Fórmula: = SP + RJ + MG + ES`} />
      <AlertBox type="warning" title="Limitações">
        Campos calculados não funcionam com campos que tenham contagens ou agregações distintas. Para análises mais sofisticadas, use o <strong>Power Pivot</strong> com DAX.
      </AlertBox>
      </PageContainer>
    );
  }
  