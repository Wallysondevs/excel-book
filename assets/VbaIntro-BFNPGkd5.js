import{j as e}from"./index-COQxS6Ql.js";import{P as a}from"./PageContainer-D1JhFxkd.js";import{C as o}from"./CodeBlock-CbV_OQLb.js";import{A as r}from"./AlertBox-BTEjDUYQ.js";function l(){return e.jsxs(a,{title:"Introdução ao VBA",subtitle:"Editor, módulos, Sub, variáveis, MsgBox e seu primeiro script.",difficulty:"avancado",timeToRead:"10 min",children:[e.jsx("h2",{children:"O Editor VBA"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Abra com <code>Alt + F11</code>. Painel esquerdo (<strong>Project Explorer</strong>) mostra módulos. Painel direito é o editor de código."}}),e.jsx(o,{language:"text",code:`VBAProject (Pasta1.xlsm)
  ├── Microsoft Excel Objects
  │   ├── Plan1
  │   ├── Plan2
  │   └── EstaPasta_de_Trabalho
  └── Módulos
      └── Módulo1   ← seu código fica aqui`}),e.jsx("h2",{children:"Inserir um Módulo"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"No Editor VBA: <strong>Inserir → Módulo</strong>. Aí cole código."}}),e.jsx("h2",{children:"Sua primeira Sub"}),e.jsx(o,{language:"vbnet",code:`Sub OlaMundo()
      MsgBox "Olá, " & Application.UserName & "!"
  End Sub`}),e.jsx("p",{dangerouslySetInnerHTML:{__html:"Posicione cursor dentro da Sub e <code>F5</code> para executar. Ou volte ao Excel e <strong>Desenvolvedor → Macros</strong>."}}),e.jsx("h2",{children:"Variáveis e tipos"}),e.jsx(o,{language:"vbnet",code:`Dim nome As String
  Dim idade As Integer
  Dim preco As Double
  Dim ativo As Boolean
  Dim hoje As Date

  nome = "Maria"
  idade = 30
  preco = 19.90
  ativo = True
  hoje = Date     ' data de hoje`}),e.jsx(r,{type:"tip",title:"Sempre Option Explicit",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:'Adicione <code>Option Explicit</code> no topo do módulo. Obriga declarar variáveis (Dim) — evita erros de digitação. Em <strong>Ferramentas → Opções → Editor</strong> marque "Exigir Declaração de Variável" para fazer automático.'}})}),e.jsx("h2",{children:"Acessando células"}),e.jsx(o,{language:"vbnet",code:`Range("A1").Value = 100
  Range("B2:B10").Clear
  Cells(1, 1).Value = "Olá"          ' linha 1, coluna 1 = A1
  Sheets("Plan1").Range("A1").Value
  ActiveSheet.Cells(2, 3).Font.Bold = True`}),e.jsx("h2",{children:"Caixa de mensagem e input"}),e.jsx(o,{language:"vbnet",code:`MsgBox "Processo concluído!", vbInformation, "Aviso"

  Dim nome As String
  nome = InputBox("Qual seu nome?", "Pergunta")
  MsgBox "Olá, " & nome`}),e.jsx("h2",{children:"Comentários"}),e.jsx(o,{language:"vbnet",code:`' tudo após apóstrofo é comentário
  Sub Exemplo()
      ' calcula o imposto
      Range("A1").Value = 100 * 1.18
  End Sub`})]})}export{l as default};
