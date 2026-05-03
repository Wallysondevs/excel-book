import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaApi() {
  return (
    <PageContainer title="VBA — Chamadas a APIs Web (HTTP)" subtitle="Consuma JSON e webservices." difficulty="avancado" timeToRead="6 min">
      <h2>GET simples</h2>
      <CodeBlock language="text" code={`Function HttpGet(url As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    http.Open "GET", url, False
    http.setRequestHeader "User-Agent", "Excel-VBA/1.0"
    http.Send
    HttpGet = http.responseText
End Function

' Uso: Debug.Print HttpGet("https://api.exemplo.com/cotacao/USD")`} />
      <h2>POST com JSON</h2>
      <CodeBlock language="text" code={`Function HttpPostJson(url As String, body As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    http.Open "POST", url, False
    http.setRequestHeader "Content-Type", "application/json"
    http.setRequestHeader "Authorization", "Bearer SEU_TOKEN"
    http.Send body
    HttpPostJson = http.responseText
End Function`} />
      <h2>Parsear JSON</h2>
      <p dangerouslySetInnerHTML={{ __html: "VBA não tem parser JSON nativo. Opções:" }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>VBA-JSON</strong> (Tim Hall) — biblioteca leve, importe o módulo" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Query — para JSONs grandes, prefira Power Query e leia a tabela depois" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>ScriptControl</strong> — só funciona em Office 32-bit" }} />
      </ul>
      <AlertBox type="warning" title="Bloqueio corporativo">
        <span dangerouslySetInnerHTML={{ __html: "Muitas redes corporativas bloqueiam HTTP de Excel. Confirme antes de prometer ao cliente." }} />
      </AlertBox>
    </PageContainer>
  );
}
