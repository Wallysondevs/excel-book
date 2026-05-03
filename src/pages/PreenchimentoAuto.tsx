import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PreenchimentoAuto() {
  return (
    <PageContainer title="Preenchimento automático e séries" subtitle="Arraste a alça e o Excel adivinha — quase sempre." difficulty="iniciante" timeToRead="4 min">
      <h2>A alça de preenchimento</h2>
      <p dangerouslySetInnerHTML={{ __html: "É o quadradinho verde no canto inferior direito da seleção. Clique e arraste para repetir/extender. Duplo-clique preenche até a última linha da coluna ao lado." }} />
      <h2>Séries que o Excel reconhece</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Números: <code>1, 2</code> → 3, 4, 5… / <code>2, 4</code> → 6, 8, 10…" }} />
        <li dangerouslySetInnerHTML={{ __html: "Datas: <code>01/01/2025</code> → 02/01, 03/01… / <code>jan/25</code> → fev/25, mar/25…" }} />
        <li dangerouslySetInnerHTML={{ __html: "Dias da semana: <code>seg</code> → ter, qua, qui…" }} />
        <li dangerouslySetInnerHTML={{ __html: "Meses: <code>janeiro</code> → fevereiro, março…" }} />
        <li dangerouslySetInnerHTML={{ __html: "Texto + número: <code>Item 1</code> → Item 2, Item 3…" }} />
      </ul>
      <h2>Caixa Série (controle total)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Em vez de arrastar, selecione a 1ª célula e o destino → <strong>Página Inicial → Preencher → Série…</strong>. Lá você define linear/geométrica, passo, limite e tipo (data: dia/mês/ano útil)." }} />
      <h2>Listas personalizadas</h2>
      <CodeBlock language="text" code={`Arquivo → Opções → Avançado → Geral → Editar Listas Personalizadas

Adicione: "Equipe A", "Equipe B", "Equipe C", "Equipe D"

Agora digite "Equipe A" e arraste — vira sequência da sua lista.`} />
    </PageContainer>
  );
}
