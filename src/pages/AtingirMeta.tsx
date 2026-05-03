import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function AtingirMeta() {
    return (
      <PageContainer title="Atingir Meta" subtitle="Engenharia reversa: o Excel descobre o input necessário para um output." difficulty="intermediario" timeToRead="5 min">
        <h2>Cenário típico</h2>
      <p>Você tem uma fórmula complexa e quer saber: "que valor preciso colocar em X para o resultado dar Y?". <strong>Atingir Meta</strong> faz isso por iteração.</p>
      <h2>Onde fica</h2>
      <p><strong>Dados → Teste de Hipóteses → Atingir Meta</strong>.</p>
      <CodeBlock language="text" code={`Definir célula:    B5  (a fórmula)
  Para o valor:      10000
  Alterando célula:  B2  (o input que vai variar)`} />
      <h2>Exemplo: financiamento</h2>
      <p>Você tem uma planilha com prestação calculada por <code>PGTO()</code>. Pergunta: "qual taxa de juros faria a prestação cair para R$ 800?"</p>
      <CodeBlock language="text" code={`B1: 50000     ← valor financiado
  B2: 1,5%      ← taxa mensal
  B3: 60        ← parcelas
  B5: =-PGTO(B2; B3; B1)   = R\$ 1.265

  Atingir Meta:
    Definir B5 = 800
    Alterando B2

  Resultado: B2 ≈ 0,12% (taxa que daria prestação 800)`} />
      <AlertBox type="warning" title="Limitações">
        Atingir Meta muda <strong>uma única célula</strong>. Para problemas com múltiplas variáveis e restrições, use o <strong>Solver</strong>.
      </AlertBox>
      </PageContainer>
    );
  }
  