import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function TiposDados() {
    return (
      <PageContainer title="Tipos de Dados no Excel" subtitle="Texto, Número, Data, Moeda, Booleano, Erro — e por que isso importa." difficulty="iniciante" timeToRead="7 min">
        <h2>Os tipos fundamentais</h2>
      <p dangerouslySetInnerHTML={{ __html: "Apesar de aparentar ser \"tudo igual\", o Excel internamente reconhece tipos diferentes que mudam cálculos, ordenação e exibição:" }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Texto</strong> — alinhado à esquerda. Ex: <code>Maria</code>, <code>SP-001</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Número</strong> — alinhado à direita. Ex: <code>42</code>, <code>3,14</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Data/Hora</strong> — número internamente (dias desde 01/01/1900). <code>01/05/2026</code> = 46.143." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Moeda / Contábil</strong> — número com símbolo R$, US$." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Porcentagem</strong> — número × 100 com símbolo %." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Booleano</strong> — <code>VERDADEIRO</code> ou <code>FALSO</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Erro</strong> — <code>#DIV/0!</code>, <code>#N/D</code>, <code>#REF!</code>, <code>#NOME?</code>, <code>#VALOR!</code>, <code>#NULO!</code>." }} />
      </ul>
      <AlertBox type="warning" title="CSV importado vira texto!">
        <span dangerouslySetInnerHTML={{ __html: "Quando você importa CSV, números costumam vir como texto. Verifique pelo alinhamento ou use <code>=ÉNÚM(A1)</code>. Para converter: multiplicar por 1, ou usar Texto para Colunas com formato Geral." }} />
      </AlertBox>
      <h2>Datas — número disfarçado</h2>
      <p dangerouslySetInnerHTML={{ __html: "No Excel, uma data é literalmente um número inteiro. Hora é a parte decimal. <code>01/05/2026 12:00</code> = <code>46143,5</code>. Por isso datas podem ser somadas/subtraídas:" }} />
      <CodeBlock language="text" code={`A1: 01/05/2026
  B1: 31/12/2026
  =B1-A1     →  244 (dias entre as datas)
  =HOJE()+30 →  daqui a 30 dias`} />
      <h2>Tipos de erro</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<code>#DIV/0!</code> — divisão por zero." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#N/D</code> — valor não disponível (PROCV não achou)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#REF!</code> — referência inválida (célula apagada)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#NOME?</code> — fórmula com nome desconhecido (digitou errado)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#VALOR!</code> — tipo errado (texto onde esperava número)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#NULO!</code> — interseção vazia entre intervalos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<code>#NÚM!</code> — número inválido (raiz de negativo, log de 0)." }} />
      </ul>
      </PageContainer>
    );
  }
  