import{j as e}from"./index-COQxS6Ql.js";import{P as n}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(n,{title:"DAX — Time Intelligence",subtitle:"YTD, MTD, ano anterior, crescimento — em uma linha.",difficulty:"avancado",timeToRead:"8 min",children:[e.jsx("h2",{children:"Pré-requisito: Calendário"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Tenha uma <strong>tabela Calendário</strong> contínua (sem datas faltando) com: Data, Ano, Mês, Trimestre, Dia da Semana, etc. Marque-a como <strong>Tabela de Datas</strong> no Power Pivot."}}),e.jsx(a,{language:"text",code:`-- Criar Calendário em DAX:
Calendário = ADDCOLUMNS(
   CALENDAR( DATE(2020,1,1) ; DATE(2030,12,31) ) ;
   "Ano"   ; YEAR([Date]) ;
   "Mês"   ; MONTH([Date]) ;
   "Mês Nome"; FORMAT([Date]; "mmm") ;
   "Trim"  ; "T" & ROUNDUP(MONTH([Date])/3;0) ;
   "Ano-Mês"; FORMAT([Date]; "yyyy-mm")
)`}),e.jsx("h2",{children:"Funções clássicas"}),e.jsx(a,{language:"text",code:`Vendas YTD       = TOTALYTD( [Total Vendas] ; Calendário[Date] )
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
                    DATESINPERIOD(Calendário[Date]; MAX(Calendário[Date]); -3; MONTH) )`}),e.jsx(o,{type:"tip",title:"Calendário fiscal",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Se seu ano fiscal não fecha em dezembro, use FISCALYEAR ou STARTOFFISCALYEAR."}})})]})}export{l as default};
