import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SeErro() {
  return (
    <PageContainer title="SE.ERRO e SEERRO — capturando exceções" subtitle="Substitui qualquer erro por um valor padrão." difficulty="iniciante" timeToRead="4 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=SEERRO( valor ; valor_se_erro )

=SEERRO( PROCV(B2;tab;3;0) ; "não encontrado" )
=SEERRO( A1/B1 ; 0 )`} />
      <h2>SE.ERRO vs SEND</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>SEERRO</strong> — captura QUALQUER erro (#N/D, #DIV/0!, #VALOR!…)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>SENDIPS</strong> (SE.NÃO.DISP / IFNA) — captura SÓ #N/D" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use SENDIPS quando quiser saber se há problema de tipo (#VALOR!) mas tratar só ausência (#N/D)" }} />
      </ul>
      <h2>Diferença prática</h2>
      <CodeBlock language="text" code={`=SEERRO(PROCV(B2;tab;3;0);"") 
   → silencia até erros de tipo

=SE.NÃO.DISP(PROCV(B2;tab;3;0);"")
   → silencia só "não achou"; se tab for inválida, ainda dá #REF!`} />
      <AlertBox type="warning" title="Cuidado com excesso">
        <span dangerouslySetInnerHTML={{ __html: "Envolver tudo em SEERRO esconde bugs reais. Use só na camada final, não dentro de cada cálculo intermediário." }} />
      </AlertBox>
    </PageContainer>
  );
}
