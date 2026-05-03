import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FormatoData() {
  return (
    <PageContainer title="Formatos de data e moeda BR" subtitle="Datas em pt-BR sem dor — e moeda no padrão correto." difficulty="iniciante" timeToRead="5 min">
      <h2>Datas</h2>
      <CodeBlock language="text" code={`d       dia (1)
dd      dia (01)
ddd     dia abreviado (qua)
dddd    dia por extenso (quarta-feira)
m       mês (3)
mm      mês (03)
mmm     mês abreviado (mar)
mmmm    mês por extenso (março)
mmmmm   inicial do mês (M)
aa      ano com 2 dígitos (25)
aaaa    ano com 4 dígitos (2025)`} />
      <h2>Exemplos pt-BR</h2>
      <CodeBlock language="text" code={`dd/mm/aaaa            05/03/2025
dd/mm/aaaa hh:mm      05/03/2025 14:30
dddd, d "de" mmmm     quarta-feira, 5 de março
mmm/aa                mar/25
[\$-pt-BR]d-mmm-aaaa   5-mar-2025`} />
      <h2>Hora</h2>
      <CodeBlock language="text" code={`h:mm                  14:30
h:mm AM/PM            2:30 PM
[h]:mm                36:00 (mais de 24h, p/ totais)
mm:ss,000             30:45,123 (milissegundos)`} />
      <h2>Moeda BR</h2>
      <CodeBlock language="text" code={`"R\$ "#.##0,00              R\$ 1.234,56
[\$R\$-pt-BR] #.##0,00       R\$ 1.234,56  (com ícone de moeda)
#.##0,00" R\$"              1.234,56 R\$
[Vermelho]-"R\$ "#.##0,00   negativos em vermelho`} />
      <AlertBox type="warning" title="Datas não são datas">
        <span dangerouslySetInnerHTML={{ __html: "Se aparecer alinhado à esquerda, é texto. Se aparecer à direita e responder a soma/cálculo, é data de verdade. Para converter texto em data: <code>=DATA.VALOR(A1)</code> ou Power Query." }} />
      </AlertBox>
    </PageContainer>
  );
}
