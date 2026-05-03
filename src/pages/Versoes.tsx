import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Versoes() {
    return (
      <PageContainer title="Versões e Edições do Excel" subtitle="Excel 365, 2024, 2021, Web, Mobile e Mac — qual usar e o que muda." difficulty="iniciante" timeToRead="6 min">
        <h2>Excel 365 — assinatura</h2>
      <p>É a versão sempre atualizada do pacote <strong>Microsoft 365</strong>. Recebe novas funções e correções todo mês. Inclui as funções dinâmicas (<code>FILTRO</code>, <code>PROCX</code>, <code>LAMBDA</code>) e Copilot.</p>
      <h2>Excel 2024 / 2021 / 2019 — perpétuo</h2>
      <p>Versões "comprou e é seu". Cada uma congela um conjunto de recursos — sem novas funções até a próxima edição. Boas para empresas que não podem assinar mensalmente, mas perdem acesso a funções dinâmicas mais recentes.</p>
      <h2>Excel para a Web (gratuito)</h2>
      <p>Roda no navegador em <a href="https://www.office.com">office.com</a>. Suporta a maior parte das fórmulas, mas <strong>não roda macros VBA</strong> nem Power Pivot. Ótimo para colaboração em tempo real.</p>
      <h2>Excel Mobile (Android/iOS)</h2>
      <p>Gratuito até 10 polegadas de tela. Edição completa de fórmulas e gráficos, sem VBA e com limitações em Tabela Dinâmica.</p>
      <h2>Excel para Mac</h2>
      <p>Funcionalmente próximo do Windows, mas alguns recursos chegam meses depois. Atalhos usam <code>⌘ Cmd</code> em vez de <code>Ctrl</code>.</p>
      <AlertBox type="tip" title="Qual escolher?">
        Para aprender e estudar: <strong>Excel para a Web (gratuito)</strong> ou <strong>365 Personal</strong>. Para empresa: <strong>Microsoft 365 Business Standard</strong>.
      </AlertBox>
      <h2>Tabela comparativa rápida</h2>
      <CodeBlock language="text" code={`Recurso              | 365 | 2024 | Web | Mac
  ---------------------+-----+------+-----+-----
  Funções dinâmicas    |  ✅  |  ✅   |  ✅  |  ✅
  PROCX / LET / LAMBDA |  ✅  |  ✅   |  ✅  |  ✅
  Copilot              |  ✅  |  ❌   |  ✅* |  ✅
  Power Query          |  ✅  |  ✅   |  ⚠️  |  ✅
  Power Pivot          |  ✅  |  ✅   |  ❌  |  ❌
  VBA / Macros         |  ✅  |  ✅   |  ❌  |  ✅
  Python no Excel      |  ✅  |  ❌   |  ❌  |  ❌`} />
      </PageContainer>
    );
  }
  