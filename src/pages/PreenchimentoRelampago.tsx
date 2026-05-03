import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PreenchimentoRelampago() {
  return (
    <PageContainer title="Preenchimento Relâmpago (Flash Fill)" subtitle="O Excel aprende padrões observando 1 ou 2 exemplos seus." difficulty="iniciante" timeToRead="4 min">
      <h2>Como funciona</h2>
      <p dangerouslySetInnerHTML={{ __html: "Digite o resultado desejado em uma ou duas linhas. O Excel detecta o padrão e sugere o resto da coluna. Aceite com <kbd>Enter</kbd> ou force com <kbd>Ctrl</kbd>+<kbd>E</kbd>." }} />
      <h2>Exemplos clássicos</h2>
      <CodeBlock language="text" code={`A                          B (você digita)        depois Ctrl+E
Maria Silva Souza          Maria                  → preenche
joao.silva@empresa.com.br  Joao Silva             → preenche
(11) 98765-4321            +5511987654321         → preenche
2025-12-31                 31/12/2025             → preenche
"Produto 123 - R\$ 45,90"   123                    → preenche`} />
      <h2>Quando NÃO funciona</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Padrões muito ambíguos (precisa de 2+ exemplos)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando há linhas vazias entre o exemplo e os dados" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando você quer fórmula viva (Flash Fill produz texto estático)" }} />
      </ul>
      <AlertBox type="tip" title="Diferença para fórmula">
        <span dangerouslySetInnerHTML={{ __html: "Flash Fill é texto fixo. Se a coluna fonte mudar, o resultado NÃO atualiza. Para isso use <code>EXT.TEXTO</code>, <code>TEXTOANTES</code>, <code>TEXTODEPOIS</code> ou <code>DIVIDIRTEXTO</code>." }} />
      </AlertBox>
    </PageContainer>
  );
}
