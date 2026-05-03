import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as s}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(r,{title:"INDIRETO — referência por texto",subtitle:"Construa o endereço como string e o Excel resolve.",difficulty:"avancado",timeToRead:"6 min",children:[e.jsx("h2",{children:"Para que serve"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Faz uma string virar referência de verdade. Usado para: alternar entre planilhas, validações em cascata e nomes dinâmicos."}}),e.jsx("h2",{children:"Exemplos"}),e.jsx(a,{language:"text",code:`=INDIRETO("A1")                → conteúdo de A1
=INDIRETO("A" & B1)            → A + número que estiver em B1
=INDIRETO("'" & B1 & "'!A1")   → A1 da planilha cujo nome está em B1
=SOMA( INDIRETO("Vendas!B2:B" & B1) )    → soma B2 até B(B1)`}),e.jsx("h2",{children:"Validação em cascata"}),e.jsx(a,{language:"text",code:`Crie nomes:    Brasil = lista de UFs    SP = lista de cidades de SP
                                       RJ = lista de cidades do RJ ...

Validação UF:        Lista, Origem: =Brasil
Validação Cidade:    Lista, Origem: =INDIRETO(A2)   (A2 contém UF escolhida)`}),e.jsx(s,{type:"warning",title:"Volátil + frágil",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"INDIRETO recalcula sempre e quebra ao renomear planilhas. Use só quando arrays dinâmicos não resolvem."}})})]})}export{l as default};
