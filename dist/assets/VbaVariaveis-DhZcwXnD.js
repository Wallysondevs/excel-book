import{j as e}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as n}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(t,{title:"VBA — Variáveis, tipos e escopo",subtitle:"Dim, Const, escopo de procedimento, módulo e projeto.",difficulty:"intermediario",timeToRead:"6 min",children:[e.jsx("h2",{children:"Tipos comuns"}),e.jsx(o,{language:"text",code:`Integer    -32768 a 32767       (use Long no lugar — Int é legacy)
Long       inteiro 32 bits
Double     número decimal
String     texto
Boolean    True / False
Date       data e hora
Variant    qualquer (lento, evite quando possível)
Object     referência genérica
Range      intervalo do Excel
Worksheet  planilha
Workbook   pasta`}),e.jsx("h2",{children:"Declaração"}),e.jsx(o,{language:"text",code:`Option Explicit                ' Sempre coloque! Força declarar variáveis

Sub Exemplo()
    Dim total As Double
    Dim nome As String
    Dim itens As Long
    Const TAXA As Double = 0.18
    Const NOME_PADRAO As String = "Sem nome"

    total = 1500
    nome = "Ana"
    MsgBox nome & " - R$ " & total
End Sub`}),e.jsx("h2",{children:"Escopo"}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Local</strong>: <code>Dim</code> dentro de Sub/Function — só vive ali"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Módulo</strong>: <code>Dim</code> ou <code>Private</code> no topo do módulo (acima da 1ª Sub)"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Projeto</strong>: <code>Public</code> no topo — visível em qualquer módulo"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Estática</strong>: <code>Static</code> — preserva valor entre execuções"}})]}),e.jsx(n,{type:"warning",title:"Option Explicit",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Sem essa linha, VBA cria variáveis na hora se você digitar <code>tota = 5</code> em vez de <code>total</code>. Bug silencioso garantido."}})})]})}export{l as default};
