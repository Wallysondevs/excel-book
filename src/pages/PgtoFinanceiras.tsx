import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PgtoFinanceiras() {
  return (
    <PageContainer title="PGTO, NPER, TAXA, VP, VF — empréstimos e investimentos" subtitle="As 5 funções fundamentais de matemática financeira." difficulty="intermediario" timeToRead="7 min">
      <h2>Conceito</h2>
      <p dangerouslySetInnerHTML={{ __html: "Toda operação financeira tem 5 elementos: <strong>VP</strong> (valor presente), <strong>VF</strong> (valor futuro), <strong>TAXA</strong> (juros por período), <strong>NPER</strong> (número de períodos) e <strong>PGTO</strong> (parcela)." }} />
      <h2>PGTO — calcular parcela de empréstimo</h2>
      <CodeBlock language="text" code={`=PGTO( taxa ; nper ; vp ; [vf] ; [tipo] )

Empréstimo R\$ 50.000 em 36 meses, juros 1,8% ao mês:
=PGTO( 1,8% ; 36 ; -50000 )    → 1.913,42

(Sinal negativo no VP porque ENTRA dinheiro;
 PGTO retorna valor positivo de quanto você PAGA)`} />
      <h2>NPER — quantas parcelas?</h2>
      <CodeBlock language="text" code={`Quanto tempo para quitar 50.000 pagando 2.000 por mês a 2% am?
=NPER( 2% ; -2000 ; 50000 )    → 32,72 meses`} />
      <h2>TAXA — qual juros está embutido?</h2>
      <CodeBlock language="text" code={`Loja oferece "à vista 800 ou 12× de 90":
=TAXA( 12 ; -90 ; 800 )    → 4,8% ao mês  (CET ≈ 75% ao ano!)`} />
      <h2>VP e VF</h2>
      <CodeBlock language="text" code={`Quanto preciso aplicar HOJE para ter 100k em 5 anos a 0,8% am?
=VP( 0,8% ; 60 ; 0 ; -100000 )    → 61.890,00

Quanto terei se aplicar 500 todo mês por 10 anos a 0,7% am?
=VF( 0,7% ; 120 ; -500 )    → 95.700,00`} />
      <AlertBox type="warning" title="Convenção de sinais">
        <span dangerouslySetInnerHTML={{ __html: "O Excel usa sinais opostos para <em>entrada</em> e <em>saída</em> de caixa. Erro de sinal é a causa #1 de cálculos errados." }} />
      </AlertBox>
    </PageContainer>
  );
}
