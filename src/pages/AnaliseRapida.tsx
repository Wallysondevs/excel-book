import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AnaliseRapida() {
  return (
    <PageContainer title="Análise Rápida e Ideias (Insights)" subtitle="Excel sugere gráficos, totais e formatações em 1 clique." difficulty="iniciante" timeToRead="4 min">
      <h2>Análise Rápida</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione um intervalo numérico → aparece ícone <strong>⚡ no canto inferior direito</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Atalho: <kbd>Ctrl</kbd>+<kbd>Q</kbd>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Abas: Formatação · Gráficos · Totais · Tabelas · Minigráficos" }} />
        <li dangerouslySetInnerHTML={{ __html: "Passe o mouse pelas opções para preview ao vivo" }} />
      </ul>
      <h2>Ideias / Analyze Data</h2>
      <p dangerouslySetInnerHTML={{ __html: "Aba <strong>Página Inicial → Analisar Dados</strong> (canto direito). A IA do Excel olha sua planilha e sugere insights, tendências, valores discrepantes e gráficos. Você também pode fazer perguntas em linguagem natural (em inglês ou pt)." }} />
      <CodeBlock language="text" code={`Exemplos de perguntas:
   "Qual produto vendeu mais em janeiro?"
   "Mostre tendência de vendas nos últimos 6 meses"
   "Compare 2024 vs 2025"`} />
    </PageContainer>
  );
}
