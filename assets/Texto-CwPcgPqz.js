import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as o}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(r,{title:"Funções de Texto",subtitle:"MAIÚSCULA, ESQUERDA, EXT.TEXTO, CONCAT, SUBSTITUIR, ARRUMAR.",difficulty:"intermediario",timeToRead:"10 min",children:[e.jsx("h2",{children:"Caixa"}),e.jsx(a,{language:"text",code:`=MAIÚSCULA("oi")     → "OI"
  =MINÚSCULA("OI")     → "oi"
  =PRI.MAIÚSCULA("ana paula") → "Ana Paula"`}),e.jsx("h2",{children:"Cortar pedaços"}),e.jsx(a,{language:"text",code:`=ESQUERDA(A1; 3)        → primeiros 3 caracteres
  =DIREITA(A1; 4)         → últimos 4 caracteres
  =EXT.TEXTO(A1; 5; 3)    → 3 caracteres a partir da posição 5
  =NÚM.CARACT(A1)         → quantos caracteres tem`}),e.jsx("h2",{children:"Procurar e substituir"}),e.jsx(a,{language:"text",code:`=LOCALIZAR("@"; A1)      → posição do @ (case-insensitive)
  =PROCURAR("@"; A1)       → idem mas case-sensitive
  =SUBSTITUIR(A1; "."; "/") → troca todos . por /
  =SUBSTITUIR(A1; "-"; ""; 1)  → só a 1ª ocorrência`}),e.jsx("h2",{children:"Limpar e juntar"}),e.jsx(a,{language:"text",code:`=ARRUMAR(A1)             → remove espaços extras (mantém 1 entre palavras)
  =TIRAR(A1)               → remove caracteres não imprimíveis
  =CONCAT(A1; " "; B1)     → junta vários textos
  =UNIRTEXTO("; "; VERDADEIRO; A2:A100) → junta com separador, ignora vazios`}),e.jsx("h2",{children:"Dividir texto (funções dinâmicas)"}),e.jsx(a,{language:"text",code:`=DIVIDIRTEXTO("ana,bia,caio"; ",")  → ["ana"; "bia"; "caio"]
  =DIVIDIRTEXTO(A1; " ")              → divide por espaço

  Combine com ÍNDICE para pegar uma parte:
  =ÍNDICE(DIVIDIRTEXTO(A1;" "); 1)   → primeira palavra`}),e.jsx("h2",{children:"Conversão"}),e.jsx(a,{language:"text",code:`=VALOR("123,45")    → 123,45 (texto → número)
  =TEXTO(1234,56; "R$ #.##0,00")   → "R$ 1.234,56"
  =TEXTO(HOJE(); "dddd, dd 'de' mmmm 'de' aaaa")
     → "domingo, 03 de maio de 2026"`}),e.jsx(o,{type:"tip",title:"TEXTO formata sem perder valor",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Use <code>TEXTO()</code> dentro de concatenações para preservar o formato: <code>="Total: "&TEXTO(A1;"R$ #.##0,00")</code>.'}})})]})}export{d as default};
