import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FluxoCaixa() {
  return (
    <PageContainer title="Modelo: Fluxo de Caixa" subtitle="Diário, mensal e projetado — 3 abas, 1 modelo." difficulty="intermediario" timeToRead="7 min">
      <h2>Estrutura básica</h2>
      <CodeBlock language="text" code={`Colunas:  Data | Descrição | Categoria | Entrada | Saída | Saldo

Saldo (linha 2):  =D2 - E2
Saldo (linha n):  =F(n-1) + Dn - En

→ acumulado com SCAN (moderno):
=SCAN(0; (D2:D1000) - (E2:E1000); LAMBDA(s;v; s+v))`} />
      <h2>Por categoria</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Crie uma coluna Categoria com validação (Lista)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tabela Dinâmica: Categoria em Linhas, soma de Entrada-Saída em Valores" }} />
        <li dangerouslySetInnerHTML={{ __html: "Slicer por Mês para análise temporal" }} />
      </ul>
      <h2>Projeção</h2>
      <CodeBlock language="text" code={`Aba "Recorrentes":  Categoria | Valor mensal | Início | Fim | Tipo

Aba "Projeção":  para cada mês futuro, soma os recorrentes ativos
=SOMARPRODUTO(
   (Recorrentes[Início] <= MesFinal) *
   (Recorrentes[Fim] >= MesFinal) *
   Recorrentes[Valor]
)`} />
    </PageContainer>
  );
}
