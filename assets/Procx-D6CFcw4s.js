import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function d(){return e.jsxs(r,{title:"PROCX (XLOOKUP)",subtitle:"A substituição moderna do PROCV — flexível, rápida e sem pegadinhas.",difficulty:"intermediario",timeToRead:"10 min",children:[e.jsx("h2",{children:"Sintaxe completa"}),e.jsx(o,{language:"text",code:`=PROCX( valor_procurado ;
          matriz_pesquisa ;
          matriz_retorno ;
          [se_não_encontrado] ;
          [modo_correspondência] ;
          [modo_pesquisa] )`}),e.jsx("h2",{children:"Por que substitui PROCV?"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"Procura em <strong>qualquer coluna</strong> (esquerda ou direita)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Argumentos separados para pesquisa e retorno — não usa número de coluna."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Tem <strong>4º argumento embutido</strong> para erro (substitui <code>SE.ERRO</code>)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Pesquisa exata é o padrão (não precisa lembrar do FALSO)."}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Retorna referência (pode receber intervalo inteiro)."}})]}),e.jsx("h2",{children:"Exemplo básico"}),e.jsx(o,{language:"text",code:`=PROCX(B2; tblProd[Código]; tblProd[Nome])
  =PROCX(B2; tblProd[Código]; tblProd[Preço]; "não encontrado")`}),e.jsx("h2",{children:"Buscar à esquerda"}),e.jsx(o,{language:"text",code:`Antes (PROCV impossível):
  | Nome  | Código |
  | Maria |  101   |
  | João  |  102   |

  =PROCX(102; tblA[Código]; tblA[Nome]) → "João"`}),e.jsx("h2",{children:"Modos de correspondência"}),e.jsx(o,{language:"text",code:`0  ou omitido    → exata (padrão)
  -1                → exata ou próximo MENOR
   1                → exata ou próximo MAIOR
   2                → curinga * e ?`}),e.jsx("h2",{children:"Modos de pesquisa"}),e.jsx(o,{language:"text",code:` 1 ou omitido    → primeiro ao último
  -1               → último ao primeiro (último valor encontrado)
   2               → busca binária crescente (rápido)
  -2               → busca binária decrescente`}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"<strong>Dica:</strong> use <code>-1</code> para encontrar a <strong>última ocorrência</strong> (ex: o pedido mais recente de um cliente)."}}),e.jsx("h2",{children:"Retornar várias colunas"}),e.jsx(o,{language:"text",code:`=PROCX(B2; tblProd[Código]; tblProd[[Nome]:[Preço]])
          ↑                          ↑
     procura na coluna Código  retorna intervalo Nome..Preço

  Resultado se espalha (spill) por 2 colunas automaticamente.`}),e.jsx(a,{type:"success",title:"Faça migração!",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Substitua todos os PROCV das suas planilhas por PROCX. O ganho de robustez compensa enormemente."}})})]})}export{d as default};
