import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GraficoCombinado() {
  return (
    <PageContainer title="Gráficos combinados (eixo secundário)" subtitle="Coluna + linha no mesmo gráfico — receita e meta lado a lado." difficulty="intermediario" timeToRead="5 min">
      <h2>Como criar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione duas séries (ex: Vendas e Meta)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Inserir → Gráficos → Combinação</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina: Vendas = Coluna; Meta = Linha; <strong>marque 'Eixo Secundário' na Meta</strong> se as escalas forem MUITO diferentes" }} />
      </ul>
      <h2>Quando usar 2 eixos Y</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Receita (R$) e Quantidade (un) — escalas diferentes" }} />
        <li dangerouslySetInnerHTML={{ __html: "Vendas e Margem % — valores e percentuais" }} />
        <li dangerouslySetInnerHTML={{ __html: "Temperatura (°C) e Pluviosidade (mm)" }} />
      </ul>
      <AlertBox type="warning" title="Cuidado com o duplo eixo">
        <span dangerouslySetInnerHTML={{ __html: "Sempre coloque <strong>cores distintas</strong> para cada eixo e identifique no rótulo. Senão o leitor compara escalas erradas." }} />
      </AlertBox>
    </PageContainer>
  );
}
