import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CalculoCltPj() {
  return (
    <PageContainer title="Calculadora CLT vs PJ" subtitle="Comparação líquido-a-líquido considerando benefícios e impostos." difficulty="intermediario" timeToRead="7 min">
      <h2>Lado CLT</h2>
      <CodeBlock language="text" code={`Salário bruto                          A
INSS (faixas progressivas até R\$8.157,41) B
IRRF (faixas progressivas)                C
Salário líquido                           = A - B - C

Benefícios:
+ 13º (1/12 ao mês)
+ Férias 1/3 (1/12 ao mês × 1,33)
+ FGTS (8% ao mês depositado pelo emprr)
+ Vale transporte / refeição
+ Plano de saúde / previdência`} />
      <h2>Lado PJ</h2>
      <CodeBlock language="text" code={`Faturamento bruto                      F
Simples Nacional Anexo III/V (4-15,5%)  G
Pró-labore + INSS (11% sobre teto)      H
IR sobre pró-labore                     I
Líquido                                 = F - G - H - I

Custos:
+ Contador (R\$ 200-500/mês)
+ Plano de saúde (sem subsídio)
+ Sem FGTS, sem 13º, sem férias remuneradas
+ Provisão p/ período sem cliente (3-6 meses líquido)`} />
      <h2>Comparação justa</h2>
      <p dangerouslySetInnerHTML={{ __html: "Multiplique o salário CLT por 1,75 ~ 2,1 para ter equivalente PJ (cobre encargos perdidos). Ex: <em>CLT R$ 10k ≈ PJ R$ 18k a 21k</em>." }} />
    </PageContainer>
  );
}
