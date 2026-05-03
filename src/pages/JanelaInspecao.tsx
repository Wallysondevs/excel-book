import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function JanelaInspecao() {
  return (
    <PageContainer title="Janela de Inspeção" subtitle="Monitore células-chave de qualquer planilha em uma janela flutuante." difficulty="intermediario" timeToRead="4 min">
      <h2>Para que serve</h2>
      <p dangerouslySetInnerHTML={{ __html: "Você está editando a planilha 'Cálculos' e precisa ver o resultado da célula 'Resumo!H10' o tempo todo. A Janela de Inspeção mostra essa célula sem trocar de aba." }} />
      <h2>Como usar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas → Janela de Inspeção</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Clique <strong>Adicionar Inspeção…</strong> e selecione as células" }} />
        <li dangerouslySetInnerHTML={{ __html: "A janela mostra: pasta, planilha, nome (se tiver), célula, valor, fórmula" }} />
        <li dangerouslySetInnerHTML={{ __html: "Reordene clicando no cabeçalho; remova com <strong>Excluir Inspeção</strong>" }} />
      </ul>
      <h2>Truque</h2>
      <p dangerouslySetInnerHTML={{ __html: "Encaixe a janela no topo ou laterais arrastando — ela vira parte da interface e nunca atrapalha." }} />
    </PageContainer>
  );
}
