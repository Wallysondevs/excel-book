import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function UnirTexto() {
  return (
    <PageContainer title="UNIRTEXTO e CONCAT" subtitle="Junte intervalos com delimitador, ignorando vazios." difficulty="iniciante" timeToRead="4 min">
      <h2>CONCAT</h2>
      <CodeBlock language="text" code={`=CONCAT( A1:A10 )
   → "Maria" & "João" & "Pedro" & ...   (sem separador, sem pular vazios)`} />
      <h2>UNIRTEXTO (TEXTJOIN) — o melhor</h2>
      <CodeBlock language="text" code={`=UNIRTEXTO( delim ; ignorar_vazias ; texto1 ; texto2 ; ... )

=UNIRTEXTO( ", " ; VERDADEIRO ; A1:A10 )
   → "Maria, João, Pedro" (pula vazios)

=UNIRTEXTO( CARACT(10) ; VERDADEIRO ; tblItens[Descrição] )
   → cada item em uma linha (Alt+Enter visual)`} />
      <h2>Combinado com FILTRO</h2>
      <CodeBlock language="text" code={`Lista de produtos do cliente "Ana", separados por vírgula:
=UNIRTEXTO( ", " ; VERDADEIRO ;
   FILTRO(tbl[Produto] ; tbl[Cliente]="Ana") )`} />
    </PageContainer>
  );
}
