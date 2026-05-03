import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ControleEstoque() {
  return (
    <PageContainer title="Modelo: Controle de Estoque" subtitle="Entradas, saídas, saldo atual e ponto de reposição." difficulty="intermediario" timeToRead="6 min">
      <h2>Tabelas</h2>
      <CodeBlock language="text" code={`tblProdutos:   SKU | Nome | Categoria | EstoqueMín | CustoUnit
tblMovim:      Data | SKU | Tipo (E/S) | Qtd | Obs`} />
      <h2>Saldo atual</h2>
      <CodeBlock language="text" code={`=SOMASES(tblMovim[Qtd]; tblMovim[SKU]; A2; tblMovim[Tipo]; "E")
 -SOMASES(tblMovim[Qtd]; tblMovim[SKU]; A2; tblMovim[Tipo]; "S")`} />
      <h2>Alerta de reposição</h2>
      <CodeBlock language="text" code={`Coluna Status:
=SE(SaldoAtual <= EstoqueMín; "🔴 REPOR"; "🟢 OK")

Formatação Condicional → Texto que contém "REPOR" → fundo vermelho`} />
      <h2>Curva ABC</h2>
      <CodeBlock language="text" code={`Em uma TD: Soma de Vendas por SKU, ordenada decrescente
% acumulado:  =Soma(linha) / Soma(total)
Classifique:
   ≤ 80%   → A
   ≤ 95%   → B
   restante → C`} />
    </PageContainer>
  );
}
