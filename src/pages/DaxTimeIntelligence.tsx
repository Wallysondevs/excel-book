import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DaxTimeIntelligence() {
  return (
    <PageContainer title="DAX — Time Intelligence" subtitle="YTD, MTD, ano anterior, crescimento — em uma linha." difficulty="avancado" timeToRead="8 min">
      <h2>Pré-requisito: Calendário</h2>
      <p dangerouslySetInnerHTML={{ __html: "Tenha uma <strong>tabela Calendário</strong> contínua (sem datas faltando) com: Data, Ano, Mês, Trimestre, Dia da Semana, etc. Marque-a como <strong>Tabela de Datas</strong> no Power Pivot." }} />
      <CodeBlock language="text" code={`-- Criar Calendário em DAX:
Calendário = ADDCOLUMNS(
   CALENDAR( DATE(2020,1,1) ; DATE(2030,12,31) ) ;
   "Ano"   ; YEAR([Date]) ;
   "Mês"   ; MONTH([Date]) ;
   "Mês Nome"; FORMAT([Date]; "mmm") ;
   "Trim"  ; "T" & ROUNDUP(MONTH([Date])/3;0) ;
   "Ano-Mês"; FORMAT([Date]; "yyyy-mm")
)`} />
      <h2>Funções clássicas</h2>
      <CodeBlock language="text" code={`Vendas YTD       = TOTALYTD( [Total Vendas] ; Calendário[Date] )
Vendas QTD       = TOTALQTD( [Total Vendas] ; Calendário[Date] )
Vendas MTD       = TOTALMTD( [Total Vendas] ; Calendário[Date] )

Mesmo período ano anterior:
Vendas LY        = CALCULATE( [Total Vendas] ; SAMEPERIODLASTYEAR(Calendário[Date]) )

Crescimento YoY:
% YoY            = DIVIDE( [Total Vendas] - [Vendas LY] ; [Vendas LY] )

Próximo mês / mês anterior:
Vendas Mês Ant   = CALCULATE( [Total Vendas] ; PREVIOUSMONTH(Calendário[Date]) )
Vendas Próx Mês  = CALCULATE( [Total Vendas] ; NEXTMONTH(Calendário[Date]) )

Janela móvel — últimos 3 meses:
M3M              = CALCULATE( [Total Vendas] ;
                    DATESINPERIOD(Calendário[Date]; MAX(Calendário[Date]); -3; MONTH) )`} />
      <AlertBox type="tip" title="Calendário fiscal">
        <span dangerouslySetInnerHTML={{ __html: "Se seu ano fiscal não fecha em dezembro, use FISCALYEAR ou STARTOFFISCALYEAR." }} />
      </AlertBox>
    </PageContainer>
  );
}
