import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Bordas() {
  return (
    <PageContainer title="Bordas, preenchimento e alinhamento" subtitle="Os 3 ingredientes do design de planilha — sem exagero." difficulty="iniciante" timeToRead="4 min">
      <h2>Bordas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>&</kbd> — borda externa rápida" }} />
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>_</kbd> — remover bordas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Para bordas customizadas: <kbd>Ctrl</kbd>+<kbd>1</kbd> → Borda → escolha estilo, cor e clique nas posições" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use cor cinza claro em vez de preto puro — fica mais elegante" }} />
      </ul>
      <h2>Preenchimento (cor de fundo)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Use <strong>tons sutis</strong> para alternância de linhas (zebra)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Cores fortes só para destaque ou alerta" }} />
        <li dangerouslySetInnerHTML={{ __html: "Em Tabelas (Ctrl+T), zebra é automática" }} />
      </ul>
      <h2>Alinhamento</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Texto: alinhamento à esquerda. Números: à direita. Datas: à direita." }} />
        <li dangerouslySetInnerHTML={{ __html: "Cabeçalhos: centralizar e <strong>negrito</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quebrar texto automaticamente: <kbd>Alt</kbd>+<kbd>Enter</kbd> dentro da célula" }} />
        <li dangerouslySetInnerHTML={{ __html: "Indentar (sub-itens): botões de indentação na faixa Página Inicial" }} />
      </ul>
      <AlertBox type="tip" title="Sem grid, mais limpo">
        <span dangerouslySetInnerHTML={{ __html: "Em dashboards, vá em <strong>Exibir → desmarque Linhas de Grade</strong>. Fica com cara de relatório profissional." }} />
      </AlertBox>
    </PageContainer>
  );
}
