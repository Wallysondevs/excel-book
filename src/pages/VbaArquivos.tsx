import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaArquivos() {
  return (
    <PageContainer title="VBA — Manipular arquivos e pastas" subtitle="Ler texto, listar diretório, copiar/mover." difficulty="avancado" timeToRead="7 min">
      <h2>Ler/escrever texto</h2>
      <CodeBlock language="text" code={`' Ler arquivo inteiro:
Dim conteudo As String
Open "C:\\dados\\log.txt" For Input As #1
    conteudo = Input(LOF(1), 1)
Close #1

' Escrever (sobrescrever):
Open "C:\\dados\\saida.txt" For Output As #1
    Print #1, "linha 1"
    Print #1, "linha 2"
Close #1

' Acrescentar:
Open "C:\\dados\\log.txt" For Append As #1
    Print #1, Now & " | " & "evento ocorrido"
Close #1`} />
      <h2>Listar pasta</h2>
      <CodeBlock language="text" code={`Dim arq As String
arq = Dir("C:\\dados\\*.xlsx")
Do While arq <> ""
    Debug.Print arq
    arq = Dir
Loop`} />
      <h2>FileSystemObject (mais poderoso)</h2>
      <CodeBlock language="text" code={`Dim fso As Object, pasta As Object, f As Object
Set fso = CreateObject("Scripting.FileSystemObject")
Set pasta = fso.GetFolder("C:\\dados")

For Each f In pasta.Files
    Debug.Print f.Name, f.Size, f.DateLastModified
Next

fso.CopyFile "C:\\a.txt", "C:\\b.txt", True
fso.MoveFile "C:\\a.txt", "C:\\backup\\a.txt"
fso.DeleteFile "C:\\velho.txt"
fso.CreateFolder "C:\\novo"`} />
      <h2>Pegar pasta com diálogo</h2>
      <CodeBlock language="text" code={`Dim fd As FileDialog
Set fd = Application.FileDialog(msoFileDialogFolderPicker)
If fd.Show = -1 Then
    MsgBox "Pasta: " & fd.SelectedItems(1)
End If`} />
    </PageContainer>
  );
}
