import{j as a}from"./index-COQxS6Ql.js";import{P as e}from"./PageContainer-D1JhFxkd.js";import{C as i}from"./CodeBlock-CbV_OQLb.js";function r(){return a.jsxs(e,{title:"DIATRABALHOTOTAL e DIATRABALHO",subtitle:"Conte dias úteis e calcule prazos com feriados nacionais.",difficulty:"intermediario",timeToRead:"6 min",children:[a.jsx("h2",{children:"DIATRABALHOTOTAL"}),a.jsx(i,{language:"text",code:`=DIATRABALHOTOTAL( inicial ; final ; [feriados] )
   → conta dias úteis entre duas datas (seg-sex)

Versão internacional (escolha quais dias são fim de semana):
=DIATRABALHOTOTAL.INTL( inicial ; final ; [tipo_fds] ; [feriados] )

   tipo 1 = sáb-dom (padrão)
   tipo 11 = só domingo
   tipo "1010100" = ter, qui, sáb (string binária seg..dom)`}),a.jsx("h2",{children:"DIATRABALHO"}),a.jsx(i,{language:"text",code:`=DIATRABALHO( inicial ; dias ; [feriados] )
   → soma dias úteis a uma data

Prazo de 10 dias úteis:
=DIATRABALHO( HOJE() ; 10 ; tblFeriados )`}),a.jsx("h2",{children:"Lista de feriados nacionais BR (2025)"}),a.jsx(i,{language:"text",code:`01/01  Confraternização    21/04  Tiradentes
03/03  Carnaval (móvel)    01/05  Trabalho
04/03  Carnaval (móvel)    19/06  Corpus Christi (móvel)
07/09  Independência       12/10  N.S. Aparecida
02/11  Finados             15/11  Proclamação
20/11  Consciência Negra   25/12  Natal

Coloque em uma Tabela "tblFeriados" e use em todas as fórmulas.`})]})}export{r as default};
