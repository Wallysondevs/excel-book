import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxVar() {
  return (
    <PageContainer title="DAX — VAR e RETURN" subtitle="Variáveis em DAX — código mais rápido e legível." difficulty="avancado" timeToRead="5 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`Medida =
VAR Vendas    = [Total Vendas]
VAR VendasLY  = CALCULATE( [Total Vendas] ; SAMEPERIODLASTYEAR(Calendário[Date]) )
VAR Diff      = Vendas - VendasLY
RETURN
   IF( Vendas > 0 ; DIVIDE(Diff ; VendasLY) ; BLANK() )`} />
      <h2>Vantagens</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Performance</strong>: o motor calcula cada VAR uma única vez" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Legibilidade</strong>: nome explica intenção" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Debug</strong>: é só trocar o RETURN para inspecionar uma VAR" }} />
      </ul>
      <AlertBox type="tip" title="Sempre use VAR">
        <span dangerouslySetInnerHTML={{ __html: "Em qualquer medida com mais de uma operação, use VAR. Vai ser mais rápido e MUITO mais fácil de manter." }} />
      </AlertBox>
    </PageContainer>
  );
}
