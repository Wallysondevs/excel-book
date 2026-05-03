import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AtalhosWindows() {
  return (
    <PageContainer title="Tabela completa de atalhos Windows" subtitle="Todos os atalhos que valem decorar." difficulty="iniciante" timeToRead="6 min">
      <h2>Navegação</h2>
      <CodeBlock language="text" code={`Ctrl + ↑↓←→        pular borda
Ctrl + Home/End    A1 / última usada
Ctrl + Page Up/Dn  trocar de planilha
F5                 ir para...
Ctrl + F           localizar
Ctrl + H           substituir
Ctrl + G           ir para
Tab / Enter        avançar coluna / linha`} />
      <h2>Edição</h2>
      <CodeBlock language="text" code={`F2                editar célula
F4                alterna \$ na referência (\$A\$1 → A\$1 → \$A1 → A1)
Ctrl + Z / Y      desfazer / refazer
Ctrl + C/X/V      copiar / recortar / colar
Ctrl + Alt + V    colar especial
Ctrl + D / R      preencher abaixo / direita
Ctrl + Enter      preencher seleção sem mudar célula ativa
Alt + Enter       quebra de linha dentro da célula
Ctrl + ;          data de hoje
Ctrl + Shift + :  hora atual
Ctrl + +/-        inserir / excluir células`} />
      <h2>Formatação</h2>
      <CodeBlock language="text" code={`Ctrl + 1           formatar células
Ctrl + B           negrito
Ctrl + I           itálico
Ctrl + U           sublinhado
Ctrl + Shift + 1   formato número (1.234,57)
Ctrl + Shift + 2   formato hora
Ctrl + Shift + 3   formato data
Ctrl + Shift + 4   formato moeda R\$
Ctrl + Shift + 5   formato porcentagem
Ctrl + Shift + 6   formato científico
Ctrl + Shift + &   borda externa
Ctrl + Shift + _   remove bordas`} />
      <h2>Tabelas e funções</h2>
      <CodeBlock language="text" code={`Ctrl + T          criar Tabela
Ctrl + L          mesmo (versões antigas)
Ctrl + Shift + L  ativa/desativa filtro
Alt + =           autosoma
Ctrl + K          inserir hyperlink
F11               gráfico em nova aba
Alt + F1          gráfico embedado
F9                recalcular tudo`} />
    </PageContainer>
  );
}
