import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AvaliarFormula() {
  return (
    <PageContainer title="Avaliar Fórmula passo a passo" subtitle="Veja o Excel calcular cada pedacinho da sua fórmula." difficulty="intermediario" timeToRead="4 min">
      <h2>Quando usar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Quando uma fórmula longa retorna um resultado errado e você não consegue identificar onde. <strong>Fórmulas → Avaliar Fórmula</strong> mostra a expressão e tem um botão <em>Avaliar</em> que substitui a parte sublinhada pelo resultado parcial." }} />
      <h2>Exemplo</h2>
      <CodeBlock language="text" code={`=SE( SOMA(B2:B10) > MÉDIA(C2:C10) * 1,2 ; "ALTO" ; "BAIXO" )

Passo 1: clique Avaliar  → SE( 1500 > MÉDIA(C2:C10) * 1,2 ; "ALTO" ; "BAIXO" )
Passo 2: clique Avaliar  → SE( 1500 > 100 * 1,2 ; "ALTO" ; "BAIXO" )
Passo 3: clique Avaliar  → SE( 1500 > 120 ; "ALTO" ; "BAIXO" )
Passo 4: clique Avaliar  → SE( VERDADEIRO ; "ALTO" ; "BAIXO" )
Passo 5: clique Avaliar  → "ALTO"`} />
      <h2>Atalho rápido (sem abrir janela)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Selecione a parte da fórmula na barra → <kbd>F9</kbd>. Mostra o resultado daquela parte. <kbd>Esc</kbd> volta sem alterar; <kbd>Enter</kbd> substitui (cuidado!)." }} />
      <AlertBox type="warning" title="F9 destrói a fórmula">
        <span dangerouslySetInnerHTML={{ __html: "Se você apertar Enter depois do F9, o pedaço calculado vira número fixo. Sempre use Esc para cancelar." }} />
      </AlertBox>
    </PageContainer>
  );
}
