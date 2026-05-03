import{j as a}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function l(){return a.jsxs(t,{title:"Referências (Relativa, Absoluta, Mista)",subtitle:"$A$1, A$1, $A1, A1 — entendendo o $ que muda tudo.",difficulty:"iniciante",timeToRead:"8 min",children:[a.jsx("h2",{children:"Por que existem 4 tipos?"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Quando você arrasta uma fórmula, o Excel <strong>ajusta as referências automaticamente</strong>. Às vezes isso é o que queremos, às vezes não. O cifrão (<code>$</code>) trava o que vier na frente dele."}}),a.jsx(e,{language:"text",code:`Tipo       | Exemplo  | Coluna  | Linha
-----------+----------+---------+--------
Relativa   |  A1      | muda    | muda
Absoluta   |  $A$1    | trava   | trava
Mista      |  $A1     | trava   | muda
Mista      |  A$1     | muda    | trava`}),a.jsx(r,{type:"tip",title:"Atalho indispensável: F4",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:"Com o cursor sobre uma referência na barra de fórmulas, pressione <code>F4</code> repetidamente para alternar: A1 → $A$1 → A$1 → $A1 → A1."}})}),a.jsx("h2",{children:"Exemplo: tabuada"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Construir uma tabuada 1×1 a 10×10 com uma única fórmula. Linha 1 tem 1..10, coluna A tem 1..10. Em B2:"}}),a.jsx(e,{language:"text",code:`=$A2 * B$1
        ↑      ↑
   trava A   trava 1

Arrasta para B2:K11 e está pronta a tabuada inteira.`}),a.jsx("h2",{children:"Exemplo: aplicar uma alíquota"}),a.jsx(e,{language:"text",code:`A1: 10%        ← imposto fixo
B2: 100        ← valor
C2: =B2*$A$1   → 10
Arrasta C2 para baixo: $A$1 NÃO muda, B2 vira B3, B4...`}),a.jsx("h2",{children:"Referência a outra planilha ou pasta"}),a.jsx(e,{language:"text",code:`=Janeiro!A10                  → A10 da planilha Janeiro
='Vendas 2026'!B5             → planilha com espaço no nome
=[Outra.xlsx]Plan1!C3         → outra pasta de trabalho aberta`}),a.jsx("h2",{children:"Referência 3D"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:"Soma a mesma célula em várias planilhas:"}}),a.jsx(e,{language:"text",code:`=SOMA(Jan:Dez!B5)
       ↑       ↑
   primeira  última planilha`})]})}export{l as default};
