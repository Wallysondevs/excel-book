import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Protecao() {
  return (
    <PageContainer title="Proteção: pasta, planilha e células" subtitle="3 níveis de bloqueio — combinados resolvem 99% dos casos." difficulty="intermediario" timeToRead="6 min">
      <h2>Nível 1 — Proteger Pasta</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Revisão → Proteger Pasta de Trabalho</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Bloqueia: criar/excluir/renomear/mover planilhas, ocultar e mostrar abas" }} />
      </ul>
      <h2>Nível 2 — Proteger Planilha</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Revisão → Proteger Planilha</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina o que o usuário PODE fazer (filtrar, formatar, inserir linhas, etc)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Senha opcional" }} />
      </ul>
      <h2>Nível 3 — Bloquear células específicas</h2>
      <CodeBlock language="text" code={`Por padrão, TODAS as células nascem com a propriedade "Bloqueada".
Mas o bloqueio só é ATIVO quando você protege a planilha.

Receita comum:
1. Selecione TODAS células → Ctrl+1 → Proteção → desmarque "Bloqueada"
2. Selecione só as células de FÓRMULA/configuração → Ctrl+1 → marque "Bloqueada"
3. Revisão → Proteger Planilha (com ou sem senha)

→ Usuário pode digitar em qualquer lugar, MENOS nas suas fórmulas`} />
      <h2>Esconder fórmulas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Em <strong>Ctrl+1 → Proteção</strong> marque <strong>Oculto</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando a planilha é protegida, a célula mostra valor mas a barra de fórmulas fica em branco" }} />
      </ul>
      <AlertBox type="warning" title="Senha fraca">
        <span dangerouslySetInnerHTML={{ __html: "Senha de planilha é facilmente quebrada. Para confidencialidade real, use senha de ARQUIVO (criptografia)." }} />
      </AlertBox>
    </PageContainer>
  );
}
