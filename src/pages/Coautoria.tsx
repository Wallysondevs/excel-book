import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Coautoria() {
  return (
    <PageContainer title="Coautoria e versões" subtitle="Várias pessoas editando ao mesmo tempo no Excel moderno." difficulty="iniciante" timeToRead="5 min">
      <h2>Requisitos</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Arquivo no <strong>OneDrive</strong> ou <strong>SharePoint/Teams</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Formato <strong>.xlsx</strong> (não .xls e nem .xlsb)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Excel 365, 2021, 2019 ou Online" }} />
      </ul>
      <h2>Como compartilhar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Botão <strong>Compartilhar</strong> no canto superior direito" }} />
        <li dangerouslySetInnerHTML={{ __html: "Adicione e-mails ou copie link" }} />
        <li dangerouslySetInnerHTML={{ __html: "Permissão: ler ou editar" }} />
      </ul>
      <h2>Histórico de versões</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Informações → Histórico de Versões</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Lista todas as versões salvas automaticamente" }} />
        <li dangerouslySetInnerHTML={{ __html: "Restaure qualquer ponto sem perder a versão atual" }} />
      </ul>
      <AlertBox type="tip" title="Conflito de mesclagem">
        <span dangerouslySetInnerHTML={{ __html: "Quando 2 pessoas editam a mesma célula offline e sincronizam, o Excel mostra a janela de Mesclagem. Sempre prefira manter o arquivo aberto online." }} />
      </AlertBox>
    </PageContainer>
  );
}
