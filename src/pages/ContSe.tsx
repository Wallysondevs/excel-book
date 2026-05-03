import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ContSe() {
    return (
      <PageContainer title="CONT.SE & CONT.SES" subtitle="Contagens condicionais — uma ou múltiplas condições." difficulty="intermediario" timeToRead="6 min">
        <h2>CONT.SE — uma condição</h2>
      <CodeBlock language="text" code={`=CONT.SE( intervalo ; critério )

  =CONT.SE(A:A; "SP")              → quantos "SP"
  =CONT.SE(B:B; ">10000")          → quantos > 10k
  =CONT.SE(C:C; "*@gmail.com")     → emails do Gmail
  =CONT.SE(A:A; A2)                → quantas vezes A2 aparece`} />
      <h2>CONT.SES — múltiplas condições</h2>
      <CodeBlock language="text" code={`=CONT.SES( intervalo1 ; crit1 ; intervalo2 ; crit2 ; ... )

  =CONT.SES(tblPed[Estado]; "SP";
            tblPed[Status]; "Pago";
            tblPed[Valor]; ">500")`} />
      <h2>Casos práticos</h2>
      <CodeBlock language="text" code={`Encontrar duplicatas (1 = único, >1 = repetido):
  B2: =CONT.SE(A:A; A2)

  Numerar ocorrências:
  B2: =CONT.SE(A\$2:A2; A2)
  "Caneta", "Caneta", "Lápis" → 1, 2, 1

  % por categoria:
  =CONT.SE(A:A; "Concluído") / CONT.VALORES(A:A)`} />
      <AlertBox type="tip" title="ÚNICO + CONT.SE = ranking">
        <span dangerouslySetInnerHTML={{ __html: "Combine <code>=ÚNICO(A:A)</code> com <code>CONT.SE</code> para listar valores únicos com sua frequência — ranking instantâneo." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  