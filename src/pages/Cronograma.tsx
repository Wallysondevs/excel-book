import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Cronograma() {
  return (
    <PageContainer title="Cronograma com gráfico de Gantt" subtitle="Linha do tempo de projetos sem usar MS Project." difficulty="intermediario" timeToRead="6 min">
      <h2>Tabela base</h2>
      <CodeBlock language="text" code={`Tarefa         Início      Duração (dias)    Responsável
Levantamento   05/01/2025  10                Ana
Design         15/01/2025  20                João
Desenvolv.     04/02/2025  40                Pedro
Testes         16/03/2025  15                Ana
Deploy         31/03/2025  3                 Ana`} />
      <h2>Construir Gantt com gráfico de barras empilhadas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione Tarefa, Início, Duração" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Barras 2D Empilhadas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Mude a 1ª série (Início) para SEM preenchimento e SEM borda → vira espaço" }} />
        <li dangerouslySetInnerHTML={{ __html: "Inverta a ordem do eixo (Y) para 1ª tarefa em cima" }} />
      </ul>
      <h2>Versão moderna com fórmula</h2>
      <CodeBlock language="text" code={`Em uma matriz onde colunas = datas (1 a N), linhas = tarefas:
=SE(E(coluna_data >= Início; coluna_data < Início+Duração); "■"; "")

Aplique formatação condicional para colorir e tem o Gantt em texto.`} />
    </PageContainer>
  );
}
