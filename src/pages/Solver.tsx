import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Solver() {
    return (
      <PageContainer title="Solver" subtitle="Otimização com múltiplas variáveis e restrições." difficulty="avancado" timeToRead="9 min">
        <h2>O que é?</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Suplemento Solver</strong> resolve problemas de otimização: maximizar lucro, minimizar custo, encontrar a mistura ideal — respeitando restrições. Ative em <strong>Arquivo → Opções → Suplementos → Solver</strong>." }} />
      <h2>Componentes</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Função objetivo:</strong> a célula a ser maximizada, minimizada ou igualada a um valor." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Variáveis (células ajustáveis):</strong> o que o Solver pode mexer." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Restrições:</strong> condições que não podem ser violadas." }} />
      </ul>
      <h2>Métodos disponíveis</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>GRG Não-linear</strong> — problemas suaves, várias variáveis (padrão)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Simplex LP</strong> — programação linear (rápido, ótimo global)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Evolutionary</strong> — problemas não-suaves, com cláusulas SE." }} />
      </ul>
      <h2>Exemplo: mix de produtos</h2>
      <CodeBlock language="text" code={`Quantidades de A e B (variáveis):  C2, C3
  Lucro unitário:                     D2=20, D3=30
  Lucro total (objetivo, maximizar):  =SOMARPRODUTO(C2:C3; D2:D3)

  Restrições:
    C2 >= 0   e   C3 >= 0
    C2 + C3 <= 100   (capacidade total)
    2*C2 + 5*C3 <= 300  (matéria-prima)`} />
      <AlertBox type="tip" title="Salvar cenários">
        <span dangerouslySetInnerHTML={{ __html: "Após resolver, o Solver oferece <strong>Salvar Cenário</strong> para guardar a solução no Gerenciador de Cenários." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  