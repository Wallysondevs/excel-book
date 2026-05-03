import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(o,{title:"LAMBDA — crie suas próprias funções",subtitle:"Encapsule lógica em fórmula reutilizável, sem VBA.",difficulty:"avancado",timeToRead:"8 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(a,{language:"text",code:`=LAMBDA( parametro1 ; parametro2 ; ... ; calculo )( argumento1 ; argumento2 ; ... )

Teste rápido (chamada inline):
=LAMBDA( a ; b ; a^2 + b^2 )( 3 ; 4 )    →  25`}),e.jsx("h2",{children:"Salvando como função nomeada"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Fórmulas → Gerenciador de Nomes → Novo</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Nome: <code>HIPOTENUSA</code>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Refere-se a: <code>=LAMBDA(a;b; RAIZ(a^2+b^2))</code>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Agora em qualquer célula: <code>=HIPOTENUSA(3;4)</code> → 5"}})]}),e.jsx("h2",{children:"Exemplo útil — DataPorExtenso"}),e.jsx(a,{language:"text",code:`Nome: DATAPOREXTENSO
=LAMBDA( d ;
  TEXTO(d ; "d") & " de " &
  TEXTO(d ; "mmmm") & " de " &
  TEXTO(d ; "aaaa")
)

Uso:  =DATAPOREXTENSO(HOJE())  →  "5 de março de 2025"`}),e.jsx("h2",{children:"Recursão (sem loops)"}),e.jsx(a,{language:"text",code:`Nome: REVERTERTEXTO
=LAMBDA( txt ;
  SE( NÚM.CARACT(txt) <= 1 ;
      txt ;
      DIREITA(txt;1) & REVERTERTEXTO(ESQUERDA(txt;NÚM.CARACT(txt)-1))
  )
)

=REVERTERTEXTO("Excel")  →  "lecxE"`}),e.jsx(t,{type:"warning",title:"Compatibilidade",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Pasta com LAMBDA aberta em Excel sem suporte mostra <code>#NOME?</code>. Avise quem vai abrir."}})})]})}export{d as default};
