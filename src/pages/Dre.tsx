import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Dre() {
  return (
    <PageContainer title="Modelo: DRE em 5 minutos" subtitle="Demonstração de Resultado completa, plug-and-play." difficulty="intermediario" timeToRead="7 min">
      <h2>Estrutura</h2>
      <CodeBlock language="text" code={`(+) Receita Bruta
(-) Deduções (impostos sobre venda, devoluções)
(=) Receita Líquida
(-) CMV / CSP
(=) Lucro Bruto
(-) Despesas Operacionais
    - Pessoal
    - Marketing
    - Administrativas
(=) EBITDA
(-) Depreciação e Amortização
(=) EBIT (Lucro Operacional)
(-) Resultado Financeiro (despesas - receitas financeiras)
(=) LAIR (Lucro Antes do IR)
(-) IR e CSLL
(=) Lucro Líquido`} />
      <h2>Cores e estilos</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Subtotais em <strong>negrito</strong> com bordas duplas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Linha de receita em verde claro; linha de lucro em verde escuro" }} />
        <li dangerouslySetInnerHTML={{ __html: "Despesas em vermelho/laranja" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use <code>[Vermelho](#.##0)</code> em formato para parênteses negativos" }} />
      </ul>
      <h2>Gráfico cascata</h2>
      <p dangerouslySetInnerHTML={{ __html: "Selecione a coluna de valores → <strong>Inserir → Cascata</strong>. Marque os subtotais como Total. Ganhe relatório executivo em 30 segundos." }} />
    </PageContainer>
  );
}
