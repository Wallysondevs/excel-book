import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function VbaIntro() {
    return (
      <PageContainer title="Introdução ao VBA" subtitle="Editor, módulos, Sub, variáveis, MsgBox e seu primeiro script." difficulty="avancado" timeToRead="10 min">
        <h2>O Editor VBA</h2>
      <p>Abra com <code>Alt + F11</code>. Painel esquerdo (<strong>Project Explorer</strong>) mostra módulos. Painel direito é o editor de código.</p>
      <CodeBlock language="text" code={`VBAProject (Pasta1.xlsm)
  ├── Microsoft Excel Objects
  │   ├── Plan1
  │   ├── Plan2
  │   └── EstaPasta_de_Trabalho
  └── Módulos
      └── Módulo1   ← seu código fica aqui`} />
      <h2>Inserir um Módulo</h2>
      <p>No Editor VBA: <strong>Inserir → Módulo</strong>. Aí cole código.</p>
      <h2>Sua primeira Sub</h2>
      <CodeBlock language="vbnet" code={`Sub OlaMundo()
      MsgBox "Olá, " & Application.UserName & "!"
  End Sub`} />
      <p>Posicione cursor dentro da Sub e <code>F5</code> para executar. Ou volte ao Excel e <strong>Desenvolvedor → Macros</strong>.</p>
      <h2>Variáveis e tipos</h2>
      <CodeBlock language="vbnet" code={`Dim nome As String
  Dim idade As Integer
  Dim preco As Double
  Dim ativo As Boolean
  Dim hoje As Date

  nome = "Maria"
  idade = 30
  preco = 19.90
  ativo = True
  hoje = Date     ' data de hoje`} />
      <AlertBox type="tip" title="Sempre Option Explicit">
        Adicione <code>Option Explicit</code> no topo do módulo. Obriga declarar variáveis (Dim) — evita erros de digitação. Em <strong>Ferramentas → Opções → Editor</strong> marque "Exigir Declaração de Variável" para fazer automático.
      </AlertBox>
      <h2>Acessando células</h2>
      <CodeBlock language="vbnet" code={`Range("A1").Value = 100
  Range("B2:B10").Clear
  Cells(1, 1).Value = "Olá"          ' linha 1, coluna 1 = A1
  Sheets("Plan1").Range("A1").Value
  ActiveSheet.Cells(2, 3).Font.Bold = True`} />
      <h2>Caixa de mensagem e input</h2>
      <CodeBlock language="vbnet" code={`MsgBox "Processo concluído!", vbInformation, "Aviso"

  Dim nome As String
  nome = InputBox("Qual seu nome?", "Pergunta")
  MsgBox "Olá, " & nome`} />
      <h2>Comentários</h2>
      <CodeBlock language="vbnet" code={`' tudo após apóstrofo é comentário
  Sub Exemplo()
      ' calcula o imposto
      Range("A1").Value = 100 * 1.18
  End Sub`} />
      </PageContainer>
    );
  }
  