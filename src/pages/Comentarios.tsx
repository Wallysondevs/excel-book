import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Comentarios() {
  return (
    <PageContainer title="Comentários, notas e @menções" subtitle="Conversação dentro da célula — moderno e antigo." difficulty="iniciante" timeToRead="4 min">
      <h2>Comentários (modernos)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Revisão → Novo Comentário</strong> ou <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Permite <strong>thread</strong> (responder)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>@nome</strong> notifica a pessoa por e-mail (no OneDrive)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use <strong>Resolver</strong> para arquivar a conversa" }} />
      </ul>
      <h2>Notas (antigas)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Revisão → Notas → Nova Nota</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Caixa amarela tradicional, sem thread" }} />
        <li dangerouslySetInnerHTML={{ __html: "Útil para anotações pessoais que não precisam responder" }} />
      </ul>
      <AlertBox type="tip" title="Imprimir">
        <span dangerouslySetInnerHTML={{ __html: "Em Configurar Página → Planilha → Comentários, escolha 'Como exibido na planilha' ou 'No final da planilha' para incluir na impressão." }} />
      </AlertBox>
    </PageContainer>
  );
}
