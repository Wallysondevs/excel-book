import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as i}from"./CodeBlock-CbV_OQLb.js";function s(){return a.jsxs(o,{title:"MED, MODO, DESVPAD, VAR — descritiva no Excel",subtitle:"Resumo estatístico de uma amostra de dados.",difficulty:"intermediario",timeToRead:"6 min",children:[a.jsx("h2",{children:"Funções"}),a.jsx(i,{language:"text",code:`MED(intervalo)             mediana (50%)
MODO.ÚNICO(int)            valor mais frequente
MODO.MULT(int)             todos os modos (matriz)
DESVPAD.A(int)             desvio padrão amostral
DESVPAD.P(int)             desvio padrão populacional
VAR.A(int)                 variância amostral
VAR.P(int)                 variância populacional
MÁXIMO/MÍNIMO              extremos
MAIOR(int; k)              k-ésimo maior
MENOR(int; k)              k-ésimo menor`}),a.jsx("h2",{children:"Exemplo: top 3 valores"}),a.jsx(i,{language:"text",code:`=MAIOR( tbl[Valor] ; 1 )    1º maior
=MAIOR( tbl[Valor] ; 2 )    2º maior
=MAIOR( tbl[Valor] ; 3 )    3º maior

Em uma fórmula só (array dinâmico):
=MAIOR( tbl[Valor] ; SEQUÊNCIA(3) )`}),a.jsx("h2",{children:"Coeficiente de variação"}),a.jsx(i,{language:"text",code:`=DESVPAD.A(int) / MÉDIA(int)
   → mostra dispersão relativa (útil p/ comparar conjuntos diferentes)`})]})}export{s as default};
