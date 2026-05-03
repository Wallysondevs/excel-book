import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RastrearPrecedentes() {
  return (
    <PageContainer title="Auditoria de fórmulas" subtitle="Setas que mostram quem alimenta quem na sua planilha." difficulty="intermediario" timeToRead="5 min">
      <h2>Atalhos da auditoria</h2>
      <CodeBlock language="text" code={`Ctrl + [        ir para precedente direto (origem)
Ctrl + ]        ir para dependente direto (quem usa)
Ctrl + Shift + [   todos os precedentes
Ctrl + Shift + ]   todos os dependentes
Ctrl + acento grave      alterna mostrar fórmulas / valores`} />
      <h2>Setas visuais</h2>
      <p dangerouslySetInnerHTML={{ __html: "Aba <strong>Fórmulas → Auditoria de Fórmulas</strong>:" }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Rastrear Precedentes</strong> — setas azuis vindo das células-fonte" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Rastrear Dependentes</strong> — setas saindo para quem usa esta" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Remover Setas</strong> — apaga a visualização" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Mostrar Fórmulas</strong> — toggle entre fórmula e resultado" }} />
      </ul>
      <h2>Caso prático</h2>
      <CodeBlock language="text" code={`Você abre uma planilha herdada e a célula H47 mostra um número estranho.
1. Selecione H47
2. Ctrl + [ → pula para a 1ª referência
3. Ctrl + Shift + [ → mostra setas para TODAS as fontes
4. Olhe a árvore — encontre a célula errada na origem`} />
      <AlertBox type="tip" title="Setas vermelhas">
        <span dangerouslySetInnerHTML={{ __html: "Setas vermelhas indicam que a fórmula tem ERRO. Setas tracejadas indicam que a fonte está em outra planilha/pasta." }} />
      </AlertBox>
    </PageContainer>
  );
}
