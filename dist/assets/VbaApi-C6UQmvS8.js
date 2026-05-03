import{j as e}from"./index-COQxS6Ql.js";import{P as r}from"./PageContainer-D1JhFxkd.js";import{C as t}from"./CodeBlock-CbV_OQLb.js";import{A as n}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(r,{title:"VBA — Chamadas a APIs Web (HTTP)",subtitle:"Consuma JSON e webservices.",difficulty:"avancado",timeToRead:"6 min",children:[e.jsx("h2",{children:"GET simples"}),e.jsx(t,{language:"text",code:`Function HttpGet(url As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    http.Open "GET", url, False
    http.setRequestHeader "User-Agent", "Excel-VBA/1.0"
    http.Send
    HttpGet = http.responseText
End Function

' Uso: Debug.Print HttpGet("https://api.exemplo.com/cotacao/USD")`}),e.jsx("h2",{children:"POST com JSON"}),e.jsx(t,{language:"text",code:`Function HttpPostJson(url As String, body As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    http.Open "POST", url, False
    http.setRequestHeader "Content-Type", "application/json"
    http.setRequestHeader "Authorization", "Bearer SEU_TOKEN"
    http.Send body
    HttpPostJson = http.responseText
End Function`}),e.jsx("h2",{children:"Parsear JSON"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"VBA não tem parser JSON nativo. Opções:"}}),e.jsxs("ul",{children:[e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>VBA-JSON</strong> (Tim Hall) — biblioteca leve, importe o módulo"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"Power Query — para JSONs grandes, prefira Power Query e leia a tabela depois"}}),e.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ScriptControl</strong> — só funciona em Office 32-bit"}})]}),e.jsx(n,{type:"warning",title:"Bloqueio corporativo",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:"Muitas redes corporativas bloqueiam HTTP de Excel. Confirme antes de prometer ao cliente."}})})]})}export{l as default};
