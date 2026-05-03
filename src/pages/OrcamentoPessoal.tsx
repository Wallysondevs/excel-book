import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function OrcamentoPessoal() {
  return (
    <PageContainer title="Modelo: Orçamento Pessoal" subtitle="Receitas, despesas fixas e variáveis, meta de poupança." difficulty="iniciante" timeToRead="5 min">
      <h2>Categorias</h2>
      <CodeBlock language="text" code={`Receitas:    Salário, Freelas, Aluguel recebido, Outros
Fixas:       Aluguel, Internet, Streaming, Plano de saúde
Variáveis:   Mercado, Restaurante, Transporte, Lazer
Meta poup.:  20% da receita líquida`} />
      <h2>Painel mensal</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Meta vs Realizado por categoria com barra (Formatação Condicional → Barras de Dados)" }} />
        <li dangerouslySetInnerHTML={{ __html: "% gasto da renda — formatação condicional gradiente verde→vermelho" }} />
        <li dangerouslySetInnerHTML={{ __html: "Saldo do mês = Receitas - Despesas - Poupança" }} />
      </ul>
      <h2>Comparativo mensal</h2>
      <p dangerouslySetInnerHTML={{ __html: "Tabela Dinâmica com Mês em Colunas, Categoria em Linhas, Soma em Valores. Slicer por Categoria. Gráfico de linha para evolução." }} />
      <AlertBox type="tip" title="Regra 50-30-20">
        <span dangerouslySetInnerHTML={{ __html: "50% necessidades, 30% desejos, 20% poupança/dívidas. Bom ponto de partida para orçamento." }} />
      </AlertBox>
    </PageContainer>
  );
}
