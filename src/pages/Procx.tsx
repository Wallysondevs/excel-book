import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Procx() {
    return (
      <PageContainer title="PROCX (XLOOKUP)" subtitle="A substituição moderna do PROCV — flexível, rápida e sem pegadinhas." difficulty="intermediario" timeToRead="10 min">
        <h2>Sintaxe completa</h2>
      <CodeBlock language="text" code={`=PROCX( valor_procurado ;
          matriz_pesquisa ;
          matriz_retorno ;
          [se_não_encontrado] ;
          [modo_correspondência] ;
          [modo_pesquisa] )`} />
      <h2>Por que substitui PROCV?</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Procura em <strong>qualquer coluna</strong> (esquerda ou direita)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Argumentos separados para pesquisa e retorno — não usa número de coluna." }} />
        <li dangerouslySetInnerHTML={{ __html: "Tem <strong>4º argumento embutido</strong> para erro (substitui <code>SE.ERRO</code>)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Pesquisa exata é o padrão (não precisa lembrar do FALSO)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Retorna referência (pode receber intervalo inteiro)." }} />
      </ul>
      <h2>Exemplo básico</h2>
      <CodeBlock language="text" code={`=PROCX(B2; tblProd[Código]; tblProd[Nome])
  =PROCX(B2; tblProd[Código]; tblProd[Preço]; "não encontrado")`} />
      <h2>Buscar à esquerda</h2>
      <CodeBlock language="text" code={`Antes (PROCV impossível):
  | Nome  | Código |
  | Maria |  101   |
  | João  |  102   |

  =PROCX(102; tblA[Código]; tblA[Nome]) → "João"`} />
      <h2>Modos de correspondência</h2>
      <CodeBlock language="text" code={`0  ou omitido    → exata (padrão)
  -1                → exata ou próximo MENOR
   1                → exata ou próximo MAIOR
   2                → curinga * e ?`} />
      <h2>Modos de pesquisa</h2>
      <CodeBlock language="text" code={` 1 ou omitido    → primeiro ao último
  -1               → último ao primeiro (último valor encontrado)
   2               → busca binária crescente (rápido)
  -2               → busca binária decrescente`} />
      <p dangerouslySetInnerHTML={{ __html: "<strong>Dica:</strong> use <code>-1</code> para encontrar a <strong>última ocorrência</strong> (ex: o pedido mais recente de um cliente)." }} />
      <h2>Retornar várias colunas</h2>
      <CodeBlock language="text" code={`=PROCX(B2; tblProd[Código]; tblProd[[Nome]:[Preço]])
          ↑                          ↑
     procura na coluna Código  retorna intervalo Nome..Preço

  Resultado se espalha (spill) por 2 colunas automaticamente.`} />
      <AlertBox type="success" title="Faça migração!">
        <span dangerouslySetInnerHTML={{ __html: "Substitua todos os PROCV das suas planilhas por PROCX. O ganho de robustez compensa enormemente." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  