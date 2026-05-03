import{j as a}from"./index-COQxS6Ql.js";import{P as e}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function r(){return a.jsxs(e,{title:"ENDEREÇO, LIN, COL e CÉL",subtitle:"Construa endereços de células de forma programática.",difficulty:"avancado",timeToRead:"5 min",children:[a.jsx("h2",{children:"LIN e COL"}),a.jsx(o,{language:"text",code:`=LIN()         → número da linha desta célula
=COL()         → número da coluna
=LIN(B5)       → 5
=COL(D2)       → 4
Útil para: numeração 1,2,3 que mantém ao filtrar:
=SUBTOTAL(3; $A$2:A2)   ou   =LIN()-1`}),a.jsx("h2",{children:"ENDEREÇO"}),a.jsx(o,{language:"text",code:`=ENDEREÇO( linha ; coluna ; [tipo_abs] ; [estilo] ; [planilha] )

=ENDEREÇO(5;3)            → "$C$5"
=ENDEREÇO(5;3;4)          → "C5"  (relativa)
=ENDEREÇO(5;3;1;1;"Plan2")  → "Plan2!$C$5"

Combine com INDIRETO:
=INDIRETO(ENDEREÇO(LIN()+1;3))   → célula uma linha abaixo, coluna C`}),a.jsx("h2",{children:"CÉL — informação sobre uma célula"}),a.jsx(o,{language:"text",code:`=CÉL("endereço";A1)   → "$A$1"
=CÉL("conteúdo";A1)   → o valor
=CÉL("nomearquivo";A1)  → caminho completo da pasta
=CÉL("formato";A1)    → código de formato`})]})}export{r as default};
