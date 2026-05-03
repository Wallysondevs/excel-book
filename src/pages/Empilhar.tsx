import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Empilhar() {
  return (
    <PageContainer title="EMPILHARV / EMPILHARH / EXPANDIR / PEGAR" subtitle="Combine, redimensione e fatie matrizes facilmente." difficulty="intermediario" timeToRead="6 min">
      <h2>EMPILHARV / EMPILHARH</h2>
      <CodeBlock language="text" code={`=EMPILHARV( matriz1 ; matriz2 ; ... )    junta uma SOBRE a outra
=EMPILHARH( matriz1 ; matriz2 ; ... )    junta uma AO LADO da outra

Ex: consolidar listas de 3 filiais:
=EMPILHARV( filA[Cliente] ; filB[Cliente] ; filC[Cliente] )

→ depois envolva com ÚNICO/CLASSIFICAR:
=CLASSIFICAR( ÚNICO( EMPILHARV(filA[Cliente];filB[Cliente];filC[Cliente]) ) )`} />
      <h2>PEGAR / RETIRAR</h2>
      <CodeBlock language="text" code={`=PEGAR( matriz ; linhas ; [colunas] )
   negativo = pega do FIM

=PEGAR( tbl[Valor] ; 5 )       primeiros 5
=PEGAR( tbl[Valor] ; -5 )      últimos 5
=PEGAR( CLASSIFICAR(tbl;5;-1) ; 10 )   top 10 por valor

=RETIRAR( matriz ; linhas ; [colunas] )
   tira N linhas do início (negativo = do fim)`} />
      <h2>EXPANDIR</h2>
      <CodeBlock language="text" code={`=EXPANDIR( matriz ; linhas ; [colunas] ; [preencher] )

Útil para padronizar tamanho:
=EXPANDIR( vendas_jan ; 31 ; 1 ; 0 )
   força para 31 linhas, preenche faltantes com 0`} />
    </PageContainer>
  );
}
