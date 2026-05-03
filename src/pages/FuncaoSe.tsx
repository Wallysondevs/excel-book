import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function FuncaoSe() {
    return (
      <PageContainer title="Função SE" subtitle="A condicional mais importante do Excel — e como aninhar." difficulty="iniciante" timeToRead="10 min">
        <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=SE( teste_lógico ; valor_se_verdadeiro ; valor_se_falso )

  =SE(A2>=7; "Aprovado"; "Reprovado")
  =SE(B2="SP"; B2*1,18; B2*1,12)
  =SE(C2=""; ""; C2*1,1)`} />
      <h2>Aninhando SE</h2>
      <p dangerouslySetInnerHTML={{ __html: "Você pode colocar um SE dentro de outro para criar várias faixas:" }} />
      <CodeBlock language="text" code={`=SE(A2>=9; "A";
     SE(A2>=7; "B";
     SE(A2>=5; "C";
     SE(A2>=3; "D"; "F"))))`} />
      <AlertBox type="warning" title="SE aninhado fica confuso!">
        <span dangerouslySetInnerHTML={{ __html: "Acima de 3 níveis, prefira <strong>SES</strong>, <strong>PROCV</strong> com correspondência aproximada, ou <strong>PROC</strong>." }} />
      </AlertBox>
      <h2>SES — múltiplas condições (Excel 2019+)</h2>
      <CodeBlock language="text" code={`=SES(A2>=9; "A";
         A2>=7; "B";
         A2>=5; "C";
         A2>=3; "D";
         VERDADEIRO; "F")`} />
      <h2>SE.ERRO e SE.NÃO.DISP</h2>
      <p dangerouslySetInnerHTML={{ __html: "Encapsulam fórmulas que podem dar erro:" }} />
      <CodeBlock language="text" code={`=SE.ERRO(A2/B2; 0)
  =SE.ERRO(PROCV(...); "Não encontrado")
  =SE.NÃO.DISP(PROCV(...); "Cód. inválido")    → captura só #N/D`} />
      <h2>Casos clássicos</h2>
      <CodeBlock language="text" code={`Bônus de vendas (acima de R\$ 10k ganha 5%):
  =SE(B2>10000; B2*0,05; 0)

  Status de prazo:
  =SE(HOJE()>D2; "Atrasado"; "Em dia")

  Texto vazio se zero:
  =SE(A2=0; ""; A2)`} />
      <h2>ALTERNAR — quando há lista de casos</h2>
      <CodeBlock language="text" code={`=ALTERNAR(A2;
      "SP"; "São Paulo";
      "RJ"; "Rio de Janeiro";
      "MG"; "Minas Gerais";
      "outro estado")`} />
      </PageContainer>
    );
  }
  