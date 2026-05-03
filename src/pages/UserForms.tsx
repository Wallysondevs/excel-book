import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UserForms() {
    return (
      <PageContainer title="UserForms" subtitle="Formulários customizados em VBA para aplicações no Excel." difficulty="avancado" timeToRead="8 min">
        <h2>Conceito</h2>
      <p>Um <strong>UserForm</strong> é uma janela personalizada criada no Editor VBA, com botões, caixas de texto, listas — uma mini-aplicação dentro do Excel.</p>
      <h2>Criar</h2>
      <p>Editor VBA → <strong>Inserir → UserForm</strong>. Abre janela em branco e a Caixa de Ferramentas.</p>
      <h2>Controles principais</h2>
      <ul>
        <li><strong>Label</strong> — texto fixo (rótulo).</li>
        <li><strong>TextBox</strong> — caixa de texto.</li>
        <li><strong>ComboBox</strong> — dropdown.</li>
        <li><strong>ListBox</strong> — lista (seleção múltipla opcional).</li>
        <li><strong>CheckBox / OptionButton</strong> — caixa de seleção / botão de opção.</li>
        <li><strong>CommandButton</strong> — botão de ação.</li>
        <li><strong>Frame</strong> — agrupa controles.</li>
      </ul>
      <h2>Exemplo: cadastro de cliente</h2>
      <CodeBlock language="vbnet" code={`' Duplo clique no botão "Salvar":
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
  End Sub`} />
      <h2>Mostrar o form</h2>
      <CodeBlock language="vbnet" code={`Sub AbrirCadastro()
      UserForm1.Show
  End Sub`} />
      <p>Atribua a um botão na planilha para o usuário abrir o cadastro com 1 clique.</p>
      <AlertBox type="tip" title="Validação antes de salvar">
        Antes de gravar dados, valide com If: <code>If txtEmail.Value = "" Then MsgBox "Email obrigatório": Exit Sub</code>.
      </AlertBox>
      </PageContainer>
    );
  }
  