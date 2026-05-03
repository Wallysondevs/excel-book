import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function FormatacaoCondicional() {
    return (
      <PageContainer title="Formatação Condicional" subtitle="Realce regras, barras de dados, escalas de cor e ícones." difficulty="intermediario" timeToRead="10 min">
        <h2>O que é?</h2>
      <p>Aplica formatação automaticamente quando a célula atende um critério. Encontre em <strong>Página Inicial → Formatação Condicional</strong>.</p>
      <h2>Realçar Regras de Células</h2>
      <ul>
        <li>Maior do que / Menor do que / Entre / Igual a um valor.</li>
        <li>Texto que contém certa palavra.</li>
        <li>Uma data ocorrendo (Hoje, Esta semana, Próximo mês...).</li>
        <li>Valores duplicados ou exclusivos.</li>
      </ul>
      <CodeBlock language="text" code={`Exemplo: marcar vendas abaixo da meta
  Selecione B2:B100
  Página Inicial → Formatação Condicional → Realçar... → Menor do que
  Valor: 5000
  Formato: Preenchimento Vermelho Claro com Texto Vermelho Escuro`} />
      <h2>Barras de dados, escalas e ícones</h2>
      <ul>
        <li><strong>Barras de Dados:</strong> mini-gráfico dentro da célula. Útil para listas grandes.</li>
        <li><strong>Escalas de Cor:</strong> degradê do menor (vermelho) ao maior (verde) — heatmap.</li>
        <li><strong>Conjuntos de Ícones:</strong> setas, semáforos, estrelas baseadas em quartis ou regras.</li>
      </ul>
      <h2>Fórmula como condição (avançado)</h2>
      <p>O recurso mais poderoso: <strong>Nova Regra → Usar uma fórmula</strong>. Permite formatar uma linha inteira baseada em outra coluna.</p>
      <CodeBlock language="text" code={`Selecione A2:F100 (a tabela inteira)
  Nova Regra → Usar uma fórmula:
  =\$E2 = "Cancelado"

  Resultado: linha inteira vira vermelha quando coluna E = "Cancelado".
  Repare no \$ apenas na coluna (E) e não na linha (2).`} />
      <AlertBox type="tip" title="Listrar tabela">
        Para destacar linhas alternadas: <code>=ÉPAR(LIN())</code>. Mas se for tabela de verdade (Ctrl+T), o Excel já faz isso.
      </AlertBox>
      <h2>Gerenciar e remover regras</h2>
      <p>Página Inicial → Formatação Condicional → <strong>Gerenciar Regras</strong>. Lá você vê, edita, ordena e exclui todas as regras da planilha. Para limpar tudo de uma vez: <strong>Limpar Regras → da Planilha Inteira</strong>.</p>
      </PageContainer>
    );
  }
  