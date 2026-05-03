import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Historia() {
    return (
      <PageContainer title="História do Excel" subtitle="De Multiplan ao Excel 365: 4 décadas redefinindo planilhas eletrônicas." difficulty="iniciante" timeToRead="8 min">
        <h2>Antes do Excel: VisiCalc e Multiplan</h2>
      <p>A planilha eletrônica nasceu em 1979 com o <strong>VisiCalc</strong>, criado por Dan Bricklin e Bob Frankston para o Apple II. A ideia era simples e revolucionária: substituir o papel quadriculado dos contadores por uma grade interativa onde cada célula podia conter texto, número ou fórmula.</p>
      <p>Em 1982, a Microsoft lançou seu primeiro concorrente, o <strong>Multiplan</strong>, para CP/M e MS-DOS. Apesar da boa recepção técnica, perdeu a guerra para o <strong>Lotus 1-2-3</strong> (1983), que dominou os anos 80 nos PCs IBM.</p>
      <h2>1985 — O Excel nasce no Mac</h2>
      <p>Em 30 de setembro de 1985, a Microsoft lançou o <strong>Excel 1.0 para Macintosh</strong>. Foi o primeiro programa de planilhas com interface gráfica de menus suspensos e mouse — uma vantagem decisiva sobre o Lotus baseado em texto.</p>
      <AlertBox type="info" title="Curiosidade">
        O nome "Excel" gerou processo da empresa Excel Industries. Por anos a Microsoft chamou oficialmente o produto de "Microsoft Excel" para evitar conflito.
      </AlertBox>
      <h2>1987 — Excel 2.0 chega ao Windows</h2>
      <p>O Excel 2.0 foi lançado junto com o Windows 2.0, sendo na prática a aplicação "matadora" que vendeu o Windows. Em 1992, com o Excel 4.0, a Microsoft já havia ultrapassado o Lotus 1-2-3 em participação de mercado.</p>
      <h2>1993 — VBA e a era da automação</h2>
      <p>O <strong>Excel 5.0</strong> introduziu o <strong>Visual Basic for Applications (VBA)</strong>, permitindo automação completa via scripts. O modelo de objetos do Excel passou a ser exposto a programadores, transformando a ferramenta em plataforma de desenvolvimento corporativo.</p>
      <h2>Marcos modernos</h2>
      <ul>
        <li><strong>Excel 2007</strong> — nova interface Ribbon (Faixa de Opções), formato XLSX (XML compactado), 1.048.576 linhas × 16.384 colunas.</li>
        <li><strong>Excel 2010</strong> — Power Pivot e Sparklines.</li>
        <li><strong>Excel 2013</strong> — Power Query, Power View e modelo de dados nativo.</li>
        <li><strong>Excel 2016</strong> — gráficos de mapa, funnel, treemap e previsão automática.</li>
        <li><strong>Excel 2019/365</strong> — funções dinâmicas: <code>FILTRO</code>, <code>CLASSIFICAR</code>, <code>ÚNICO</code>, <code>SEQUÊNCIA</code>, <code>PROCX</code>, <code>LET</code>, <code>LAMBDA</code>.</li>
        <li><strong>Excel 365 (2024-2025)</strong> — Copilot integrado, Python no Excel e PROCX como padrão.</li>
      </ul>
      <h2>Por que ainda importa?</h2>
      <p>Mais de <strong>1,1 bilhão de pessoas</strong> usam Excel no mundo. É a ferramenta mais democrática de análise de dados: do controle financeiro doméstico ao orçamento de multinacionais. Aprender Excel hoje é dominar a linguagem universal dos negócios.</p>
      </PageContainer>
    );
  }
  