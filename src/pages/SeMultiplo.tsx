import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SeMultiplo() {
  return (
    <PageContainer title="SE.MÚLTIPLO (IFS) — adeus SE aninhado" subtitle="Vários testes lógicos sem virar pirâmide de parênteses." difficulty="intermediario" timeToRead="5 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=SE.MÚLTIPLO( cond1 ; valor1 ; cond2 ; valor2 ; ... ; VERDADEIRO ; padrão )`} />
      <h2>Antes vs depois</h2>
      <CodeBlock language="text" code={`ANTES (legibilidade horrível):
=SE(B2>=90;"A";SE(B2>=80;"B";SE(B2>=70;"C";SE(B2>=60;"D";"F"))))

DEPOIS:
=SE.MÚLTIPLO(
   B2>=90 ; "A" ;
   B2>=80 ; "B" ;
   B2>=70 ; "C" ;
   B2>=60 ; "D" ;
   VERDADEIRO ; "F"
)`} />
      <AlertBox type="warning" title="Sem ELSE explícito">
        <span dangerouslySetInnerHTML={{ __html: "Se nenhuma condição bater e você não tiver <code>VERDADEIRO ; padrão</code> no fim, retorna #N/D." }} />
      </AlertBox>
    </PageContainer>
  );
}
