import{j as a}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function s(){return a.jsxs(o,{title:"Tabela de Dados (1 e 2 variáveis)",subtitle:"What-if: veja como o resultado muda variando 1 ou 2 entradas.",difficulty:"intermediario",timeToRead:"6 min",children:[a.jsx("h2",{children:"1 variável — sensibilidade da parcela"}),a.jsx(e,{language:"text",code:`Modelo:    B1 = 50000  (valor)
            B2 = 1,8%   (taxa)
            B3 = 36     (meses)
            B4 = =PGTO(B2;B3;-B1)    parcela

Cenários:
   D2..D8: 12, 24, 36, 48, 60, 72, 84  (variar meses)
   E1: =B4    (referência ao resultado)

Selecione D2:E8 (incluindo cabeçalho-resultado em E1):
   Dados → Teste de Hipóteses → Tabela de Dados
   Célula de entrada da COLUNA: B3
   → preenche E2:E8 com a parcela para cada prazo`}),a.jsx("h2",{children:"2 variáveis — taxa × prazo"}),a.jsx(e,{language:"text",code:`Layout:
            12     24     36     48     60     ← prazo
   1,5%
   1,8%     [parcela aqui ↓]
   2,0%
   2,2%

Em A1 coloque =B4 (resultado)
Selecione A1:F5
   Tabela de Dados:
      Linha (prazo): B3
      Coluna (taxa): B2
   → preenche tudo de uma vez`})]})}export{s as default};
