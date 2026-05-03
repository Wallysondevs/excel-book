import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MapReduceScan() {
  return (
    <PageContainer title="MAP, REDUCE, SCAN, BYROW, BYCOL" subtitle="Programação funcional dentro do Excel." difficulty="avancado" timeToRead="8 min">
      <h2>Visão geral</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>MAP</code> — aplica LAMBDA a cada elemento" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>REDUCE</code> — acumula um único resultado" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>SCAN</code> — como REDUCE mas devolve cada estado intermediário" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>BYROW</code> / <code>BYCOL</code> — aplica em cada linha/coluna" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>MAKEARRAY</code> — gera matriz pelos índices (i,j)" }} />
      </ul>
      <h2>MAP — exemplos</h2>
      <CodeBlock language="text" code={`Quadrado de cada elemento:
=MAP( A1:A10 ; LAMBDA(x ; x^2) )

Combinar 2 colunas:
=MAP( A1:A10 ; B1:B10 ; LAMBDA(p;q ; p & " - " & q) )`} />
      <h2>REDUCE — soma manual</h2>
      <CodeBlock language="text" code={`=REDUCE( 0 ; A1:A10 ; LAMBDA(acum;x ; acum + x) )

(Equivalente a =SOMA(A1:A10) — mas mostra o conceito)

Maior valor:
=REDUCE( -1E300 ; A1:A10 ; LAMBDA(acum;x ; MÁXIMO(acum;x)) )`} />
      <h2>SCAN — saldo acumulado</h2>
      <CodeBlock language="text" code={`=SCAN( 0 ; A1:A10 ; LAMBDA(acum;x ; acum + x) )

→ retorna a coluna de soma cumulativa
   (ideal para fluxo de caixa: saldo após cada transação)`} />
      <h2>BYROW — média por linha</h2>
      <CodeBlock language="text" code={`=BYROW( B2:F100 ; LAMBDA(linha ; MÉDIA(linha)) )

→ devolve uma coluna com a média de cada linha`} />
      <h2>MAKEARRAY — tabuada</h2>
      <CodeBlock language="text" code={`=MAKEARRAY( 10 ; 10 ; LAMBDA(i;j ; i*j) )    matriz 10×10 multiplicação`} />
      <AlertBox type="tip" title="Combinando">
        <span dangerouslySetInnerHTML={{ __html: "Esses 5 + LAMBDA + LET formam um mini-sistema de programação. Você consegue resolver praticamente qualquer transformação de dados sem VBA." }} />
      </AlertBox>
    </PageContainer>
  );
}
