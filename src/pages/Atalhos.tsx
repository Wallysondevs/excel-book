import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Atalhos() {
    return (
      <PageContainer title="Atalhos de Teclado" subtitle="Os atalhos que dobram sua produtividade no Excel." difficulty="iniciante" timeToRead="8 min">
        <h2>Navegação</h2>
      <CodeBlock language="text" code={`Ctrl + Setas       → pula para o fim do bloco de dados
  Ctrl + Home        → vai para A1
  Ctrl + End         → última célula usada
  Ctrl + Page Down   → próxima planilha
  Ctrl + Page Up     → planilha anterior
  Ctrl + G  (ou F5)  → Ir Para...`} />
      <h2>Seleção</h2>
      <CodeBlock language="text" code={`Shift + Setas              → estende seleção
  Ctrl + Shift + Setas       → seleciona até o fim do bloco
  Ctrl + Shift + End         → seleciona até última célula
  Ctrl + A                   → tabela inteira (ou planilha)
  Ctrl + Espaço              → coluna inteira
  Shift + Espaço             → linha inteira
  Ctrl + Shift + L           → liga/desliga filtro`} />
      <h2>Edição</h2>
      <CodeBlock language="text" code={`F2                  → editar célula
  Alt + Enter         → quebra de linha dentro da célula
  Ctrl + D            → preencher para baixo
  Ctrl + R            → preencher para a direita
  Ctrl + ;            → data de hoje
  Ctrl + Shift + ;    → hora atual
  Ctrl + Z / Ctrl + Y → desfazer / refazer
  F4                  → repete última ação | trava referência (\$)
  F9                  → recalcula tudo`} />
      <h2>Formatação</h2>
      <CodeBlock language="text" code={`Ctrl + 1                → Formatar Células
  Ctrl + B / I / U        → negrito / itálico / sublinhado
  Ctrl + Shift + ~        → formato Geral
  Ctrl + Shift + \$        → moeda
  Ctrl + Shift + %        → porcentagem
  Ctrl + Shift + #        → data
  Ctrl + Shift + !        → número com 2 decimais e separador
  Alt + H + H             → cor de preenchimento
  Alt + H + B             → bordas`} />
      <h2>Linhas e colunas</h2>
      <CodeBlock language="text" code={`Ctrl + +    → inserir linha/coluna
  Ctrl + -    → excluir linha/coluna
  Ctrl + 9    → ocultar linha
  Ctrl + 0    → ocultar coluna
  Alt + H + O + I    → AutoAjustar largura coluna`} />
      <h2>Fórmulas e dados</h2>
      <CodeBlock language="text" code={`Alt + =                  → AutoSoma
  Ctrl + Shift + Enter     → fórmula matricial (legado)
  Ctrl + E                 → Preenchimento Relâmpago
  Ctrl + T                 → criar Tabela
  Alt + N + V              → inserir Tabela Dinâmica
  F4 (na fórmula)          → alterna \$A\$1, A\$1, \$A1, A1`} />
      <AlertBox type="tip" title="Alt revela tudo">
        Pressione <code>Alt</code> sozinho. Aparecerão letras sobre cada guia/comando. Acesse qualquer função do Ribbon sem mouse — ex: <code>Alt + N + T</code> insere Tabela.
      </AlertBox>
      </PageContainer>
    );
  }
  