import{j as a}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function l(){return a.jsxs(i,{title:"Hyperlinks dentro e fora da pasta",subtitle:"Link para célula, planilha, arquivo, web ou e-mail.",difficulty:"iniciante",timeToRead:"4 min",children:[a.jsx("h2",{children:"Função HYPERLINK"}),a.jsx(e,{language:"text",code:`=HYPERLINK( destino ; texto_amigável )

=HYPERLINK( "https://example.com" ; "Visite!" )
=HYPERLINK( "mailto:contato@empresa.com?subject=Olá" ; "Enviar e-mail" )

' Pular para outra célula:
=HYPERLINK( "#Plan2!A1" ; "Ir para Plan2" )

' Abrir arquivo:
=HYPERLINK( "C:\\dados\\anexo.pdf" ; "Abrir PDF" )`}),a.jsx("h2",{children:"Inserir interativo"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"<kbd>Ctrl</kbd>+<kbd>K</kbd> abre o assistente"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Tipos: arquivo/web | local na pasta | novo documento | e-mail"}})]}),a.jsx("h2",{children:"Sumário automático"}),a.jsx(e,{language:"text",code:`Em Plan1 'Sumário', liste os nomes das planilhas e ao lado:
=HYPERLINK( "#'" & A2 & "'!A1" ; "Ir →" )

→ vira navegação rápida em pasta com 50 planilhas`})]})}export{l as default};
