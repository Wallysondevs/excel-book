import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function n(){return a.jsxs(o,{title:"AGRUPAR / MOSTRAR — funções pequenas que salvam o dia",subtitle:"PROCV, ARRUMAR, MAIÚSCULA, EXATO e companhia.",difficulty:"iniciante",timeToRead:"5 min",children:[a.jsx("h2",{children:"Limpeza de texto"}),a.jsx(e,{language:"text",code:`=ARRUMAR(t)          remove espaços extras
=TIRAR(t)            remove caracteres não-imprimíveis
=MAIÚSCULA(t)        TUDO MAIÚSCULO
=MINÚSCULA(t)        tudo minúsculo
=PRI.MAIÚSCULA(t)    Primeira Letra De Cada Palavra
=NÚM.CARACT(t)       quantidade de caracteres`}),a.jsx("h2",{children:"Comparação rigorosa"}),a.jsx(e,{language:"text",code:`=EXATO(a;b)          compara MAIÚSCULAS x minúsculas
                     (= "abc"="ABC" no Excel é VERDADEIRO; EXATO é FALSO)`}),a.jsx("h2",{children:"Substituir e contar"}),a.jsx(e,{language:"text",code:`=SUBSTITUIR(t; "antigo"; "novo")            todas as ocorrências
=SUBSTITUIR(t; "antigo"; "novo"; 2)         só a 2ª ocorrência
=MUDAR(t; início; quantos; novo)            por posição

Contar palavras:
=NÚM.CARACT(ARRUMAR(A1)) - NÚM.CARACT(SUBSTITUIR(ARRUMAR(A1);" ";"")) + 1`}),a.jsx("h2",{children:"Conversões"}),a.jsx(e,{language:"text",code:`=VALOR("123,45")          texto → número (respeitando vírgula BR)
=TEXTO(1234,5; "#.##0,00") número → texto formatado
=NÚMARÁBICO("XIV")        14
=NUMARABICO("XII")        12
=ROMANO(2025)             "MMXXV"`})]})}export{n as default};
