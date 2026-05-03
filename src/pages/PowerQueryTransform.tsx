import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PowerQueryTransform() {
    return (
      <PageContainer title="Power Query — Transformações" subtitle="Operações que cobrem 90% dos casos reais." difficulty="avancado" timeToRead="10 min">
        <h2>Manipulação de colunas</h2>
      <ul>
        <li>Selecionar / Remover Outras / Reordenar.</li>
        <li>Renomear (duplo clique no cabeçalho).</li>
        <li>Tipo de Dados (clique no ícone à esquerda do nome).</li>
        <li>Dividir Coluna por delimitador, número de caracteres ou posição.</li>
        <li>Mesclar Colunas com separador.</li>
      </ul>
      <h2>Manipulação de linhas</h2>
      <ul>
        <li>Manter Linhas Superiores / Inferiores / Intervalo.</li>
        <li>Remover Linhas Duplicadas / em Branco / com Erros.</li>
        <li>Filtrar (idem AutoFiltro mas permanente).</li>
      </ul>
      <h2>Coluna Personalizada</h2>
      <CodeBlock language="text" code={`Adicionar Coluna → Coluna Personalizada
  Nome: Margem
  Fórmula: = [Receita] - [Custo]

  Outras úteis:
  = Text.Upper([Nome])
  = Date.Year([Data])
  = if [Total] > 1000 then "alto" else "baixo"`} />
      <h2>Coluna Condicional (sem código)</h2>
      <p><strong>Adicionar Coluna → Coluna Condicional</strong> abre interface de IF/THEN/ELSE em diálogo.</p>
      <h2>Mesclar Consultas (JOIN)</h2>
      <p><strong>Inicial → Mesclar Consultas</strong>. Equivale a <code>JOIN</code> de SQL. Tipos: Esquerda Externa, Direita Externa, Interna, Anti.</p>
      <h2>Acrescentar Consultas (UNION)</h2>
      <p><strong>Inicial → Acrescentar Consultas</strong>. Empilha tabelas com mesmas colunas. Útil para juntar planilhas de janeiro+fevereiro+março ou pasta inteira.</p>
      <h2>Pivotar e Despivotar</h2>
      <ul>
        <li><strong>Coluna Dinâmica:</strong> linhas → colunas (cria pivot).</li>
        <li><strong>Transformar Colunas em Linhas (Despivotar):</strong> o oposto. Crítico para limpar planilhas "largas" feitas para humanos antes de jogar em pivot.</li>
      </ul>
      <AlertBox type="success" title="Pasta inteira em uma consulta">
        <strong>Obter Dados → De um Arquivo → De uma Pasta</strong>. O PQ junta todos os Excel/CSV de uma pasta numa única tabela. Coloca um arquivo novo na pasta + Atualizar = dados incorporados.
      </AlertBox>
      </PageContainer>
    );
  }
  