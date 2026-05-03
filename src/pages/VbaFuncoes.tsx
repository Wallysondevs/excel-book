import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaFuncoes() {
  return (
    <PageContainer title="VBA — Sub vs Function, parâmetros" subtitle="Crie suas funções de planilha e procedimentos automáticos." difficulty="intermediario" timeToRead="6 min">
      <h2>Sub — não retorna nada</h2>
      <CodeBlock language="text" code={`Sub LimparAbas()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        ws.UsedRange.ClearContents
    Next ws
End Sub`} />
      <h2>Function — retorna valor (e pode virar fórmula no Excel)</h2>
      <CodeBlock language="text" code={`Function ICMS(valor As Double, Optional aliquota As Double = 0.18) As Double
    ICMS = valor * aliquota
End Function

' Na planilha: =ICMS(1000)        → 180
'             =ICMS(1000; 0,07)   → 70`} />
      <h2>Parâmetros</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>ByVal</strong>: passa cópia (padrão recomendado)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>ByRef</strong>: passa referência (alterações refletem no chamador)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Optional</strong>: pode ser omitido (com valor padrão)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>ParamArray</strong>: lista variável de argumentos" }} />
      </ul>
      <CodeBlock language="text" code={`Function Maximo(ParamArray nums()) As Double
    Dim m As Double : m = nums(0)
    Dim i As Long
    For i = 1 To UBound(nums)
        If nums(i) > m Then m = nums(i)
    Next
    Maximo = m
End Function

' =Maximo(10; 5; 17; 3)   → 17`} />
    </PageContainer>
  );
}
