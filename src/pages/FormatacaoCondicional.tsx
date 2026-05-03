import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function FormatacaoCondicional() {
    return (
      <PageContainer title="Formatação Condicional" subtitle="Realce regras, barras de dados, escalas de cor e ícones." difficulty="intermediario" timeToRead="10 min">
        <h2>O que é?</h2>
      <p dangerouslySetInnerHTML={{ __html: "Aplica formatação automaticamente quando a célula atende um critério. Encontre em <strong>Página Inicial → Formatação Condicional</strong>." }} />
      <h2>Realçar Regras de Células</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Maior do que / Menor do que / Entre / Igual a um valor." }} />
        <li dangerouslySetInnerHTML={{ __html: "Texto que contém certa palavra." }} />
        <li dangerouslySetInnerHTML={{ __html: "Uma data ocorrendo (Hoje, Esta semana, Próximo mês...)." }} />
        <li dangerouslySetInnerHTML={{ __html: "Valores duplicados ou exclusivos." }} />
      </ul>
      <CodeBlock language="text" code={`Exemplo: marcar vendas abaixo da meta
  Selecione B2:B100
  Página Inicial → Formatação Condicional → Realçar... → Menor do que
  Valor: 5000
  Formato: Preenchimento Vermelho Claro com Texto Vermelho Escuro`} />
      <h2>Barras de dados, escalas e ícones</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Barras de Dados:</strong> mini-gráfico dentro da célula. Útil para listas grandes." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Escalas de Cor:</strong> degradê do menor (vermelho) ao maior (verde) — heatmap." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Conjuntos de Ícones:</strong> setas, semáforos, estrelas baseadas em quartis ou regras." }} />
      </ul>
      <h2>Fórmula como condição (avançado)</h2>
      <p dangerouslySetInnerHTML={{ __html: "O recurso mais poderoso: <strong>Nova Regra → Usar uma fórmula</strong>. Permite formatar uma linha inteira baseada em outra coluna." }} />
      <CodeBlock language="text" code={`Selecione A2:F100 (a tabela inteira)
  Nova Regra → Usar uma fórmula:
  =\$E2 = "Cancelado"

  Resultado: linha inteira vira vermelha quando coluna E = "Cancelado".
  Repare no \$ apenas na coluna (E) e não na linha (2).`} />
      <AlertBox type="tip" title="Listrar tabela">
        <span dangerouslySetInnerHTML={{ __html: "Para destacar linhas alternadas: <code>=ÉPAR(LIN())</code>. Mas se for tabela de verdade (Ctrl+T), o Excel já faz isso." }} />
      </AlertBox>
      <h2>Gerenciar e remover regras</h2>
      <p dangerouslySetInnerHTML={{ __html: "Página Inicial → Formatação Condicional → <strong>Gerenciar Regras</strong>. Lá você vê, edita, ordena e exclui todas as regras da planilha. Para limpar tudo de uma vez: <strong>Limpar Regras → da Planilha Inteira</strong>." }} />
      </PageContainer>
    );
  }
  