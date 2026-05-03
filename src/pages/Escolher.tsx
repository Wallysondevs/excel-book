import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Escolher() {
  return (
    <PageContainer title="ESCOLHER, ESCOLHERLINS, ESCOLHERCOLS" subtitle="Pegue elementos por índice — sem PROCV." difficulty="intermediario" timeToRead="5 min">
      <h2>ESCOLHER (clássico)</h2>
      <CodeBlock language="text" code={`=ESCOLHER( índice ; valor1 ; valor2 ; ... )

=ESCOLHER( DIA.DA.SEMANA(HOJE();2) ; "seg";"ter";"qua";"qui";"sex";"sáb";"dom" )

→ retorna o nome do dia atual em pt-BR`} />
      <h2>ESCOLHERLINS / ESCOLHERCOLS (modernos)</h2>
      <CodeBlock language="text" code={`=ESCOLHERLINS( matriz ; lin1 ; lin2 ; ... )
=ESCOLHERCOLS( matriz ; col1 ; col2 ; ... )

Reordenar colunas:
=ESCOLHERCOLS( tblFunc ; 3 ; 1 ; 5 )
   → coluna 3, depois 1, depois 5

Pegar última linha:
=ESCOLHERLINS( tbl ; -1 )

Top 3 + bottom 3:
=ESCOLHERLINS( tbl_ord ; 1 ; 2 ; 3 ; -3 ; -2 ; -1 )`} />
    </PageContainer>
  );
}
