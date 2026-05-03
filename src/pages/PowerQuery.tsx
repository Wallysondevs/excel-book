import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PowerQuery() {
    return (
      <PageContainer title="Power Query — Introdução" subtitle="ETL visual dentro do Excel: importar, limpar e atualizar dados sem código." difficulty="avancado" timeToRead="10 min">
        <h2>O que é?</h2>
      <p><strong>Power Query ("Obter e Transformar")</strong> é a ferramenta de ETL embutida no Excel. Permite conectar a CSV, banco de dados, API, web, pasta inteira de arquivos — e aplicar transformações que serão <strong>repetidas automaticamente</strong> quando os dados mudarem.</p>
      <h2>Por que mudou tudo</h2>
      <ul>
        <li><strong>Repetível:</strong> mês que vem, basta clicar Atualizar.</li>
        <li><strong>Não destrutivo:</strong> não altera o arquivo original.</li>
        <li><strong>Auditável:</strong> cada passo aparece numa lista (Etapas Aplicadas).</li>
        <li><strong>Capacidade:</strong> processa milhões de linhas (acima do limite da planilha).</li>
        <li><strong>Combina fontes:</strong> mescle CSV, SQL, Excel e Web na mesma consulta.</li>
      </ul>
      <h2>Onde está</h2>
      <p><strong>Dados → Obter Dados</strong>. Escolha a fonte (Arquivo, Banco de Dados, Online, etc). Após escolher, abre o <strong>Editor do Power Query</strong> em janela separada.</p>
      <h2>Anatomia do Editor</h2>
      <CodeBlock language="text" code={`[Faixa]      Inicial · Transformar · Adicionar Coluna · Exibir
  [Esquerda]   Lista de Consultas
  [Centro]     Pré-visualização da tabela
  [Direita]    Propriedades + Etapas Aplicadas (todo histórico)
  [Inferior]   Barra de Fórmulas (linguagem M)`} />
      <h2>Fluxo típico</h2>
      <ul>
        <li>1. <strong>Conectar</strong> à fonte (clique em Obter Dados).</li>
        <li>2. <strong>Transformar</strong> (limpar, renomear, filtrar, juntar).</li>
        <li>3. <strong>Carregar</strong> de volta para o Excel (Tabela, Tabela Dinâmica ou só Conexão).</li>
        <li>4. <strong>Atualizar</strong> sempre que os dados mudarem.</li>
      </ul>
      <h2>Linguagem M</h2>
      <p>Toda etapa aplicada gera código na linguagem <strong>M</strong>. Você pode ver/editar em <strong>Exibir → Editor Avançado</strong>.</p>
      <CodeBlock language="text" code={`let
      Fonte = Csv.Document(File.Contents("vendas.csv")),
      Cabeçalho = Table.PromoteHeaders(Fonte),
      Tipos = Table.TransformColumnTypes(Cabeçalho, {{"Total", type number}}),
      Filtrado = Table.SelectRows(Tipos, each [Estado] = "SP")
  in
      Filtrado`} />
      <AlertBox type="tip" title="Power Query > VBA na maioria dos casos">
        Se a tarefa é <strong>importar e limpar dados</strong>, use Power Query antes de pensar em VBA. É mais rápido de criar e mais fácil de manter.
      </AlertBox>
      </PageContainer>
    );
  }
  