import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Performance() {
  return (
    <PageContainer title="Otimização de pastas grandes" subtitle="Quando o Excel trava — checklist de otimização." difficulty="avancado" timeToRead="8 min">
      <h2>Diagnóstico</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<kbd>Ctrl</kbd>+<kbd>End</kbd> chega muito além dos seus dados? → tem 'lixo' em linhas/colunas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Pasta tem muitos formatos diferentes? → 'estilos órfãos' inflam o XML" }} />
        <li dangerouslySetInnerHTML={{ __html: "Muitas <code>DESLOC</code>, <code>INDIRETO</code>, <code>HOJE()</code>? → fórmulas voláteis recalculam tudo" }} />
        <li dangerouslySetInnerHTML={{ __html: "PROCV apontando para colunas inteiras (A:A)? → 1M de células lidas a cada vez" }} />
      </ul>
      <h2>Receitas que funcionam</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Substitua intervalos abertos por <strong>Tabelas (Ctrl+T)</strong>: <code>tbl[Coluna]</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use <strong>SOMASES/CONT.SES</strong> em vez de SOMARPRODUTO grande" }} />
        <li dangerouslySetInnerHTML={{ __html: "Carregue em <strong>Power Query</strong> em vez de fórmulas em planilha" }} />
        <li dangerouslySetInnerHTML={{ __html: "Mude para Modelo de Dados (Power Pivot) — engine colunar é 10-50× mais rápida" }} />
        <li dangerouslySetInnerHTML={{ __html: "Salve como <strong>.xlsb</strong> (binário) — menor e mais rápido" }} />
      </ul>
      <h2>Limpar lixo</h2>
      <CodeBlock language="text" code={`Limpar coluna após última real:
1. Selecione coluna (cabeçalho) à direita da última coluna usada
2. Ctrl+Shift+→ até XFD
3. Botão direito → Excluir
4. Faça o mesmo para linhas (Ctrl+Shift+↓)
5. Salve. Verifique Ctrl+End novamente.

Limpar formatação:
   Página Inicial → Limpar → Formatos
   ou: Salvar como .xlsx, fechar, abrir, salvar de novo`} />
      <h2>Cálculo manual durante edição pesada</h2>
      <CodeBlock language="text" code={`Application.Calculation = xlCalculationManual    ' VBA
    ' ... edita milhares de células ...
Application.Calculation = xlCalculationAutomatic
Application.CalculateFull`} />
    </PageContainer>
  );
}
