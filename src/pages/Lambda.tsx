import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Lambda() {
  return (
    <PageContainer title="LAMBDA — crie suas próprias funções" subtitle="Encapsule lógica em fórmula reutilizável, sem VBA." difficulty="avancado" timeToRead="8 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=LAMBDA( parametro1 ; parametro2 ; ... ; calculo )( argumento1 ; argumento2 ; ... )

Teste rápido (chamada inline):
=LAMBDA( a ; b ; a^2 + b^2 )( 3 ; 4 )    →  25`} />
      <h2>Salvando como função nomeada</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas → Gerenciador de Nomes → Novo</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Nome: <code>HIPOTENUSA</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Refere-se a: <code>=LAMBDA(a;b; RAIZ(a^2+b^2))</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Agora em qualquer célula: <code>=HIPOTENUSA(3;4)</code> → 5" }} />
      </ul>
      <h2>Exemplo útil — DataPorExtenso</h2>
      <CodeBlock language="text" code={`Nome: DATAPOREXTENSO
=LAMBDA( d ;
  TEXTO(d ; "d") & " de " &
  TEXTO(d ; "mmmm") & " de " &
  TEXTO(d ; "aaaa")
)

Uso:  =DATAPOREXTENSO(HOJE())  →  "5 de março de 2025"`} />
      <h2>Recursão (sem loops)</h2>
      <CodeBlock language="text" code={`Nome: REVERTERTEXTO
=LAMBDA( txt ;
  SE( NÚM.CARACT(txt) <= 1 ;
      txt ;
      DIREITA(txt;1) & REVERTERTEXTO(ESQUERDA(txt;NÚM.CARACT(txt)-1))
  )
)

=REVERTERTEXTO("Excel")  →  "lecxE"`} />
      <AlertBox type="warning" title="Compatibilidade">
        <span dangerouslySetInnerHTML={{ __html: "Pasta com LAMBDA aberta em Excel sem suporte mostra <code>#NOME?</code>. Avise quem vai abrir." }} />
      </AlertBox>
    </PageContainer>
  );
}
