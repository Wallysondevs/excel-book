import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function NavegacaoCelulas() {
  return (
    <PageContainer title="Navegação eficiente entre células" subtitle="Pare de usar o mouse — voe pela planilha com o teclado." difficulty="iniciante" timeToRead="5 min">
      <h2>Atalhos essenciais</h2>
      <CodeBlock language="text" code={`Ctrl + ↑ ↓ ← →    pular para borda do bloco / próxima célula vazia
Ctrl + End         última célula usada
Ctrl + Home        volta para A1
Ctrl + Page Up/Dn  alterna entre planilhas
F5 ou Ctrl + Y     "Ir para" — digite endereço (ex: AA500)
Ctrl + G + Especial seleciona vazias, fórmulas, constantes...`} />
      <h2>Caixa de Nome</h2>
      <p dangerouslySetInnerHTML={{ __html: "À esquerda da barra de fórmulas — digite um endereço (<code>Z100</code>) ou nome (<code>vendas</code>) e <kbd>Enter</kbd> pula direto. Aceita também <code>Plan2!A1</code>." }} />
      <h2>Selecionar com teclado</h2>
      <CodeBlock language="text" code={`Shift + ↑↓←→            estende seleção
Ctrl + Shift + ↑↓←→     estende até a borda
Ctrl + Shift + End      até última célula usada
Ctrl + A                tabela ou tudo (2× = tudo)
Ctrl + Espaço           coluna inteira
Shift + Espaço          linha inteira`} />
      <AlertBox type="tip" title="Teste agora">
        <span dangerouslySetInnerHTML={{ __html: "Abra qualquer planilha e tente Ctrl+End. Se levar até uma célula muito além dos seus dados, há linhas/colunas 'sujas' — apague-as e salve. Isso reduz drasticamente o tamanho do arquivo." }} />
      </AlertBox>
    </PageContainer>
  );
}
