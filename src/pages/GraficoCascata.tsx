import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GraficoCascata() {
  return (
    <PageContainer title="Cascata, Funil, Treemap, Sunburst, Pareto" subtitle="5 gráficos modernos para casos específicos." difficulty="intermediario" timeToRead="7 min">
      <h2>Cascata (Waterfall)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Mostra como um valor inicial chega ao final através de entradas e saídas. Perfeito para DRE." }} />
      <CodeBlock language="text" code={`Receita Bruta      +1.000
Impostos             -180
Receita Líquida      = 820   ← marcar como TOTAL
Custo Mercadoria    -450
Lucro Bruto          = 370   ← TOTAL
Despesas            -200
Lucro Líquido        = 170   ← TOTAL`} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Botão direito numa coluna → <strong>Definir como Total</strong> para marcar subtotais" }} />
      </ul>
      <h2>Funil</h2>
      <p dangerouslySetInnerHTML={{ __html: "Etapas que diminuem em volume — recrutamento, conversão de e-commerce, vendas." }} />
      <CodeBlock language="text" code={`Visitantes    10.000
Carrinho       2.500
Checkout         800
Pago             450`} />
      <h2>Treemap e Sunburst</h2>
      <p dangerouslySetInnerHTML={{ __html: "Hierarquia em retângulos (Treemap) ou anéis (Sunburst). Use 2-3 níveis (Categoria → Subcategoria → Produto)." }} />
      <h2>Pareto</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Excel já tem nativo: Inserir → Gráficos → Pareto" }} />
        <li dangerouslySetInnerHTML={{ __html: "Combina colunas ordenadas por frequência + linha de % acumulado" }} />
        <li dangerouslySetInnerHTML={{ __html: "Princípio: 20% dos itens causam 80% do efeito" }} />
      </ul>
    </PageContainer>
  );
}
