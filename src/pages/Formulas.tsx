import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Formulas() {
    return (
      <PageContainer title="Operadores e Fórmulas" subtitle="Toda fórmula começa com = . Aritméticos, comparação, texto e referência." difficulty="iniciante" timeToRead="8 min">
        <h2>Anatomia de uma fórmula</h2>
      <p>Toda fórmula começa com o sinal de igual <code>=</code>. Pode conter operadores, funções, referências e constantes.</p>
      <CodeBlock language="text" code={`=  A2  *  B2  +  IMPOSTO  -  SOMA(C2:C10)
  ↑   ↑    ↑    ↑      ↑           ↑
  sinal  ref  op   op   nome     função
  inicial`} />
      <h2>Operadores aritméticos</h2>
      <CodeBlock language="text" code={`+    soma             =A1+B1
  -    subtração        =A1-B1
  *    multiplicação    =A1*B1
  /    divisão          =A1/B1
  ^    exponenciação    =A1^2  (A1 ao quadrado)
  %    porcentagem      =50%   (= 0,5)`} />
      <h2>Operadores de comparação</h2>
      <p>Resultam em <code>VERDADEIRO</code> ou <code>FALSO</code>. Usados em SE, FILTRO, SOMASE etc.</p>
      <CodeBlock language="text" code={`=    igual             =A1=B1
  <>   diferente         =A1<>B1
  >    maior             =A1>10
  <    menor             =A1<10
  >=   maior ou igual    =A1>=0
  <=   menor ou igual    =A1<=100`} />
      <h2>Operador de concatenação de texto</h2>
      <CodeBlock language="text" code={`=A1 & " " & B1            → "Maria Silva"
  =CONCAT(A1; " "; B1)      → mesmo efeito (função moderna)
  ="Olá, " & A1 & "!"       → "Olá, Maria!"`} />
      <h2>Operadores de referência</h2>
      <ul>
        <li><code>:</code> intervalo — <code>A1:A10</code> (10 células).</li>
        <li><code>;</code> união — <code>SOMA(A1:A5;C1:C5)</code>.</li>
        <li><code> </code> (espaço) interseção — <code>SOMA(A1:C3 B2:B5)</code> = só B2:B3.</li>
      </ul>
      <h2>Precedência</h2>
      <p>Mesma regra da matemática. Em ordem: <code>:</code>, espaço, <code>;</code>, <code>%</code>, <code>^</code>, <code>* /</code>, <code>+ -</code>, <code>&</code>, comparações. Use parênteses para forçar:</p>
      <CodeBlock language="text" code={`=2+3*4       → 14
  =(2+3)*4     → 20`} />
      <AlertBox type="warning" title="Vírgula ou ponto-e-vírgula?">
        No Excel em português usamos <strong>vírgula como separador decimal</strong> e <strong>ponto-e-vírgula entre argumentos</strong>: <code>=SE(A1>10;"alto";"baixo")</code>. Em inglês é o oposto.
      </AlertBox>
      </PageContainer>
    );
  }
  