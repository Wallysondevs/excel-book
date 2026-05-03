import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Referencias() {
    return (
      <PageContainer title="Referências (Relativa, Absoluta, Mista)" subtitle="$A$1, A$1, $A1, A1 — entendendo o $ que muda tudo." difficulty="iniciante" timeToRead="8 min">
        <h2>Por que existem 4 tipos?</h2>
      <p>Quando você arrasta uma fórmula, o Excel <strong>ajusta as referências automaticamente</strong>. Às vezes isso é o que queremos, às vezes não. O cifrão (<code>$</code>) trava o que vier na frente dele.</p>
      <CodeBlock language="text" code={`Tipo       | Exemplo  | Coluna  | Linha
-----------+----------+---------+--------
Relativa   |  A1      | muda    | muda
Absoluta   |  \$A\$1    | trava   | trava
Mista      |  \$A1     | trava   | muda
Mista      |  A\$1     | muda    | trava`} />
      <AlertBox type="tip" title="Atalho indispensável: F4">
        Com o cursor sobre uma referência na barra de fórmulas, pressione <code>F4</code> repetidamente para alternar: A1 → $A$1 → A$1 → $A1 → A1.
      </AlertBox>
      <h2>Exemplo: tabuada</h2>
      <p>Construir uma tabuada 1×1 a 10×10 com uma única fórmula. Linha 1 tem 1..10, coluna A tem 1..10. Em B2:</p>
      <CodeBlock language="text" code={`=\$A2 * B\$1
        ↑      ↑
   trava A   trava 1

Arrasta para B2:K11 e está pronta a tabuada inteira.`} />
      <h2>Exemplo: aplicar uma alíquota</h2>
      <CodeBlock language="text" code={`A1: 10%        ← imposto fixo
B2: 100        ← valor
C2: =B2*\$A\$1   → 10
Arrasta C2 para baixo: \$A\$1 NÃO muda, B2 vira B3, B4...`} />
      <h2>Referência a outra planilha ou pasta</h2>
      <CodeBlock language="text" code={`=Janeiro!A10                  → A10 da planilha Janeiro
='Vendas 2026'!B5             → planilha com espaço no nome
=[Outra.xlsx]Plan1!C3         → outra pasta de trabalho aberta`} />
      <h2>Referência 3D</h2>
      <p>Soma a mesma célula em várias planilhas:</p>
      <CodeBlock language="text" code={`=SOMA(Jan:Dez!B5)
       ↑       ↑
   primeira  última planilha`} />
      </PageContainer>
    );
  }
  