import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function m(){return e.jsxs(o,{title:"PGTO, NPER, TAXA, VP, VF — empréstimos e investimentos",subtitle:"As 5 funções fundamentais de matemática financeira.",difficulty:"intermediario",timeToRead:"7 min",children:[e.jsx("h2",{children:"Conceito"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Toda operação financeira tem 5 elementos: <strong>VP</strong> (valor presente), <strong>VF</strong> (valor futuro), <strong>TAXA</strong> (juros por período), <strong>NPER</strong> (número de períodos) e <strong>PGTO</strong> (parcela)."}}),e.jsx("h2",{children:"PGTO — calcular parcela de empréstimo"}),e.jsx(a,{language:"text",code:`=PGTO( taxa ; nper ; vp ; [vf] ; [tipo] )

Empréstimo R$ 50.000 em 36 meses, juros 1,8% ao mês:
=PGTO( 1,8% ; 36 ; -50000 )    → 1.913,42

(Sinal negativo no VP porque ENTRA dinheiro;
 PGTO retorna valor positivo de quanto você PAGA)`}),e.jsx("h2",{children:"NPER — quantas parcelas?"}),e.jsx(a,{language:"text",code:`Quanto tempo para quitar 50.000 pagando 2.000 por mês a 2% am?
=NPER( 2% ; -2000 ; 50000 )    → 32,72 meses`}),e.jsx("h2",{children:"TAXA — qual juros está embutido?"}),e.jsx(a,{language:"text",code:`Loja oferece "à vista 800 ou 12× de 90":
=TAXA( 12 ; -90 ; 800 )    → 4,8% ao mês  (CET ≈ 75% ao ano!)`}),e.jsx("h2",{children:"VP e VF"}),e.jsx(a,{language:"text",code:`Quanto preciso aplicar HOJE para ter 100k em 5 anos a 0,8% am?
=VP( 0,8% ; 60 ; 0 ; -100000 )    → 61.890,00

Quanto terei se aplicar 500 todo mês por 10 anos a 0,7% am?
=VF( 0,7% ; 120 ; -500 )    → 95.700,00`}),e.jsx(r,{type:"warning",title:"Convenção de sinais",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"O Excel usa sinais opostos para <em>entrada</em> e <em>saída</em> de caixa. Erro de sinal é a causa #1 de cálculos errados."}})})]})}export{m as default};
