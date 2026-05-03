import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function IndiceCorresp() {
    return (
      <PageContainer title="ÍNDICE + CORRESP" subtitle="A dupla flexível que dominou o Excel antes do PROCX." difficulty="avancado" timeToRead="10 min">
        <h2>Por que aprender se já tem PROCX?</h2>
      <p dangerouslySetInnerHTML={{ __html: "Compatibilidade — funcionam desde Excel 2003. Você ainda encontra muito em planilhas legadas e empresas em versões perpétuas." }} />
      <h2>ÍNDICE — pega valor por linha/coluna</h2>
      <CodeBlock language="text" code={`=ÍNDICE( matriz ; número_linha ; [número_coluna] )

  =ÍNDICE(A1:C100; 5; 2)    → célula B5
  =ÍNDICE(A1:A100; 7)       → A7`} />
      <h2>CORRESP — descobre a posição</h2>
      <CodeBlock language="text" code={`=CORRESP( valor_procurado ; matriz_pesquisa ; [tipo] )

  Tipos:  0 = exata
          1 = próximo menor (matriz crescente)
         -1 = próximo maior (matriz decrescente)

  =CORRESP("Maria"; A1:A100; 0)    → 7  (Maria está na linha 7)`} />
      <h2>Combinando</h2>
      <CodeBlock language="text" code={`=ÍNDICE( tblProd[Preço];
          CORRESP(B2; tblProd[Código]; 0))

  Tradução: "ache a posição de B2 na coluna Código,
            e retorne o valor naquela posição da coluna Preço".`} />
      <h2>Busca cruzada (linha + coluna)</h2>
      <CodeBlock language="text" code={`Tabela: produtos nas linhas, meses nas colunas.

  =ÍNDICE( B2:M100;
          CORRESP("Caneta"; A2:A100; 0);
          CORRESP("Mar"; B1:M1; 0))`} />
      <AlertBox type="tip" title="Performance">
        <span dangerouslySetInnerHTML={{ __html: "ÍNDICE+CORRESP é mais rápido que PROCV em bases grandes porque você só pesquisa a coluna necessária, não a tabela inteira." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  