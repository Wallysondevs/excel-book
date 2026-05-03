import{j as e}from"./index-COQxS6Ql.js";import{P as o}from"./PageContainer-D1JhFxkd.js";import{C as a}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(o,{title:"Erros de fórmula — significado e cura",subtitle:"#REF!, #DIV/0!, #N/D, #VALOR!, #NOME?, #NULO!, #NÚM!, #SPILL!",difficulty:"intermediario",timeToRead:"7 min",children:[e.jsx("h2",{children:"Tabela de erros"}),e.jsx(a,{language:"text",code:`#####     coluna estreita demais (alargue)
#REF!     referência inválida (linha/coluna apagada)
#DIV/0!   divisão por zero
#N/D      não disponível (PROCV não achou)
#VALOR!   tipo errado (texto onde precisava número)
#NOME?    nome de função/intervalo desconhecido (typo)
#NULO!    interseção vazia entre intervalos
#NÚM!     número fora do domínio (raiz de negativo, etc)
#SPILL!   array dinâmico sem espaço para "derramar"
#CALC!    cálculo de array com problema lógico
#GETTING_DATA  dado vindo de fonte externa (espere)`}),e.jsx("h2",{children:"#N/D em PROCV — diagnóstico"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Valor procurado não existe (verifique espaços extras com <code>=ARRUMAR()</code>)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:'Tipo diferente: número vs texto (<code>=A1*1</code> ou <code>=A1&""</code> para forçar)'}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Maiúsculas/minúsculas: PROCV ignora, mas atenção a acentos invisíveis"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Tabela mudou e a coluna_índice virou outra coisa"}})]}),e.jsx("h2",{children:"#SPILL!"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Aparece em fórmulas de array dinâmico (PROCX, FILTRO, ÚNICO…). Causa: alguma célula no caminho do 'derramamento' não está vazia. Apague o conteúdo abaixo/direita e o array preenche sozinho."}}),e.jsx(r,{type:"tip",title:"Ocultar #N/D em PROCV",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Use <code>=PROCX(B2; tabela; retorno; "")</code> ou envolva com <code>=SEERRO(formula; "")</code>.'}})})]})}export{d as default};
