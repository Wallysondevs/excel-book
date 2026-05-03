import{j as e}from"./index-COQxS6Ql.js";import{P as s}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";function i(){return e.jsxs(s,{title:"DESLOC (OFFSET) — intervalo dinâmico",subtitle:"Construa referências que mudam de forma e tamanho.",difficulty:"avancado",timeToRead:"6 min",children:[e.jsx("h2",{children:"Sintaxe"}),e.jsx(a,{language:"text",code:`=DESLOC( ref ; deslocar_linhas ; deslocar_colunas ; [altura] ; [largura] )

=DESLOC(A1; 4; 2)              → C5 (4 linhas abaixo, 2 colunas à direita)
=DESLOC(A1; 0; 0; 10; 1)       → A1:A10
=DESLOC(A1; 0; 0; CONT.NÚM(A:A); 1)  → cresce conforme dados`}),e.jsx("h2",{children:"Caso clássico — gráfico dinâmico"}),e.jsx(a,{language:"text",code:`Sempre pegar os ÚLTIMOS 12 meses:
Nome:     UltimosMeses
Refere-se a: =DESLOC(Dados!$B$2; CONT.NÚM(Dados!$B:$B)-12; 0; 12; 1)

Use esse Nome como série do gráfico.`}),e.jsx("h2",{children:"Cuidados"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Volátil</strong> — recalcula a cada mudança da pasta (lento em planilhas grandes)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Em pastas modernas, prefira <strong>Tabelas (Ctrl+T)</strong> + <strong>arrays dinâmicos</strong>"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Para gráficos dinâmicos modernos: use Tabela + Tabela Dinâmica + Slicer"}})]})]})}export{i as default};
