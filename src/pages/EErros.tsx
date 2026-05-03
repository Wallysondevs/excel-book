import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function EErros() {
  return (
    <PageContainer title="É.NÚM, ÉTEXTO, ÉCEL, ÉERROS — funções de teste" subtitle="Família 'É' que verifica o que tem dentro de uma célula." difficulty="intermediario" timeToRead="5 min">
      <h2>Catálogo</h2>
      <CodeBlock language="text" code={`ÉNÚM(x)        VERDADEIRO se x é número
ÉTEXTO(x)      VERDADEIRO se é texto
ÉCEL.VAZIA(x)  VERDADEIRO se está vazia
ÉLÓGICO(x)     VERDADEIRO se VERDADEIRO/FALSO
ÉFÓRMULA(x)    VERDADEIRO se a célula tem fórmula
ÉERROS(x)      VERDADEIRO se há QUALQUER erro
ÉERRO(x)       VERDADEIRO se há erro EXCETO #N/D
É.NÃO.DISP(x)  VERDADEIRO se é #N/D
ÉPAR / ÉÍMPAR  testa paridade
ÉREF(x)        VERDADEIRO se é referência válida`} />
      <h2>Caso prático</h2>
      <CodeBlock language="text" code={`Verificar se PROCV achou:
=SE( É.NÃO.DISP(PROCV(B2;tab;3;0)) ; "novo cliente" ; "já cadastrado" )

Marcar entrada inválida:
=SE( ÉNÚM(A1) ; "ok" ; "valor inválido" )

Contar quantas células de uma faixa têm erro:
=SOMARPRODUTO( --ÉERROS(B2:B100) )`} />
      <AlertBox type="tip" title="Truque do --">
        <span dangerouslySetInnerHTML={{ __html: "O <code>--</code> antes de uma matriz lógica converte VERDADEIRO/FALSO em 1/0 para que SOMARPRODUTO consiga somar." }} />
      </AlertBox>
    </PageContainer>
  );
}
