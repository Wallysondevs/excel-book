import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Desloc() {
  return (
    <PageContainer title="DESLOC (OFFSET) — intervalo dinâmico" subtitle="Construa referências que mudam de forma e tamanho." difficulty="avancado" timeToRead="6 min">
      <h2>Sintaxe</h2>
      <CodeBlock language="text" code={`=DESLOC( ref ; deslocar_linhas ; deslocar_colunas ; [altura] ; [largura] )

=DESLOC(A1; 4; 2)              → C5 (4 linhas abaixo, 2 colunas à direita)
=DESLOC(A1; 0; 0; 10; 1)       → A1:A10
=DESLOC(A1; 0; 0; CONT.NÚM(A:A); 1)  → cresce conforme dados`} />
      <h2>Caso clássico — gráfico dinâmico</h2>
      <CodeBlock language="text" code={`Sempre pegar os ÚLTIMOS 12 meses:
Nome:     UltimosMeses
Refere-se a: =DESLOC(Dados!\$B\$2; CONT.NÚM(Dados!\$B:\$B)-12; 0; 12; 1)

Use esse Nome como série do gráfico.`} />
      <h2>Cuidados</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Volátil</strong> — recalcula a cada mudança da pasta (lento em planilhas grandes)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Em pastas modernas, prefira <strong>Tabelas (Ctrl+T)</strong> + <strong>arrays dinâmicos</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Para gráficos dinâmicos modernos: use Tabela + Tabela Dinâmica + Slicer" }} />
      </ul>
    </PageContainer>
  );
}
