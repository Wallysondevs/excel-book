import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function DataHora() {
    return (
      <PageContainer title="Funções de Data e Hora" subtitle="HOJE, AGORA, DATAM, DIATRABALHOTOTAL e cálculos do dia a dia." difficulty="intermediario" timeToRead="9 min">
        <h2>Datas atuais</h2>
      <CodeBlock language="text" code={`=HOJE()       → 03/05/2026 (atualiza ao abrir)
  =AGORA()      → 03/05/2026 14:35

  Para fixar: copie e cole especial → valores.
  Atalho: Ctrl + ; (data) e Ctrl + Shift + ; (hora).`} />
      <h2>Construir e desmontar datas</h2>
      <CodeBlock language="text" code={`=DATA(2026; 5; 3)        → 03/05/2026
  =ANO(A1)                 → 2026
  =MÊS(A1)                 → 5
  =DIA(A1)                 → 3
  =DIA.DA.SEMANA(A1; 2)    → 1=seg, 2=ter, ..., 7=dom
  =NÚMSEMANA(A1)           → semana do ano`} />
      <h2>Diferenças entre datas</h2>
      <CodeBlock language="text" code={`=B1-A1                       → diferença em dias
  =DATADIF(A1; B1; "Y")        → anos completos
  =DATADIF(A1; B1; "M")        → meses completos
  =DATADIF(A1; B1; "D")        → dias
  =DATADIF(A1; B1; "YM")       → meses ignorando ano
  =DATADIF(A1; B1; "MD")       → dias ignorando mês

  Idade: =DATADIF(B1; HOJE(); "Y")`} />
      <h2>Avançar e voltar no tempo</h2>
      <CodeBlock language="text" code={`=DATAM(A1; 3)        → A1 + 3 meses
  =DATAM(A1; -6)       → A1 - 6 meses
  =FIMMÊS(A1; 0)       → último dia do mês de A1
  =FIMMÊS(A1; 1)       → último dia do PRÓXIMO mês
  =A1 + 30             → 30 dias depois`} />
      <h2>Dias úteis</h2>
      <CodeBlock language="text" code={`=DIATRABALHOTOTAL(A1; B1)         → dias úteis entre datas
  =DIATRABALHOTOTAL(A1; B1; feriados)
  =DIA.TRABALHO(A1; 10)             → 10º dia útil após A1
  =DIA.TRABALHO.INTL(A1; 10; 11)    → dom como único dia não útil`} />
      <AlertBox type="info" title="Datas anteriores a 1900">
        O Excel não reconhece datas antes de 01/01/1900 como datas reais — vira texto.
      </AlertBox>
      <h2>Funções de hora</h2>
      <CodeBlock language="text" code={`=TEMPO(14; 30; 0)    → 14:30:00
  =HORA(A1)            → hora
  =MINUTO(A1)
  =SEGUNDO(A1)

  Soma de horas além de 24h: formate como [h]:mm`} />
      </PageContainer>
    );
  }
  