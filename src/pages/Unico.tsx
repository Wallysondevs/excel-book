import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Unico() {
  return (
    <PageContainer title="ÚNICO — remova duplicados com fórmula" subtitle="Lista distinta sem mexer nos dados originais." difficulty="intermediario" timeToRead="5 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=ÚNICO( matriz ; [por_coluna] ; [exatamente_uma_vez] )

exatamente_uma_vez = VERDADEIRO retorna só itens
                     que aparecem APENAS UMA vez`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`Lista de cidades distintas:
=ÚNICO( tblV[Cidade] )

Combinações cliente+produto distintas:
=ÚNICO( tblV[[Cliente]:[Produto]] )

Clientes que compraram só uma vez:
=ÚNICO( tblV[Cliente] ; FALSO ; VERDADEIRO )

Lista classificada de UFs:
=CLASSIFICAR( ÚNICO(tblV[UF]) )`} />
      <h2>Padrão clássico: lista para validação dinâmica</h2>
      <CodeBlock language="text" code={`Em uma planilha auxiliar:
G1: =CLASSIFICAR( ÚNICO( tblV[Cliente] ) )

Na validação de dados (lista):
Origem: =Auxiliar!G1#
              ↑ o # faz a lista crescer sozinha`} />
      <AlertBox type="tip" title="ÚNICO ignora vazias?">
        <span dangerouslySetInnerHTML={{ __html: "NÃO. Vazios viram 0 (ou string vazia). Filtre antes: <code>=ÚNICO( FILTRO(col; col&\"\"&lt;&gt;\"\") )</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
