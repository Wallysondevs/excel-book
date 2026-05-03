import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Glossario() {
  return (
    <PageContainer title="Glossário Excel pt-BR / en-US" subtitle="Tradução das funções e termos mais usados." difficulty="iniciante" timeToRead="6 min">
      <h2>Funções</h2>
      <CodeBlock language="text" code={`pt-BR             en-US           pt-BR             en-US
SOMA              SUM             PROCV             VLOOKUP
MÉDIA             AVERAGE         PROCH             HLOOKUP
SE                IF              PROCX             XLOOKUP
E                 AND             ÍNDICE            INDEX
OU                OR              CORRESP           MATCH
NÃO               NOT             SEERRO            IFERROR
CONT.NÚM          COUNT           HOJE              TODAY
CONT.VALORES      COUNTA          AGORA             NOW
CONT.SE           COUNTIF         DATA              DATE
SOMASE            SUMIF           DIA               DAY
SOMASES           SUMIFS          MÊS               MONTH
MÁXIMO            MAX             ANO               YEAR
MÍNIMO            MIN             FILTRO            FILTER
MAIOR             LARGE           CLASSIFICAR       SORT
MENOR             SMALL           ÚNICO             UNIQUE
SE.MÚLTIPLO       IFS             SEQUÊNCIA         SEQUENCE
PARÂMETRO         SWITCH          UNIRTEXTO         TEXTJOIN
ESQUERDA          LEFT            DIVIDIRTEXTO      TEXTSPLIT
DIREITA           RIGHT           TEXTOANTES        TEXTBEFORE
EXT.TEXTO         MID             TEXTODEPOIS       TEXTAFTER
LOCALIZAR         FIND            ARRUMAR           TRIM
PROCURAR          SEARCH          MAIÚSCULA         UPPER`} />
      <h2>Termos</h2>
      <CodeBlock language="text" code={`Pasta de trabalho      Workbook
Planilha               Worksheet
Faixa de Opções        Ribbon
Tabela Dinâmica        PivotTable
Gráfico Dinâmico       PivotChart
Segmentação de Dados   Slicer
Linha do Tempo         Timeline
Conexão de Dados       Data Connection
Modelo de Dados        Data Model
Validação de Dados     Data Validation`} />
    </PageContainer>
  );
}
