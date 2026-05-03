import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Classificar() {
  return (
    <PageContainer title="CLASSIFICAR e CLASSIFICARPOR" subtitle="Ordene por fórmula — sem mexer nos dados de origem." difficulty="intermediario" timeToRead="5 min">
      <h2>CLASSIFICAR</h2>
      <CodeBlock language="text" code={`=CLASSIFICAR( matriz ; [coluna] ; [ordem] ; [por_coluna] )

ordem   1 = crescente (padrão), -1 = decrescente
por_coluna  FALSO (padrão) classifica linhas, VERDADEIRO classifica colunas`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`Lista alfabética de produtos:
=CLASSIFICAR( tblProd[Nome] )

Tabela ordenada por valor desc:
=CLASSIFICAR( tblV ; 5 ; -1 )      → coluna 5 (Valor) descendente`} />
      <h2>CLASSIFICARPOR</h2>
      <p dangerouslySetInnerHTML={{ __html: "Permite ordenar por uma coluna que não está no resultado." }} />
      <CodeBlock language="text" code={`=CLASSIFICARPOR( retorno ; chave1 ; ordem1 ; chave2 ; ordem2 ; ... )

Retornar só nomes ordenados pelo SALÁRIO:
=CLASSIFICARPOR( tblFunc[Nome] ; tblFunc[Salário] ; -1 )

Multi-critério:
=CLASSIFICARPOR( tbl ; tbl[UF]; 1 ; tbl[Valor]; -1 )`} />
    </PageContainer>
  );
}
