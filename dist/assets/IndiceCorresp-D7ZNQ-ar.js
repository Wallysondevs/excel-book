import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(o,{title:"ÍNDICE + CORRESP",subtitle:"A dupla flexível que dominou o Excel antes do PROCX.",difficulty:"avancado",timeToRead:"10 min",children:[e.jsx("h2",{children:"Por que aprender se já tem PROCX?"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Compatibilidade — funcionam desde Excel 2003. Você ainda encontra muito em planilhas legadas e empresas em versões perpétuas."}}),e.jsx("h2",{children:"ÍNDICE — pega valor por linha/coluna"}),e.jsx(a,{language:"text",code:`=ÍNDICE( matriz ; número_linha ; [número_coluna] )

  =ÍNDICE(A1:C100; 5; 2)    → célula B5
  =ÍNDICE(A1:A100; 7)       → A7`}),e.jsx("h2",{children:"CORRESP — descobre a posição"}),e.jsx(a,{language:"text",code:`=CORRESP( valor_procurado ; matriz_pesquisa ; [tipo] )

  Tipos:  0 = exata
          1 = próximo menor (matriz crescente)
         -1 = próximo maior (matriz decrescente)

  =CORRESP("Maria"; A1:A100; 0)    → 7  (Maria está na linha 7)`}),e.jsx("h2",{children:"Combinando"}),e.jsx(a,{language:"text",code:`=ÍNDICE( tblProd[Preço];
          CORRESP(B2; tblProd[Código]; 0))

  Tradução: "ache a posição de B2 na coluna Código,
            e retorne o valor naquela posição da coluna Preço".`}),e.jsx("h2",{children:"Busca cruzada (linha + coluna)"}),e.jsx(a,{language:"text",code:`Tabela: produtos nas linhas, meses nas colunas.

  =ÍNDICE( B2:M100;
          CORRESP("Caneta"; A2:A100; 0);
          CORRESP("Mar"; B1:M1; 0))`}),e.jsx(r,{type:"tip",title:"Performance",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"ÍNDICE+CORRESP é mais rápido que PROCV em bases grandes porque você só pesquisa a coluna necessária, não a tabela inteira."}})})]})}export{l as default};
