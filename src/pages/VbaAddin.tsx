import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VbaAddin() {
  return (
    <PageContainer title="VBA — Suplementos (.xlam)" subtitle="Distribua suas macros para todos os usuários." difficulty="avancado" timeToRead="6 min">
      <h2>Criar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Crie sua pasta com macros e UserForms" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Salvar Como</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipo: <strong>Suplemento do Excel (*.xlam)</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "O Excel sugere a pasta padrão de Add-ins" }} />
      </ul>
      <h2>Instalar no usuário</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Opções → Suplementos → Ir…</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Procurar…</strong> e aponte o .xlam" }} />
        <li dangerouslySetInnerHTML={{ __html: "Marque a caixinha. Pronto" }} />
      </ul>
      <h2>Adicionar botão na faixa</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Faixa de Opções customizada precisa de <strong>Custom UI Editor</strong> (gratuito)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Ele edita o XML do .xlam adicionando botões/abas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Cada botão chama uma Sub: <code>onAction=\"MeuModulo.MinhaRotina\"</code>" }} />
      </ul>
      <h2>Cuidados</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Suplemento não tem planilhas visíveis — não use <code>ActiveSheet</code> em referências internas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use <code>ThisWorkbook</code> só com cuidado (pode apontar pro arquivo errado)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Versione no Git como qualquer código" }} />
      </ul>
    </PageContainer>
  );
}
