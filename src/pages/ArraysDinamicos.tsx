import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ArraysDinamicos() {
  return (
    <PageContainer title="Arrays dinâmicos e o operador de derramamento (#)" subtitle="A revolução de 2020 que mudou fórmula no Excel para sempre." difficulty="intermediario" timeToRead="7 min">
      <h2>O que mudou</h2>
      <p dangerouslySetInnerHTML={{ __html: "Antes: para retornar várias células, você selecionava todas, digitava a fórmula e fechava com <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (CSE). Hoje: a fórmula <strong>derrama</strong> sozinha pelas células ao redor." }} />
      <h2>Exemplo simples</h2>
      <CodeBlock language="text" code={`=SEQUÊNCIA(5)            em D2 derrama:
                          D2  1
                          D3  2
                          D4  3
                          D5  4
                          D6  5

=A2:A10 * B2:B10          uma única célula multiplica vetor por vetor`} />
      <h2>O operador #</h2>
      <p dangerouslySetInnerHTML={{ __html: "Para referenciar a área inteira derramada: <code>D2#</code>. Sempre que o array crescer ou diminuir, <code>D2#</code> acompanha." }} />
      <CodeBlock language="text" code={`=SOMA( D2# )                       soma o que derramou de D2
=CONT.NÚM( filtro_resultado# )    sem precisar saber tamanho`} />
      <h2>Funções nativas dinâmicas</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>FILTRO</code> — filtra com critério" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>CLASSIFICAR</code> / <code>CLASSIFICARPOR</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>ÚNICO</code> — remove duplicados" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>SEQUÊNCIA</code>, <code>MATRIZALEATÓRIA</code>, <code>EMPILHARV/H</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>PROCX</code>, <code>CORRESPX</code>, <code>EXPANDIR</code>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>MAP</code>, <code>REDUCE</code>, <code>SCAN</code>, <code>BYROW</code>, <code>BYCOL</code>, <code>MAKEARRAY</code>, <code>LAMBDA</code>" }} />
      </ul>
      <AlertBox type="warning" title="Disponível em quem?">
        <span dangerouslySetInnerHTML={{ __html: "Apenas Microsoft 365, Excel 2021+ e Excel Online. NÃO funciona em Excel 2019 ou anterior." }} />
      </AlertBox>
    </PageContainer>
  );
}
