import{j as a}from"./index-COQxS6Ql.js";import{P as l}from"./PageContainer-D1JhFxkd.js";import{C as e}from"./CodeBlock-CbV_OQLb.js";function i(){return a.jsxs(l,{title:"Otimização de pastas grandes",subtitle:"Quando o Excel trava — checklist de otimização.",difficulty:"avancado",timeToRead:"8 min",children:[a.jsx("h2",{children:"Diagnóstico"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"<kbd>Ctrl</kbd>+<kbd>End</kbd> chega muito além dos seus dados? → tem 'lixo' em linhas/colunas"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Pasta tem muitos formatos diferentes? → 'estilos órfãos' inflam o XML"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Muitas <code>DESLOC</code>, <code>INDIRETO</code>, <code>HOJE()</code>? → fórmulas voláteis recalculam tudo"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"PROCV apontando para colunas inteiras (A:A)? → 1M de células lidas a cada vez"}})]}),a.jsx("h2",{children:"Receitas que funcionam"}),a.jsxs("ul",{children:[a.jsx("li",{dangerouslySetInnerHTML:{__html:"Substitua intervalos abertos por <strong>Tabelas (Ctrl+T)</strong>: <code>tbl[Coluna]</code>"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Use <strong>SOMASES/CONT.SES</strong> em vez de SOMARPRODUTO grande"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Carregue em <strong>Power Query</strong> em vez de fórmulas em planilha"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Mude para Modelo de Dados (Power Pivot) — engine colunar é 10-50× mais rápida"}}),a.jsx("li",{dangerouslySetInnerHTML:{__html:"Salve como <strong>.xlsb</strong> (binário) — menor e mais rápido"}})]}),a.jsx("h2",{children:"Limpar lixo"}),a.jsx(e,{language:"text",code:`Limpar coluna após última real:
1. Selecione coluna (cabeçalho) à direita da última coluna usada
2. Ctrl+Shift+→ até XFD
3. Botão direito → Excluir
4. Faça o mesmo para linhas (Ctrl+Shift+↓)
5. Salve. Verifique Ctrl+End novamente.

Limpar formatação:
   Página Inicial → Limpar → Formatos
   ou: Salvar como .xlsx, fechar, abrir, salvar de novo`}),a.jsx("h2",{children:"Cálculo manual durante edição pesada"}),a.jsx(e,{language:"text",code:`Application.Calculation = xlCalculationManual    ' VBA
    ' ... edita milhares de células ...
Application.Calculation = xlCalculationAutomatic
Application.CalculateFull`})]})}export{i as default};
