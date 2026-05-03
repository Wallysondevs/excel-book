import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Recursos() {
  return (
    <PageContainer title="Recursos para continuar aprendendo" subtitle="Canais, comunidades, sites e livros recomendados." difficulty="iniciante" timeToRead="4 min">
      <h2>Documentação oficial</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>support.microsoft.com/excel</strong> — referência completa" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>learn.microsoft.com</strong> — DAX, Power Query, Office Scripts" }} />
      </ul>
      <h2>Sites e blogs</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Excel Easy</strong> — tutoriais visuais" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Chandoo.org</strong> — análise e dashboards" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>SQLBI</strong> — DAX e modelagem (referência mundial)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Hashtag Treinamentos</strong> (pt-BR) — YouTube e blog" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Guia do Excel</strong> (pt-BR)" }} />
      </ul>
      <h2>Comunidades</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>r/excel</strong> no Reddit" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Stack Overflow</strong> — tag [excel] / [vba] / [powerquery]" }} />
        <li dangerouslySetInnerHTML={{ __html: "Microsoft Tech Community — fórum oficial" }} />
        <li dangerouslySetInnerHTML={{ __html: "Discord/Slack de comunidades BI" }} />
      </ul>
      <h2>Livros</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<em>Excel Bible</em> — John Walkenbach (referência geral)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<em>The Definitive Guide to DAX</em> — Marco Russo & Alberto Ferrari" }} />
        <li dangerouslySetInnerHTML={{ __html: "<em>M is for (Data) Monkey</em> — Power Query" }} />
        <li dangerouslySetInnerHTML={{ __html: "<em>Power Pivot and Power BI</em> — Rob Collie" }} />
      </ul>
      <h2>Pratique sempre</h2>
      <p dangerouslySetInnerHTML={{ __html: "Pegue um problema real (orçamento, controle, análise) e tente resolver. Aprender Excel sem contexto é torturante. Aprender resolvendo dor real é viciante." }} />
    </PageContainer>
  );
}
