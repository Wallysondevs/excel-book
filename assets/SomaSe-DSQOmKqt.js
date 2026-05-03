import{j as o}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function S(){return o.jsxs(t,{title:"SOMASE & SOMASES",subtitle:"Somas condicionais — uma ou várias condições.",difficulty:"intermediario",timeToRead:"8 min",children:[o.jsx("h2",{children:"SOMASE — uma condição"}),o.jsx(e,{language:"text",code:`=SOMASE( intervalo_critério ; critério ; [intervalo_soma] )

  =SOMASE(B:B; "SP"; C:C)
          ↑       ↑     ↑
      onde olhar  o quê  o que somar`}),o.jsx("h2",{children:"Critérios com operadores"}),o.jsx(e,{language:"text",code:`=SOMASE(B:B; ">100"; B:B)        → soma valores > 100
  =SOMASE(A:A; "<>"&""; B:B)       → soma quando A não vazio
  =SOMASE(A:A; "*caneta*"; B:B)    → A contém "caneta"
  =SOMASE(C:C; ">="&HOJE(); D:D)   → datas a partir de hoje
  =SOMASE(A:A; F2; B:B)            → critério em outra célula`}),o.jsx(a,{type:"warning",title:"Operadores entre aspas!",children:o.jsx("span",{dangerouslySetInnerHTML:{__html:'Os símbolos <code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&lt;&gt;</code> precisam vir <strong>dentro de aspas</strong>: <code>"&gt;100"</code>. Para usar valor de célula: <code>"&gt;"&amp;A1</code>.'}})}),o.jsx("h2",{children:"SOMASES — múltiplas condições"}),o.jsx(e,{language:"text",code:`=SOMASES( intervalo_soma ;
            intervalo_crit1 ; crit1 ;
            intervalo_crit2 ; crit2 ; ... )

  =SOMASES(tblVend[Total];
           tblVend[Estado]; "SP";
           tblVend[Mês]; "Janeiro";
           tblVend[Total]; ">1000")`}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Atenção:</strong> em SOMASES o <strong>intervalo de soma é o primeiro</strong> argumento, ao contrário de SOMASE."}}),o.jsx("h2",{children:"MÉDIASE / MÉDIASES e MÁXIMOSES / MÍNIMOSES"}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"Mesma sintaxe de SOMASES, mas calculam média/máximo/mínimo condicional. Disponíveis desde Excel 2016."}}),o.jsx(e,{language:"text",code:`=MÉDIASES(tblV[Preço]; tblV[Categoria]; "Eletrônico")
  =MÁXIMOSES(tblV[Preço]; tblV[Estado]; "SP")
  =MÍNIMOSES(tblV[Data]; tblV[Cliente]; A2)`})]})}export{S as default};
