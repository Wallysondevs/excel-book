import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(a,{title:"PROCV (VLOOKUP)",subtitle:"A função de busca clássica — limitações e quando usar PROCX.",difficulty:"intermediario",timeToRead:"12 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(o,{language:"text",code:`=PROCV( valor_procurado ;
          matriz_tabela ;
          número_coluna ;
          [procurar_intervalo] )`}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Procura <code>valor_procurado</code> na <strong>primeira coluna</strong> de <code>matriz_tabela</code> e retorna o valor da coluna <code>número_coluna</code> dessa mesma linha. Use <strong>FALSO</strong> para correspondência exata (regra geral)."}}),e.jsx("h2",{children:"Exemplo prático"}),e.jsx(o,{language:"text",code:`Tabela de produtos (D2:F100):
  D=Código   E=Nome           F=Preço
  A001       Caneta Azul      3,50
  A002       Caderno          22,00

  Em B2 (digite o código):  A002
  Em C2 (busca o nome):     =PROCV(B2; D2:F100; 2; FALSO) → "Caderno"
  Em D2 (busca o preço):    =PROCV(B2; D$2:F$100; 3; FALSO) → 22,00`}),e.jsx(r,{type:"warning",title:"Limitações do PROCV",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"(1) Só procura na <strong>primeira coluna</strong>. (2) Não busca à esquerda. (3) Quebra se você inserir uma coluna no meio (o número 2 vira errado). (4) Lento em bases grandes."}})}),e.jsx("h2",{children:"Correspondência aproximada (faixas)"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Com VERDADEIRO ou omitido, o PROCV faz busca por faixa — <strong>requer tabela ordenada crescente</strong>. Útil para escalas:"}}),e.jsx(o,{language:"text",code:`Tabela de notas (G2:H6):
  0    F
  3    D
  5    C
  7    B
  9    A

  =PROCV(A2; G$2:H$6; 2; VERDADEIRO)
  A2=8 → "B" (achou o último ≤ 8)`}),e.jsx("h2",{children:"Combinando com referências estruturadas"}),e.jsx(o,{language:"text",code:`=PROCV(B2; tblProdutos; 3; FALSO)
  =PROCV(B2; tblProdutos[[Codigo]:[Preço]]; 3; FALSO)`}),e.jsx("h2",{children:"Erros comuns e correções"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>#N/D</code> — valor não existe ou tem espaços extras. Tente <code>ARRUMAR(B2)</code>."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>#REF!</code> — número de coluna maior que a matriz."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>#NOME?</code> — digitou PROCV errado ou usou separador errado."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Resultado errado — esqueceu o FALSO no quarto argumento."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Tabela cresce e a fórmula não pega — use referência estruturada (tabela)."}})]}),e.jsx(r,{type:"tip",title:"Use PROCX se possível!",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Desde Excel 2021/365, <strong>PROCX</strong> resolve todos esses problemas. Veja o próximo capítulo."}})})]})}export{d as default};
