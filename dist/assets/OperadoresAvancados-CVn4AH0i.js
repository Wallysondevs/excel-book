import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";function t(){return e.jsxs(a,{title:"Operadores e precedência",subtitle:"Quando o Excel multiplica antes de somar — e como controlar.",difficulty:"intermediario",timeToRead:"5 min",children:[e.jsx("h2",{children:"Tipos de operadores"}),e.jsx(o,{language:"text",code:`Aritméticos:    +  -  *  /  ^  %
Comparação:     =  <>  >  <  >=  <=
Texto:          &  (concatenação)
Referência:     :  (intervalo)   ;  (união)   ESPAÇO (interseção)`}),e.jsx("h2",{children:"Ordem de precedência"}),e.jsx(o,{language:"text",code:`1. : (intervalo)
2. ESPAÇO (interseção)
3. ; (união)
4. - (negativo)        Ex: -2^2 = 4 (e não -4!)
5. % (porcentagem)
6. ^ (potência)
7. * /
8. + -
9. & (concatenação)
10. = <> > < >= <=`}),e.jsx("h2",{children:"Use parênteses sempre que houver dúvida"}),e.jsx(o,{language:"text",code:`=2+3*4         → 14   (multiplica antes)
=(2+3)*4       → 20
=-2^2          → 4    (negativo aplica primeiro!)
=-(2^2)        → -4
=A1:A10 B1:B10 → interseção (vazio se não cruzam)`}),e.jsx("h2",{children:"Operador de interseção (espaço)"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Pouco conhecido, mas útil com nomes definidos: se você nomeou colunas como <code>Janeiro</code> e linhas como <code>Vendas</code>, então <code>=Janeiro Vendas</code> retorna a célula no cruzamento."}})]})}export{t as default};
