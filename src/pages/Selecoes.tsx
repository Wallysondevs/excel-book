import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Selecoes() {
  return (
    <PageContainer title="Seleções avançadas" subtitle="Ir Para Especial, áreas não-contíguas e seleção visível." difficulty="intermediario" timeToRead="5 min">
      <h2>Ir Para Especial</h2>
      <p dangerouslySetInnerHTML={{ __html: "<kbd>F5</kbd> → <em>'Especial...'</em> abre uma caixa poderosa que seleciona de uma vez:" }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Constantes</strong> — só os valores digitados (ignora fórmulas)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas</strong> — só as fórmulas (com filtro por tipo de erro)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Em branco</strong> — todas as células vazias na seleção" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Diferenças por linha/coluna</strong> — encontra valores desviantes" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Objetos</strong> — todas as imagens, gráficos e formas" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Validação de dados</strong> — todas as células com lista/regra" }} />
      </ul>
      <h2>Truque clássico</h2>
      <CodeBlock language="text" code={`Selecione a coluna → F5 → Especial → Em branco → OK
Digite =A2 (célula imediatamente acima) → Ctrl+Enter
PRONTO: todas as células vazias preenchidas com o valor de cima`} />
      <h2>Seleções não-contíguas</h2>
      <p dangerouslySetInnerHTML={{ __html: "Segure <kbd>Ctrl</kbd> e clique/arraste em vários intervalos. Para somar tudo: <code>=SOMA(A1:A10;C1:C10;E5)</code>. Para colar fórmula nas várias seleções de uma vez, digite e pressione <kbd>Ctrl</kbd>+<kbd>Enter</kbd>." }} />
      <h2>Selecionar só visíveis</h2>
      <p dangerouslySetInnerHTML={{ __html: "Depois de filtrar ou ocultar linhas, copiar pega tudo (incluindo escondidas). Para pegar <strong>só visíveis</strong>: selecione → <kbd>Alt</kbd>+<kbd>;</kbd> → <kbd>Ctrl</kbd>+<kbd>C</kbd>." }} />
    </PageContainer>
  );
}
