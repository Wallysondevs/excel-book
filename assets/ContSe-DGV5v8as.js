import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function c(){return e.jsxs(a,{title:"CONT.SE & CONT.SES",subtitle:"Contagens condicionais — uma ou múltiplas condições.",difficulty:"intermediario",timeToRead:"6 min",children:[e.jsx("h2",{children:"CONT.SE — uma condição"}),e.jsx(o,{language:"text",code:`=CONT.SE( intervalo ; critério )

  =CONT.SE(A:A; "SP")              → quantos "SP"
  =CONT.SE(B:B; ">10000")          → quantos > 10k
  =CONT.SE(C:C; "*@gmail.com")     → emails do Gmail
  =CONT.SE(A:A; A2)                → quantas vezes A2 aparece`}),e.jsx("h2",{children:"CONT.SES — múltiplas condições"}),e.jsx(o,{language:"text",code:`=CONT.SES( intervalo1 ; crit1 ; intervalo2 ; crit2 ; ... )

  =CONT.SES(tblPed[Estado]; "SP";
            tblPed[Status]; "Pago";
            tblPed[Valor]; ">500")`}),e.jsx("h2",{children:"Casos práticos"}),e.jsx(o,{language:"text",code:`Encontrar duplicatas (1 = único, >1 = repetido):
  B2: =CONT.SE(A:A; A2)

  Numerar ocorrências:
  B2: =CONT.SE(A$2:A2; A2)
  "Caneta", "Caneta", "Lápis" → 1, 2, 1

  % por categoria:
  =CONT.SE(A:A; "Concluído") / CONT.VALORES(A:A)`}),e.jsx(t,{type:"tip",title:"ÚNICO + CONT.SE = ranking",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Combine <code>=ÚNICO(A:A)</code> com <code>CONT.SE</code> para listar valores únicos com sua frequência — ranking instantâneo."}})})]})}export{c as default};
