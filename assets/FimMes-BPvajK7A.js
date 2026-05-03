import{j as a}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function d(){return a.jsxs(i,{title:"FIMMÊS, DATAM, DIA.DA.SEMANA",subtitle:"Manipulação de datas no fim/início do mês.",difficulty:"intermediario",timeToRead:"5 min",children:[a.jsx("h2",{children:"FIMMÊS"}),a.jsx(e,{language:"text",code:`=FIMMÊS( data ; meses )    → último dia do mês N depois (ou antes)

=FIMMÊS( HOJE() ; 0 )      → último dia deste mês
=FIMMÊS( HOJE() ; -1 )+1   → primeiro dia DESTE mês
=FIMMÊS( HOJE() ; 1 )      → último dia do próximo mês`}),a.jsx("h2",{children:"DATAM"}),a.jsx(e,{language:"text",code:`=DATAM( data ; meses )    → mesma data, N meses depois

=DATAM( "31/01/2025" ; 1 )   → 28/02/2025 (ajusta automático)
=DATAM( HOJE() ; -12 )       → mesma data, 1 ano atrás`}),a.jsx("h2",{children:"DIA.DA.SEMANA"}),a.jsx(e,{language:"text",code:`=DIA.DA.SEMANA( data ; tipo )

tipo 1: dom=1, sáb=7  (padrão)
tipo 2: seg=1, dom=7  ← use este no BR
tipo 3: seg=0, dom=6
tipo 11..17: variações`}),a.jsx("h2",{children:"Numerar semanas"}),a.jsx(e,{language:"text",code:`=NÚMSEMANA( data ; tipo )           padrão americano (dom inicia)
=NÚMSEMANAISO( data )                ISO 8601 (seg inicia, dia 4 = semana 1)
                                     ← use esta para padrão BR`})]})}export{d as default};
