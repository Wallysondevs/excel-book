import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PowerQueryTransform() {
    return (
      <PageContainer title="Power Query — Transformações" subtitle="Operações que cobrem 90% dos casos reais." difficulty="avancado" timeToRead="10 min">
        <h2>Manipulação de colunas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecionar / Remover Outras / Reordenar." }} />
        <li dangerouslySetInnerHTML={{ __html: "Renomear (duplo clique no cabeçalho)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipo de Dados (clique no ícone à esquerda do nome)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Dividir Coluna por delimitador, número de caracteres ou posição." }} />
        <li dangerouslySetInnerHTML={{ __html: "Mesclar Colunas com separador." }} />
      </ul>
      <h2>Manipulação de linhas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Manter Linhas Superiores / Inferiores / Intervalo." }} />
        <li dangerouslySetInnerHTML={{ __html: "Remover Linhas Duplicadas / em Branco / com Erros." }} />
        <li dangerouslySetInnerHTML={{ __html: "Filtrar (idem AutoFiltro mas permanente)." }} />
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
      <p dangerouslySetInnerHTML={{ __html: "<strong>Adicionar Coluna → Coluna Condicional</strong> abre interface de IF/THEN/ELSE em diálogo." }} />
      <h2>Mesclar Consultas (JOIN)</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Inicial → Mesclar Consultas</strong>. Equivale a <code>JOIN</code> de SQL. Tipos: Esquerda Externa, Direita Externa, Interna, Anti." }} />
      <h2>Acrescentar Consultas (UNION)</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Inicial → Acrescentar Consultas</strong>. Empilha tabelas com mesmas colunas. Útil para juntar planilhas de janeiro+fevereiro+março ou pasta inteira." }} />
      <h2>Pivotar e Despivotar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Coluna Dinâmica:</strong> linhas → colunas (cria pivot)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Transformar Colunas em Linhas (Despivotar):</strong> o oposto. Crítico para limpar planilhas \"largas\" feitas para humanos antes de jogar em pivot." }} />
      </ul>
      <AlertBox type="success" title="Pasta inteira em uma consulta">
        <span dangerouslySetInnerHTML={{ __html: "<strong>Obter Dados → De um Arquivo → De uma Pasta</strong>. O PQ junta todos os Excel/CSV de uma pasta numa única tabela. Coloca um arquivo novo na pasta + Atualizar = dados incorporados." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  