import{j as o}from"./index-COQxS6Ql.js";import{P as t}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";import{A as a}from"./AlertBox-BTEjDUYQ.js";function i(){return o.jsxs(t,{title:"UserForms",subtitle:"Formulários customizados em VBA para aplicações no Excel.",difficulty:"avancado",timeToRead:"8 min",children:[o.jsx("h2",{children:"Conceito"}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"Um <strong>UserForm</strong> é uma janela personalizada criada no Editor VBA, com botões, caixas de texto, listas — uma mini-aplicação dentro do Excel."}}),o.jsx("h2",{children:"Criar"}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"Editor VBA → <strong>Inserir → UserForm</strong>. Abre janela em branco e a Caixa de Ferramentas."}}),o.jsx("h2",{children:"Controles principais"}),o.jsxs("ul",{children:[o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Label</strong> — texto fixo (rótulo)."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>TextBox</strong> — caixa de texto."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ComboBox</strong> — dropdown."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>ListBox</strong> — lista (seleção múltipla opcional)."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>CheckBox / OptionButton</strong> — caixa de seleção / botão de opção."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>CommandButton</strong> — botão de ação."}}),o.jsx("li",{dangerouslySetInnerHTML:{__html:"<strong>Frame</strong> — agrupa controles."}})]}),o.jsx("h2",{children:"Exemplo: cadastro de cliente"}),o.jsx(e,{language:"vbnet",code:`' Duplo clique no botão "Salvar":
  Private Sub btnSalvar_Click()
      Dim ws As Worksheet
      Dim linha As Long
      Set ws = Sheets("Clientes")
      linha = ws.Cells(Rows.Count, 1).End(xlUp).Row + 1

      ws.Cells(linha, 1).Value = txtNome.Value
      ws.Cells(linha, 2).Value = txtEmail.Value
      ws.Cells(linha, 3).Value = cboEstado.Value

      MsgBox "Cliente salvo!", vbInformation
      Unload Me
  End Sub

  ' Inicialização do form (preencher combobox):
  Private Sub UserForm_Initialize()
      cboEstado.AddItem "SP"
      cboEstado.AddItem "RJ"
      cboEstado.AddItem "MG"
  End Sub`}),o.jsx("h2",{children:"Mostrar o form"}),o.jsx(e,{language:"vbnet",code:`Sub AbrirCadastro()
      UserForm1.Show
  End Sub`}),o.jsx("p",{dangerouslySetInnerHTML:{__html:"Atribua a um botão na planilha para o usuário abrir o cadastro com 1 clique."}}),o.jsx(a,{type:"tip",title:"Validação antes de salvar",children:o.jsx("span",{dangerouslySetInnerHTML:{__html:'Antes de gravar dados, valide com If: <code>If txtEmail.Value = "" Then MsgBox "Email obrigatório": Exit Sub</code>.'}})})]})}export{i as default};
