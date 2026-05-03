import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PowerPivot() {
    return (
      <PageContainer title="Power Pivot" subtitle="Modelo de dados, relacionamentos e tabelas com milhões de linhas." difficulty="avancado" timeToRead="9 min">
        <h2>Por que existe?</h2>
      <p>Tabela Dinâmica tradicional limita-se a uma única tabela. <strong>Power Pivot</strong> permite criar um <strong>modelo de dados relacional</strong> dentro do Excel, com várias tabelas conectadas por chaves — exatamente como em um banco de dados ou Power BI.</p>
      <h2>Ativar</h2>
      <p><strong>Arquivo → Opções → Suplementos → Suplementos COM → Microsoft Power Pivot for Excel</strong>. Aparece nova guia <strong>Power Pivot</strong> na faixa.</p>
      <h2>Adicionar tabelas ao modelo</h2>
      <ul>
        <li>De uma Tabela do Excel: clique na tabela → Power Pivot → <strong>Adicionar ao Modelo de Dados</strong>.</li>
        <li>Direto do Power Query: na hora de Carregar, marque <strong>Adicionar ao Modelo de Dados</strong>.</li>
        <li>De banco de dados: Power Pivot → Gerenciar → Obter Dados Externos.</li>
      </ul>
      <h2>Criar relacionamentos</h2>
      <p>Janela Power Pivot → <strong>Exibição de Diagrama</strong>. Arraste o campo chave de uma tabela ao campo correspondente da outra. Exatamente como ER diagram.</p>
      <CodeBlock language="text" code={`tblVendas[CodCliente]   ───>   tblClientes[Codigo]
  tblVendas[CodProduto]   ───>   tblProdutos[Codigo]
  tblVendas[Data]         ───>   tblCalendario[Data]`} />
      <h2>Tabela Calendário</h2>
      <p>Crie sempre uma <strong>tabela de datas dedicada</strong> conectada às tabelas de fato. Permite análises de inteligência de tempo (YTD, mesmo período do ano anterior etc) com DAX.</p>
      <CodeBlock language="text" code={`Em PQ ou diretamente:
  =CALENDARAUTO()
  ou
  =CALENDAR(DATE(2020,1,1); DATE(2030,12,31))`} />
      <h2>Pivot sobre o modelo</h2>
      <p>Inserir → Tabela Dinâmica → <strong>Use o Modelo de Dados desta Pasta</strong>. Agora você pode arrastar campos de várias tabelas para a mesma pivot.</p>
      <AlertBox type="tip" title="Power Pivot é a ponte para Power BI">
        O modelo, relacionamentos e medidas DAX que você cria no Power Pivot funcionam igual no Power BI Desktop. Aprender um é aprender o outro.
      </AlertBox>
      </PageContainer>
    );
  }
  