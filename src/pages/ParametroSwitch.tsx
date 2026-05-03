import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ParametroSwitch() {
  return (
    <PageContainer title="PARÂMETRO (SWITCH)" subtitle="Quando a comparação é exata, use SWITCH no lugar de SE.MÚLTIPLO." difficulty="intermediario" timeToRead="4 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=PARÂMETRO( valor ; caso1 ; resultado1 ; caso2 ; resultado2 ; ... ; [padrão] )`} />
      <h2>Exemplo</h2>
      <CodeBlock language="text" code={`=PARÂMETRO( B2 ;
   "A" ; "Aprovado" ;
   "R" ; "Reprovado" ;
   "P" ; "Pendente" ;
   "Status desconhecido"
)

Equivalente em SE:
=SE(B2="A";"Aprovado";SE(B2="R";"Reprovado";SE(B2="P";"Pendente";"Status desconhecido")))`} />
      <h2>Quando preferir SE.MÚLTIPLO</h2>
      <p dangerouslySetInnerHTML={{ __html: "PARÂMETRO só compara igualdade. Para faixas (>=, <), use <code>SE.MÚLTIPLO</code>." }} />
    </PageContainer>
  );
}
