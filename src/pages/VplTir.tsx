import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VplTir() {
  return (
    <PageContainer title="VPL, TIR, MTIR, XVPL, XTIR — análise de investimentos" subtitle="Avalie projetos com fluxos de caixa irregulares." difficulty="avancado" timeToRead="7 min">
      <h2>VPL — Valor Presente Líquido</h2>
      <CodeBlock language="text" code={`=VPL( taxa ; valor1 ; valor2 ; ... ) + investimento_inicial

ATENÇÃO: o investimento INICIAL fica fora!
   Ano 0  -100.000   ← fora da função
   Ano 1   30.000
   Ano 2   40.000
   Ano 3   50.000

=VPL( 10% ; B2:B4 ) + B1     onde B1 = -100000`} />
      <h2>TIR — Taxa Interna de Retorno</h2>
      <CodeBlock language="text" code={`=TIR( fluxos )
   ↑ aqui o investimento inicial entra no intervalo (negativo)

Decisão:
   TIR > custo de capital  → projeto viável
   TIR < custo de capital  → rejeitar`} />
      <h2>MTIR — TIR modificada</h2>
      <p dangerouslySetInnerHTML={{ __html: "TIR clássica assume reinvestimento à própria TIR (irreal). MTIR permite definir taxa de reinvestimento e financiamento separadamente." }} />
      <CodeBlock language="text" code={`=MTIR( fluxos ; taxa_financ ; taxa_reinv )`} />
      <h2>XVPL e XTIR — datas irregulares</h2>
      <CodeBlock language="text" code={`Para fluxos em datas não periódicas:
=XVPL( taxa ; valores ; datas )
=XTIR( valores ; datas ; [estimativa] )

→ ideais para projetos reais (não tudo no fim do mês)`} />
    </PageContainer>
  );
}
