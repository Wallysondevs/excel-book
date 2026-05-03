import{j as e}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";function r(){return e.jsxs(i,{title:"VPL, TIR, MTIR, XVPL, XTIR — análise de investimentos",subtitle:"Avalie projetos com fluxos de caixa irregulares.",difficulty:"avancado",timeToRead:"7 min",children:[e.jsx("h2",{children:"VPL — Valor Presente Líquido"}),e.jsx(a,{language:"text",code:`=VPL( taxa ; valor1 ; valor2 ; ... ) + investimento_inicial

ATENÇÃO: o investimento INICIAL fica fora!
   Ano 0  -100.000   ← fora da função
   Ano 1   30.000
   Ano 2   40.000
   Ano 3   50.000

=VPL( 10% ; B2:B4 ) + B1     onde B1 = -100000`}),e.jsx("h2",{children:"TIR — Taxa Interna de Retorno"}),e.jsx(a,{language:"text",code:`=TIR( fluxos )
   ↑ aqui o investimento inicial entra no intervalo (negativo)

Decisão:
   TIR > custo de capital  → projeto viável
   TIR < custo de capital  → rejeitar`}),e.jsx("h2",{children:"MTIR — TIR modificada"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"TIR clássica assume reinvestimento à própria TIR (irreal). MTIR permite definir taxa de reinvestimento e financiamento separadamente."}}),e.jsx(a,{language:"text",code:"=MTIR( fluxos ; taxa_financ ; taxa_reinv )"}),e.jsx("h2",{children:"XVPL e XTIR — datas irregulares"}),e.jsx(a,{language:"text",code:`Para fluxos em datas não periódicas:
=XVPL( taxa ; valores ; datas )
=XTIR( valores ; datas ; [estimativa] )

→ ideais para projetos reais (não tudo no fim do mês)`})]})}export{r as default};
