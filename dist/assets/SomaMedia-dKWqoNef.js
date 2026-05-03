import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(a,{title:"SOMA, MÉDIA, CONT.NÚM",subtitle:"As funções estatísticas mais usadas — e suas variações úteis.",difficulty:"iniciante",timeToRead:"8 min",children:[e.jsx("h2",{children:"SOMA — somatório"}),e.jsx(o,{language:"text",code:`=SOMA(A1:A10)
  =SOMA(A1;A5;A10)            → soma só essas 3
  =SOMA(A1:A10;C1:C10)        → dois intervalos
  =SOMA(tblVendas[Total])     → coluna inteira de tabela`}),e.jsx("h2",{children:"MÉDIA — média aritmética"}),e.jsx(o,{language:"text",code:`=MÉDIA(B2:B100)
  =MÉDIAA(B2:B100)            → considera texto e booleanos
  =MED(B2:B100)               → mediana (valor do meio)
  =MODO.ÚNICO(B2:B100)        → moda (mais frequente)`}),e.jsx("h2",{children:"Contagem — três variações importantes"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>CONT.NÚM(A1:A100)</code> — conta apenas números."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>CONT.VALORES(A1:A100)</code> — conta tudo que não é vazio (texto + número)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<code>CONTAR.VAZIO(A1:A100)</code> — conta células vazias."}})]}),e.jsx("h2",{children:"MÁXIMO e MÍNIMO"}),e.jsx(o,{language:"text",code:`=MÁXIMO(B2:B100)
  =MÍNIMO(B2:B100)
  =MAIOR(B2:B100;3)     → terceiro maior valor
  =MENOR(B2:B100;2)     → segundo menor valor`}),e.jsx("h2",{children:"AutoSoma — Alt + ="}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Selecione a célula vazia abaixo (ou à direita) de uma sequência de números e pressione <code>Alt + =</code>. O Excel insere automaticamente <code>=SOMA(...)</code> com o intervalo certo."}}),e.jsx(t,{type:"tip",title:"SOMA ignora texto",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Se houver texto no intervalo, <code>SOMA</code> ignora silenciosamente. Já <code>=A1+A2</code> dará <code>#VALOR!</code> se A1 ou A2 forem texto."}})}),e.jsx("h2",{children:"AGREGAR — soma ignorando erros e ocultos"}),e.jsx(o,{language:"text",code:`=AGREGAR(9; 6; A1:A100)
          ↑   ↑    ↑
         SOMA ignora erros  intervalo

  Códigos de função: 9=SOMA, 1=MÉDIA, 2=CONT.NÚM, 4=MÁX, 5=MÍN
  Opções: 6=ignora erros, 7=ignora linhas ocultas, 5=ambos`})]})}export{l as default};
