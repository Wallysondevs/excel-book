import{j as a}from"./index-COQxS6Ql.js";import{P as i}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as t}from"./AlertBox-BTEjDUYQ.js";function n(){return a.jsxs(i,{title:"ÚNICO — remova duplicados com fórmula",subtitle:"Lista distinta sem mexer nos dados originais.",difficulty:"intermediario",timeToRead:"5 min",children:[a.jsx("h2",{children:"Sintaxe"}),a.jsx(e,{language:"text",code:`=ÚNICO( matriz ; [por_coluna] ; [exatamente_uma_vez] )

exatamente_uma_vez = VERDADEIRO retorna só itens
                     que aparecem APENAS UMA vez`}),a.jsx("h2",{children:"Exemplos"}),a.jsx(e,{language:"text",code:`Lista de cidades distintas:
=ÚNICO( tblV[Cidade] )

Combinações cliente+produto distintas:
=ÚNICO( tblV[[Cliente]:[Produto]] )

Clientes que compraram só uma vez:
=ÚNICO( tblV[Cliente] ; FALSO ; VERDADEIRO )

Lista classificada de UFs:
=CLASSIFICAR( ÚNICO(tblV[UF]) )`}),a.jsx("h2",{children:"Padrão clássico: lista para validação dinâmica"}),a.jsx(e,{language:"text",code:`Em uma planilha auxiliar:
G1: =CLASSIFICAR( ÚNICO( tblV[Cliente] ) )

Na validação de dados (lista):
Origem: =Auxiliar!G1#
              ↑ o # faz a lista crescer sozinha`}),a.jsx(t,{type:"tip",title:"ÚNICO ignora vazias?",children:a.jsx("span",{dangerouslySetInnerHTML:{__html:'NÃO. Vazios viram 0 (ou string vazia). Filtre antes: <code>=ÚNICO( FILTRO(col; col&""&lt;&gt;"") )</code>.'}})})]})}export{n as default};
