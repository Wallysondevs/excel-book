import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Let() {
  return (
    <PageContainer title="LET — variáveis dentro da fórmula" subtitle="Calcule uma vez, use várias vezes — fórmula mais rápida e legível." difficulty="intermediario" timeToRead="6 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=LET( nome1 ; valor1 ; nome2 ; valor2 ; ... ; resultado )`} />
      <h2>Por que usar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Performance</strong>: cada cálculo intermediário roda só uma vez." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Legibilidade</strong>: dá nome às partes (em vez de repetir <code>SOMA(B2:B100)</code> 5×)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Manutenção</strong>: mude o intervalo em 1 lugar." }} />
      </ul>
      <h2>Antes vs depois</h2>
      <CodeBlock language="text" code={`ANTES (lento e ilegível):
=SE( SOMA(B2:B100) > 1000 ;
     SOMA(B2:B100) * 0,1 ;
     SOMA(B2:B100) * 0,05 ) + SOMA(B2:B100)

DEPOIS:
=LET(
   total ; SOMA(B2:B100) ;
   bonus ; SE(total > 1000 ; total * 0,1 ; total * 0,05) ;
   total + bonus
)`} />
      <h2>LET com PROCX</h2>
      <CodeBlock language="text" code={`=LET(
  busca ; PROCX(B2 ; tbl[Cód] ; tbl[[Nome]:[Preço]]) ;
  nome  ; ÍNDICE(busca;1;1) ;
  preco ; ÍNDICE(busca;1;2) ;
  nome & " - R\$ " & TEXTO(preco;"#.##0,00")
)`} />
      <AlertBox type="tip" title="Identação">
        <span dangerouslySetInnerHTML={{ __html: "Quebrar fórmula em linhas com Alt+Enter dentro da barra de fórmulas é fundamental quando se usa LET." }} />
      </AlertBox>
    </PageContainer>
  );
}
