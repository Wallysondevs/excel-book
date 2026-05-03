import{j as e}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function c(){return e.jsxs(t,{title:"TEXTOANTES e TEXTODEPOIS",subtitle:"Fatie strings sem precisar contar caracteres.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(o,{language:"text",code:`=TEXTOANTES(  texto ; delimitador ; [ocorrência] ; [diferenciar_maiúsc] ; [match_modo] ; [se_não_achar] )
=TEXTODEPOIS( texto ; delimitador ; [ocorrência] ; ... )`}),e.jsx("h2",{children:"Exemplos"}),e.jsx(o,{language:"text",code:`=TEXTOANTES("João da Silva" ; " ")              → "João"
=TEXTODEPOIS("joao@empresa.com" ; "@")           → "empresa.com"
=TEXTOANTES("Produto-A-123" ; "-" ; -1)          → "Produto-A"
=TEXTODEPOIS("Produto-A-123" ; "-" ; -1)         → "123"
=TEXTOANTES(A1; "@" ; ; ; ; "sem @")             → fallback se não tiver

Múltiplos delimitadores:
=TEXTOANTES("a, b; c" ; {","\\;";"})           → "a"`}),e.jsx(a,{type:"tip",title:"Substituem EXT.TEXTO/PROCURAR",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Antes você precisava de <code>=ESQUERDA(A1; PROCURAR("@";A1)-1)</code>. Hoje basta <code>=TEXTOANTES(A1;"@")</code>.'}})})]})}export{c as default};
