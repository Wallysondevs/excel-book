import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function TabelaDinamicaAgrupar() {
  return (
    <PageContainer title="TD — agrupar datas e números" subtitle="De data diária para mensal/trimestral em 2 cliques." difficulty="intermediario" timeToRead="5 min">
      <h2>Agrupar datas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Coloque a coluna de Data em <strong>Linhas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Botão direito sobre qualquer data → <strong>Agrupar…</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Marque <strong>Meses, Trimestres, Anos</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "TD ganha hierarquia: Ano → Trimestre → Mês" }} />
      </ul>
      <h2>Agrupar números (faixas)</h2>
      <CodeBlock language="text" code={`Coluna Idade arrastada para Linhas
   Botão direito → Agrupar
   Início: 18   Fim: 65   Por: 10

→ vira: 18-27, 28-37, 38-47, 48-57, 58-65`} />
      <h2>Desagrupar</h2>
      <p dangerouslySetInnerHTML={{ __html: "Botão direito no item agrupado → <strong>Desagrupar</strong>. Quando precisar voltar atrás." }} />
      <AlertBox type="warning" title="Quando NÃO agrupar">
        <span dangerouslySetInnerHTML={{ __html: "Se a coluna de Data tiver textos misturados ou vazios, o agrupar falha. Limpe antes em Power Query." }} />
      </AlertBox>
    </PageContainer>
  );
}
