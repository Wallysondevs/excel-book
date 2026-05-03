import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CopiarColar() {
  return (
    <PageContainer title="Copiar, Colar e Colar Especial" subtitle="Domine o ato mais repetido do Excel." difficulty="iniciante" timeToRead="6 min">
      <h2>Atalhos básicos</h2>
      <CodeBlock language="text" code={`Ctrl + C        copiar
Ctrl + X        recortar
Ctrl + V        colar
Ctrl + Alt + V  COLAR ESPECIAL (a janela mágica)`} />
      <h2>Colar Especial — opções</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Valores</strong> — converte fórmulas em números (vital antes de enviar planilha)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Formatos</strong> — só formatação (cor, bordas, número)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas</strong> — fórmulas sem formatação" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Largura de colunas</strong> — copia largura sem o conteúdo" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Transpor</strong> — vira linha em coluna (e vice-versa)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Operação: Somar/Subtrair/Multiplicar/Dividir</strong> — aplica em uma área" }} />
      </ul>
      <h2>Truque: aumentar 10% de um intervalo</h2>
      <CodeBlock language="text" code={`1. Em uma célula vazia, digite 1,1
2. Ctrl+C nessa célula
3. Selecione a coluna de preços
4. Ctrl+Alt+V → Multiplicar → OK
PRONTO: todos os preços aumentaram 10%`} />
      <h2>Drag-and-drop com botão direito</h2>
      <p dangerouslySetInnerHTML={{ __html: "Arraste uma seleção segurando o <strong>botão direito</strong> do mouse. Ao soltar, aparece menu com: <em>Mover, Copiar, Copiar só valores, Copiar só formato, Vincular, Criar hyperlink</em>." }} />
      <AlertBox type="tip" title="Limpar formatação">
        <span dangerouslySetInnerHTML={{ __html: "Ctrl+Espaço seleciona a coluna; depois <kbd>Alt</kbd>+<kbd>H</kbd>+<kbd>E</kbd>+<kbd>F</kbd> limpa só a formatação mantendo conteúdo." }} />
      </AlertBox>
    </PageContainer>
  );
}
