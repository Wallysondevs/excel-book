import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Faq() {
  return (
    <PageContainer title="Perguntas frequentes" subtitle="Respostas curtas para dúvidas que aparecem 100×." difficulty="iniciante" timeToRead="5 min">
      <h2>"Por que minha PROCV retorna #N/D?"</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Espaços extras: use <code>=ARRUMAR()</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipo diferente (texto/número): force com <code>*1</code> ou <code>&\"\"</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tabela mudou de coluna; use PROCX para evitar" }} />
      </ul>
      <h2>"Como travar uma célula em fórmula?"</h2>
      <p dangerouslySetInnerHTML={{ __html: "Coloque o cursor sobre a referência e pressione <kbd>F4</kbd>. Cicla entre <code>$A$1</code>, <code>A$1</code>, <code>$A1</code>, <code>A1</code>." }} />
      <h2>"Como remover linhas em branco?"</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione coluna chave → F5 → Especial → Em branco → OK" }} />
        <li dangerouslySetInnerHTML={{ __html: "Botão direito → Excluir Linhas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Ou use Power Query: Página Inicial → Remover Linhas → Em Branco" }} />
      </ul>
      <h2>"Como dividir nome em primeiro e último?"</h2>
      <CodeBlock language="text" code={`=TEXTOANTES(A1; " ")              primeiro
=TEXTODEPOIS(A1; " "; -1)         último (após o último espaço)`} />
      <h2>"Como contar valores únicos?"</h2>
      <CodeBlock language="text" code={`=CONT.VALORES( ÚNICO( A2:A1000 ) )

Versão antiga (sem ÚNICO):
=SOMARPRODUTO( 1 / CONT.SE(A2:A1000; A2:A1000) )`} />
      <h2>"Salvei .xlsx e perdi as macros!"</h2>
      <p dangerouslySetInnerHTML={{ __html: "Não há recuperação. Macros vivem em .xlsm. <strong>Sempre</strong> salve pastas com VBA como .xlsm. Use Histórico de Versões (OneDrive) para tentar restaurar." }} />
      <h2>"Por que abre como 'Modo de Exibição Protegido'?"</h2>
      <p dangerouslySetInnerHTML={{ __html: "Arquivo veio da internet/e-mail. Clique <em>Habilitar Edição</em> só se confia na origem. Em <strong>Arquivo → Opções → Central de Confiabilidade → Configurações → Modo Protegido</strong> você ajusta as regras." }} />
    </PageContainer>
  );
}
