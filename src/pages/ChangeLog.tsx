import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ChangeLog() {
  return (
    <PageContainer title="O que mudou em cada versão" subtitle="Recursos importantes adicionados ao Excel desde 2010." difficulty="iniciante" timeToRead="7 min">
      <h2>Excel 2010</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Power Pivot (Add-in)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Sparklines" }} />
        <li dangerouslySetInnerHTML={{ __html: "Slicers em Tabela Dinâmica" }} />
        <li dangerouslySetInnerHTML={{ __html: "Botão Recuperar Pastas Não Salvas" }} />
      </ul>
      <h2>Excel 2013</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Modelo de Dados nativo" }} />
        <li dangerouslySetInnerHTML={{ __html: "Análise Rápida" }} />
        <li dangerouslySetInnerHTML={{ __html: "Preenchimento Relâmpago" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Query (Add-in)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power View (descontinuado)" }} />
      </ul>
      <h2>Excel 2016</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Power Query integrado (aba Dados → Obter & Transformar)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Power Pivot embutido (Pro Plus)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Novos gráficos: Cascata, Funil, Treemap, Sunburst, Histograma, Pareto, Caixa" }} />
        <li dangerouslySetInnerHTML={{ __html: "Mapas 3D" }} />
        <li dangerouslySetInnerHTML={{ __html: "PROCH e PROCV ganham versão melhorada" }} />
        <li dangerouslySetInnerHTML={{ __html: "Funções: SE.MÚLTIPLO, PARÂMETRO, MÁXIMOSES, MÍNIMOSES, UNIRTEXTO, CONCAT" }} />
      </ul>
      <h2>Excel 2019</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Funções de matriz CSE consolidadas" }} />
        <li dangerouslySetInnerHTML={{ __html: "Mapas 2D nativos (coropléticos)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tinta digital melhorada" }} />
      </ul>
      <h2>Microsoft 365 (e Excel 2021/2024)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arrays Dinâmicos</strong> e operador #" }} />
        <li dangerouslySetInnerHTML={{ __html: "FILTRO, CLASSIFICAR, ÚNICO, SEQUÊNCIA, MATRIZALEATÓRIA" }} />
        <li dangerouslySetInnerHTML={{ __html: "PROCX e CORRESPX" }} />
        <li dangerouslySetInnerHTML={{ __html: "LET, LAMBDA, MAP, REDUCE, SCAN, BYROW, BYCOL, MAKEARRAY" }} />
        <li dangerouslySetInnerHTML={{ __html: "TEXTOANTES, TEXTODEPOIS, DIVIDIRTEXTO" }} />
        <li dangerouslySetInnerHTML={{ __html: "EMPILHARV/H, PEGAR, RETIRAR, EXPANDIR, ESCOLHERLINS, ESCOLHERCOLS" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipos de Dados Vinculados (Geografia, Ações)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Office Scripts (TypeScript) no Excel Online" }} />
        <li dangerouslySetInnerHTML={{ __html: "Coautoria em tempo real" }} />
        <li dangerouslySetInnerHTML={{ __html: "Integração nativa com Power Automate" }} />
        <li dangerouslySetInnerHTML={{ __html: "Análise com IA (Analyze Data)" }} />
      </ul>
      <AlertBox type="tip" title="Detecção de versão">
        <span dangerouslySetInnerHTML={{ __html: "Em uma célula: <code>=INFO(\"versão\")</code> retorna a versão. <code>=INFO(\"sistema\")</code> retorna o SO." }} />
      </AlertBox>
    </PageContainer>
  );
}
