import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DividirTexto() {
  return (
    <PageContainer title="DIVIDIRTEXTO — split em uma fórmula" subtitle="Quebra texto em várias colunas/linhas por delimitador." difficulty="intermediario" timeToRead="5 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=DIVIDIRTEXTO( texto ; col_delim ; [linha_delim] ; [ignorar_vazias] ; [diferenciar] ; [preencher_com] )`} />
      <h2>Exemplos</h2>
      <CodeBlock language="text" code={`=DIVIDIRTEXTO( "maçã,banana,uva" ; "," )
   → derrama em 3 colunas

=DIVIDIRTEXTO( "1;2;3¶4;5;6" ; ";" ; "¶" )
   → matriz 2×3 (¶ é só símbolo - use CARACT(10) para Alt+Enter)

=DIVIDIRTEXTO( "a,,b,c" ; "," ; ; VERDADEIRO )
   → ignora vazios → {"a";"b";"c"}`} />
      <h2>Caso real — separar nomes</h2>
      <CodeBlock language="text" code={`Em A: "Maria da Silva Souza"

=DIVIDIRTEXTO(A1;" ")  →  Maria | da | Silva | Souza
=ÍNDICE(DIVIDIRTEXTO(A1;" ");1;1)             primeiro nome
=PEGAR(DIVIDIRTEXTO(A1;" ");-1)               último sobrenome`} />
    </PageContainer>
  );
}
