import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function TabelaDinamica() {
    return (
      <PageContainer title="Tabela Dinâmica" subtitle="Resuma, agrupe e analise milhares de linhas em segundos." difficulty="intermediario" timeToRead="12 min">
        <h2>Conceito</h2>
      <p><strong>Tabela Dinâmica (PivotTable)</strong> é a ferramenta mais poderosa de análise do Excel. Você pega uma base de linhas e a transforma em resumo cruzando dimensões — tudo arrastando campos.</p>
      <h2>Pré-requisitos da base</h2>
      <ul>
        <li>Tabela <strong>plana</strong> (uma observação por linha).</li>
        <li>Cabeçalhos únicos na primeira linha, sem células mescladas.</li>
        <li>Sem linhas vazias intermediárias.</li>
        <li>Idealmente formate como Tabela (Ctrl+T) antes — assim a Pivot expande automaticamente.</li>
      </ul>
      <h2>Criar uma</h2>
      <p>Selecione a base → <strong>Inserir → Tabela Dinâmica</strong>. Escolha o destino (nova planilha é o padrão). Aparece o painel <strong>Campos da Tabela Dinâmica</strong> com 4 áreas:</p>
      <CodeBlock language="text" code={`┌──────────────────┐
  │  Filtros         │  ← filtra a tabela toda
  ├──────────────────┤
  │  Colunas         │  ← campos viram colunas
  ├──────────────────┤
  │  Linhas          │  ← campos viram linhas
  ├──────────────────┤
  │  Valores         │  ← o que calcular (soma, média...)
  └──────────────────┘`} />
      <h2>Exemplo: vendas por estado e mês</h2>
      <CodeBlock language="text" code={`Base: Data | Estado | Vendedor | Total

  Linhas:    Estado
  Colunas:   Mês (clique direito em Data → Agrupar → Meses)
  Valores:   Total (Soma)
  Filtros:   Vendedor`} />
      <h2>Mudar agregação</h2>
      <p>Botão direito no campo de Valores → <strong>Resumir Valores Por</strong>: Soma, Contagem, Média, Máx, Mín, Produto, Desvio Padrão, Variância.</p>
      <h2>Mostrar valores como</h2>
      <p>Mesmo menu → <strong>Mostrar Valores Como</strong>: % do total, % do total da linha/coluna, diferença em relação a, classificação, número acumulado.</p>
      <CodeBlock language="text" code={`% do total geral         → quanto cada estado representa
  % do total da coluna     → 100% por mês, distribui entre estados
  Diferença de             → comparar com mês anterior
  Classificação            → ranking 1, 2, 3...`} />
      <AlertBox type="tip" title="Atualizar dados">
        Quando a base muda, clique direito na pivot → <strong>Atualizar</strong>, ou <code>Alt + F5</code>. Se a base for Tabela (Ctrl+T), novas linhas aparecem automaticamente após Atualizar.
      </AlertBox>
      <h2>Layout e estilo</h2>
      <p>Aba <strong>Design</strong> da pivot: layout (Compacto / Esboço / Tabular), subtotais, totais gerais, linhas em faixas, estilos.</p>
      </PageContainer>
    );
  }
  