import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FimMes() {
  return (
    <PageContainer title="FIMMÊS, DATAM, DIA.DA.SEMANA" subtitle="Manipulação de datas no fim/início do mês." difficulty="intermediario" timeToRead="5 min">
      <h2>FIMMÊS</h2>
      <CodeBlock language="text" code={`=FIMMÊS( data ; meses )    → último dia do mês N depois (ou antes)

=FIMMÊS( HOJE() ; 0 )      → último dia deste mês
=FIMMÊS( HOJE() ; -1 )+1   → primeiro dia DESTE mês
=FIMMÊS( HOJE() ; 1 )      → último dia do próximo mês`} />
      <h2>DATAM</h2>
      <CodeBlock language="text" code={`=DATAM( data ; meses )    → mesma data, N meses depois

=DATAM( "31/01/2025" ; 1 )   → 28/02/2025 (ajusta automático)
=DATAM( HOJE() ; -12 )       → mesma data, 1 ano atrás`} />
      <h2>DIA.DA.SEMANA</h2>
      <CodeBlock language="text" code={`=DIA.DA.SEMANA( data ; tipo )

tipo 1: dom=1, sáb=7  (padrão)
tipo 2: seg=1, dom=7  ← use este no BR
tipo 3: seg=0, dom=6
tipo 11..17: variações`} />
      <h2>Numerar semanas</h2>
      <CodeBlock language="text" code={`=NÚMSEMANA( data ; tipo )           padrão americano (dom inicia)
=NÚMSEMANAISO( data )                ISO 8601 (seg inicia, dia 4 = semana 1)
                                     ← use esta para padrão BR`} />
    </PageContainer>
  );
}
