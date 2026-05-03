import{j as e}from"./index-COQxS6Ql.js";import{P as A}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(A,{title:"Funções de Data e Hora",subtitle:"HOJE, AGORA, DATAM, DIATRABALHOTOTAL e cálculos do dia a dia.",difficulty:"intermediario",timeToRead:"9 min",children:[e.jsx("h2",{children:"Datas atuais"}),e.jsx(a,{language:"text",code:`=HOJE()       → 03/05/2026 (atualiza ao abrir)
  =AGORA()      → 03/05/2026 14:35

  Para fixar: copie e cole especial → valores.
  Atalho: Ctrl + ; (data) e Ctrl + Shift + ; (hora).`}),e.jsx("h2",{children:"Construir e desmontar datas"}),e.jsx(a,{language:"text",code:`=DATA(2026; 5; 3)        → 03/05/2026
  =ANO(A1)                 → 2026
  =MÊS(A1)                 → 5
  =DIA(A1)                 → 3
  =DIA.DA.SEMANA(A1; 2)    → 1=seg, 2=ter, ..., 7=dom
  =NÚMSEMANA(A1)           → semana do ano`}),e.jsx("h2",{children:"Diferenças entre datas"}),e.jsx(a,{language:"text",code:`=B1-A1                       → diferença em dias
  =DATADIF(A1; B1; "Y")        → anos completos
  =DATADIF(A1; B1; "M")        → meses completos
  =DATADIF(A1; B1; "D")        → dias
  =DATADIF(A1; B1; "YM")       → meses ignorando ano
  =DATADIF(A1; B1; "MD")       → dias ignorando mês

  Idade: =DATADIF(B1; HOJE(); "Y")`}),e.jsx("h2",{children:"Avançar e voltar no tempo"}),e.jsx(a,{language:"text",code:`=DATAM(A1; 3)        → A1 + 3 meses
  =DATAM(A1; -6)       → A1 - 6 meses
  =FIMMÊS(A1; 0)       → último dia do mês de A1
  =FIMMÊS(A1; 1)       → último dia do PRÓXIMO mês
  =A1 + 30             → 30 dias depois`}),e.jsx("h2",{children:"Dias úteis"}),e.jsx(a,{language:"text",code:`=DIATRABALHOTOTAL(A1; B1)         → dias úteis entre datas
  =DIATRABALHOTOTAL(A1; B1; feriados)
  =DIA.TRABALHO(A1; 10)             → 10º dia útil após A1
  =DIA.TRABALHO.INTL(A1; 10; 11)    → dom como único dia não útil`}),e.jsx(o,{type:"info",title:"Datas anteriores a 1900",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"O Excel não reconhece datas antes de 01/01/1900 como datas reais — vira texto."}})}),e.jsx("h2",{children:"Funções de hora"}),e.jsx(a,{language:"text",code:`=TEMPO(14; 30; 0)    → 14:30:00
  =HORA(A1)            → hora
  =MINUTO(A1)
  =SEGUNDO(A1)

  Soma de horas além de 24h: formate como [h]:mm`})]})}export{d as default};
