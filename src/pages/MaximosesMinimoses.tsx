import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MaximosesMinimoses() {
  return (
    <PageContainer title="MÁXIMOSES, MÍNIMOSES, MÉDIASES" subtitle="Estatística com critérios — irmãos do SOMASES." difficulty="intermediario" timeToRead="5 min">
      <h2>Sintaxe (mesma ideia que SOMASES)</h2>
      <CodeBlock language="text" code={`=MÁXIMOSES( max_intervalo ; crit_int1 ; crit1 ; crit_int2 ; crit2 ; ... )
=MÍNIMOSES( min_intervalo ; ... )
=MÉDIASES( méd_intervalo ; ... )`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`Maior venda do vendedor "Ana":
=MÁXIMOSES( tbl[Valor] ; tbl[Vendedor] ; "Ana" )

Menor venda em SP no mês 1:
=MÍNIMOSES( tbl[Valor] ;
   tbl[UF] ; "SP" ;
   tbl[Mês] ; 1 )

Ticket médio acima de R\$ 500:
=MÉDIASES( tbl[Valor] ; tbl[Valor] ; ">500" )`} />
      <AlertBox type="tip" title="Curingas">
        <span dangerouslySetInnerHTML={{ __html: "Os critérios aceitam <code>*</code> (qualquer texto) e <code>?</code> (1 caractere). Ex: <code>tbl[Cliente] ; \"Sup*\"</code> pega Supermarket, Super, Supremo…" }} />
      </AlertBox>
    </PageContainer>
  );
}
