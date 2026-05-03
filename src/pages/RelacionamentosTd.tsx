import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RelacionamentosTd() {
  return (
    <PageContainer title="TD — Relacionamentos entre tabelas" subtitle="Vendas + Produtos + Clientes em uma TD só." difficulty="intermediario" timeToRead="6 min">
      <h2>Modelo estrela</h2>
      <CodeBlock language="text" code={`        ┌── tblProdutos (CodProd, Nome, Categoria)
        │
tblVendas (CodProd, CodCli, Data, Valor) ─── tblCalendario (Data, Mês, Ano)
        │
        └── tblClientes (CodCli, Nome, UF)`} />
      <h2>Criar relacionamento</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dados → Relacionamentos → Novo</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tabela: tblVendas / Coluna: CodProd" }} />
        <li dangerouslySetInnerHTML={{ __html: "Relacionada: tblProdutos / Coluna: CodProd" }} />
        <li dangerouslySetInnerHTML={{ __html: "Cardinalidade: muitos-para-um (padrão para FK)" }} />
      </ul>
      <h2>Usar na TD</h2>
      <p dangerouslySetInnerHTML={{ __html: "Em uma TD ligada ao Modelo, você pode arrastar <strong>Categoria (de Produtos)</strong> em Linhas e <strong>SOMA(Valor de Vendas)</strong> em Valores. O Excel resolve o JOIN automaticamente." }} />
      <AlertBox type="tip" title="Ouro">
        <span dangerouslySetInnerHTML={{ __html: "Modelo estrela é o padrão de BI mundial. Vale a pena estudar — vai te ajudar com Power BI, Tableau, e qualquer ferramenta moderna." }} />
      </AlertBox>
    </PageContainer>
  );
}
