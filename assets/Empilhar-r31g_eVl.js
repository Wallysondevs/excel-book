import{j as i}from"./index-COQxS6Ql.js";import{P as e}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";function o(){return i.jsxs(e,{title:"EMPILHARV / EMPILHARH / EXPANDIR / PEGAR",subtitle:"Combine, redimensione e fatie matrizes facilmente.",difficulty:"intermediario",timeToRead:"6 min",children:[i.jsx("h2",{children:"EMPILHARV / EMPILHARH"}),i.jsx(a,{language:"text",code:`=EMPILHARV( matriz1 ; matriz2 ; ... )    junta uma SOBRE a outra
=EMPILHARH( matriz1 ; matriz2 ; ... )    junta uma AO LADO da outra

Ex: consolidar listas de 3 filiais:
=EMPILHARV( filA[Cliente] ; filB[Cliente] ; filC[Cliente] )

→ depois envolva com ÚNICO/CLASSIFICAR:
=CLASSIFICAR( ÚNICO( EMPILHARV(filA[Cliente];filB[Cliente];filC[Cliente]) ) )`}),i.jsx("h2",{children:"PEGAR / RETIRAR"}),i.jsx(a,{language:"text",code:`=PEGAR( matriz ; linhas ; [colunas] )
   negativo = pega do FIM

=PEGAR( tbl[Valor] ; 5 )       primeiros 5
=PEGAR( tbl[Valor] ; -5 )      últimos 5
=PEGAR( CLASSIFICAR(tbl;5;-1) ; 10 )   top 10 por valor

=RETIRAR( matriz ; linhas ; [colunas] )
   tira N linhas do início (negativo = do fim)`}),i.jsx("h2",{children:"EXPANDIR"}),i.jsx(a,{language:"text",code:`=EXPANDIR( matriz ; linhas ; [colunas] ; [preencher] )

Útil para padronizar tamanho:
=EXPANDIR( vendas_jan ; 31 ; 1 ; 0 )
   força para 31 linhas, preenche faltantes com 0`})]})}export{o as default};
