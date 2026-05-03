import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Cenarios() {
    return (
      <PageContainer title="Gerenciador de Cenários" subtitle="Comparar resultados de diferentes conjuntos de premissas." difficulty="intermediario" timeToRead="5 min">
        <h2>Para que serve?</h2>
      <p dangerouslySetInnerHTML={{ __html: "Salvar diferentes conjuntos de valores em células-chave (ex: \"Otimista\", \"Pessimista\", \"Base\") para alternar entre eles e gerar relatório comparativo." }} />
      <h2>Onde está</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Dados → Teste de Hipóteses → Gerenciador de Cenários</strong>. Clique em Adicionar." }} />
      <h2>Criando um cenário</h2>
      <CodeBlock language="text" code={`Nome:           Pessimista
  Células:        B2:B5
  Valores:        Receita = 80000
                  Custo   = 60000
                  Imposto = 18%
                  Câmbio  = 5,80`} />
      <p dangerouslySetInnerHTML={{ __html: "Crie quantos quiser. <strong>Mostrar</strong> aplica os valores nas células. <strong>Resumo</strong> gera relatório com todos os cenários e fórmulas-resultado lado a lado." }} />
      <AlertBox type="tip" title="Tabela de Dados (one/two-variable)">
        <span dangerouslySetInnerHTML={{ __html: "Para sensibilidade simples (variar 1 ou 2 inputs), <strong>Dados → Teste de Hipóteses → Tabela de Dados</strong> é mais rápido que Cenários." }} />
      </AlertBox>
      </PageContainer>
    );
  }
  