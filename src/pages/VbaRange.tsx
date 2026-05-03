import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaRange() {
  return (
    <PageContainer title="VBA — Range, Cells, Offset, Resize" subtitle="Dominar células é dominar VBA." difficulty="intermediario" timeToRead="7 min">
      <h2>Formas de referência</h2>
      <CodeBlock language="text" code={`Range("A1")              célula A1
Range("A1:C10")          intervalo
Range("MeuNome")         nome definido
Cells(2, 3)              linha 2, coluna 3 = C2  ← ótimo p/ loops
Cells(2, "C")            também aceita letra
[A1]                     atalho — Range("A1")`} />
      <h2>Offset e Resize</h2>
      <CodeBlock language="text" code={`Range("A1").Offset(2, 3)            move: A1 → D3
Range("A1").Resize(5, 2)            redimensiona: A1 → A1:B5
Range("A1").Offset(1).Resize(10)    A2:A11

' Ler última linha de uma coluna:
Dim ult As Long
ult = Cells(Rows.Count, "A").End(xlUp).Row
Range("B1:B" & ult)`} />
      <h2>Ler/escrever em massa</h2>
      <CodeBlock language="text" code={`' RUIM (lento) - célula por célula:
For i = 1 To 10000
    Cells(i, 1) = i
Next

' BOM (rápido) - array em uma operação:
Dim arr(1 To 10000, 1 To 1) As Long
For i = 1 To 10000
    arr(i, 1) = i
Next
Range("A1").Resize(10000, 1).Value = arr`} />
      <AlertBox type="tip" title="Atalho secreto">
        <span dangerouslySetInnerHTML={{ __html: "Sempre que puder, leia o intervalo TODO em um array, processe, devolva. Fica 100x a 1000x mais rápido." }} />
      </AlertBox>
    </PageContainer>
  );
}
