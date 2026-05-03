import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Hyperlinks() {
  return (
    <PageContainer title="Hyperlinks dentro e fora da pasta" subtitle="Link para célula, planilha, arquivo, web ou e-mail." difficulty="iniciante" timeToRead="4 min">
      <h2>Função HYPERLINK</h2>
      <CodeBlock language="text" code={`=HYPERLINK( destino ; texto_amigável )

=HYPERLINK( "https://example.com" ; "Visite!" )
=HYPERLINK( "mailto:contato@empresa.com?subject=Olá" ; "Enviar e-mail" )

' Pular para outra célula:
=HYPERLINK( "#Plan2!A1" ; "Ir para Plan2" )

' Abrir arquivo:
=HYPERLINK( "C:\\dados\\anexo.pdf" ; "Abrir PDF" )`} />
      <h2>Inserir interativo</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>K</kbd> abre o assistente" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipos: arquivo/web | local na pasta | novo documento | e-mail" }} />
      </ul>
      <h2>Sumário automático</h2>
      <CodeBlock language="text" code={`Em Plan1 'Sumário', liste os nomes das planilhas e ao lado:
=HYPERLINK( "#'" & A2 & "'!A1" ; "Ir →" )

→ vira navegação rápida em pasta com 50 planilhas`} />
    </PageContainer>
  );
}
