import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function n(){return e.jsxs(r,{title:"CLASSIFICAR e CLASSIFICARPOR",subtitle:"Ordene por fórmula — sem mexer nos dados de origem.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"CLASSIFICAR"}),e.jsx(o,{language:"text",code:`=CLASSIFICAR( matriz ; [coluna] ; [ordem] ; [por_coluna] )

ordem   1 = crescente (padrão), -1 = decrescente
por_coluna  FALSO (padrão) classifica linhas, VERDADEIRO classifica colunas`}),e.jsx("h2",{children:"Exemplos"}),e.jsx(o,{language:"text",code:`Lista alfabética de produtos:
=CLASSIFICAR( tblProd[Nome] )

Tabela ordenada por valor desc:
=CLASSIFICAR( tblV ; 5 ; -1 )      → coluna 5 (Valor) descendente`}),e.jsx("h2",{children:"CLASSIFICARPOR"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Permite ordenar por uma coluna que não está no resultado."}}),e.jsx(o,{language:"text",code:`=CLASSIFICARPOR( retorno ; chave1 ; ordem1 ; chave2 ; ordem2 ; ... )

Retornar só nomes ordenados pelo SALÁRIO:
=CLASSIFICARPOR( tblFunc[Nome] ; tblFunc[Salário] ; -1 )

Multi-critério:
=CLASSIFICARPOR( tbl ; tbl[UF]; 1 ; tbl[Valor]; -1 )`})]})}export{n as default};
