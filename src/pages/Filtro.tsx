import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Filtro() {
  return (
    <PageContainer title="FILTRO — filtre com fórmula" subtitle="Substitua filtros manuais por fórmula que recalcula sozinha." difficulty="intermediario" timeToRead="7 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=FILTRO( matriz ; incluir ; [se_vazio] )

matriz   o que retornar
incluir  vetor lógico (mesmo tamanho da matriz)
se_vazio o que mostrar se nada bater (opcional)`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`Vendas do vendedor "Ana":
=FILTRO( tblVendas ; tblVendas[Vendedor]="Ana" ; "sem registros" )

Vendas acima de R\$ 1000 em janeiro:
=FILTRO( tblV ; (tblV[Valor]>1000) * (MÊS(tblV[Data])=1) )

OU lógico (com soma):
=FILTRO( tblV ; (tblV[UF]="SP") + (tblV[UF]="RJ") )

Devolver só algumas colunas:
=FILTRO( tblV[[Cliente]:[Valor]] ; tblV[Vendedor]="Ana" )`} />
      <h2>Combinando com outras</h2>
      <CodeBlock language="text" code={`Top 5 maiores:
=CLASSIFICAR( FILTRO(tbl[Valor];tbl[Valor]>0) ; ; -1 )
   ↑ inverter ordem com -1
Pegar primeiros 5:
=PEGAR( CLASSIFICAR(...; ; -1) ; 5 )`} />
      <AlertBox type="tip" title="Substitua FILTRO/PROCV">
        <span dangerouslySetInnerHTML={{ __html: "Onde antes você usava <code>ÍNDICE+CORRESP</code> com matriz CSE, hoje basta <code>FILTRO</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
