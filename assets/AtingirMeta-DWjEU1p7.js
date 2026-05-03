import{j as a}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function l(){return a.jsxs(r,{title:"Atingir Meta",subtitle:"Engenharia reversa: o Excel descobre o input necessário para um output.",difficulty:"intermediario",timeToRead:"5 min",children:[a.jsx("h2",{children:"Cenário típico"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:'Você tem uma fórmula complexa e quer saber: "que valor preciso colocar em X para o resultado dar Y?". <strong>Atingir Meta</strong> faz isso por iteração.'}}),a.jsx("h2",{children:"Onde fica"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Dados → Teste de Hipóteses → Atingir Meta</strong>."}}),a.jsx(e,{language:"text",code:`Definir célula:    B5  (a fórmula)
  Para o valor:      10000
  Alterando célula:  B2  (o input que vai variar)`}),a.jsx("h2",{children:"Exemplo: financiamento"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:'Você tem uma planilha com prestação calculada por <code>PGTO()</code>. Pergunta: "qual taxa de juros faria a prestação cair para R$ 800?"'}}),a.jsx(e,{language:"text",code:`B1: 50000     ← valor financiado
  B2: 1,5%      ← taxa mensal
  B3: 60        ← parcelas
  B5: =-PGTO(B2; B3; B1)   = R$ 1.265

  Atingir Meta:
    Definir B5 = 800
    Alterando B2

  Resultado: B2 ≈ 0,12% (taxa que daria prestação 800)`}),a.jsx(t,{type:"warning",title:"Limitações",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Atingir Meta muda <strong>uma única célula</strong>. Para problemas com múltiplas variáveis e restrições, use o <strong>Solver</strong>."}})})]})}export{l as default};
