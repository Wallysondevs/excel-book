import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function TextoAntesDepois() {
  return (
    <PageContainer title="TEXTOANTES e TEXTODEPOIS" subtitle="Fatie strings sem precisar contar caracteres." difficulty="intermediario" timeToRead="5 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=TEXTOANTES(  texto ; delimitador ; [ocorrência] ; [diferenciar_maiúsc] ; [match_modo] ; [se_não_achar] )
=TEXTODEPOIS( texto ; delimitador ; [ocorrência] ; ... )`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`=TEXTOANTES("João da Silva" ; " ")              → "João"
=TEXTODEPOIS("joao@empresa.com" ; "@")           → "empresa.com"
=TEXTOANTES("Produto-A-123" ; "-" ; -1)          → "Produto-A"
=TEXTODEPOIS("Produto-A-123" ; "-" ; -1)         → "123"
=TEXTOANTES(A1; "@" ; ; ; ; "sem @")             → fallback se não tiver

Múltiplos delimitadores:
=TEXTOANTES("a, b; c" ; {","\\;";"})           → "a"`} />
      <AlertBox type="tip" title="Substituem EXT.TEXTO/PROCURAR">
        <span dangerouslySetInnerHTML={{ __html: "Antes você precisava de <code>=ESQUERDA(A1; PROCURAR(\"@\";A1)-1)</code>. Hoje basta <code>=TEXTOANTES(A1;\"@\")</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
