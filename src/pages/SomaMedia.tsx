import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function SomaMedia() {
    return (
      <PageContainer title="SOMA, MÉDIA, CONT.NÚM" subtitle="As funções estatísticas mais usadas — e suas variações úteis." difficulty="iniciante" timeToRead="8 min">
        <h2>SOMA — somatório</h2>
      <CodeBlock language="text" code={`=SOMA(A1:A10)
  =SOMA(A1;A5;A10)            → soma só essas 3
  =SOMA(A1:A10;C1:C10)        → dois intervalos
  =SOMA(tblVendas[Total])     → coluna inteira de tabela`} />
      <h2>MÉDIA — média aritmética</h2>
      <CodeBlock language="text" code={`=MÉDIA(B2:B100)
  =MÉDIAA(B2:B100)            → considera texto e booleanos
  =MED(B2:B100)               → mediana (valor do meio)
  =MODO.ÚNICO(B2:B100)        → moda (mais frequente)`} />
      <h2>Contagem — três variações importantes</h2>
      <ul>
        <li><code>CONT.NÚM(A1:A100)</code> — conta apenas números.</li>
        <li><code>CONT.VALORES(A1:A100)</code> — conta tudo que não é vazio (texto + número).</li>
        <li><code>CONTAR.VAZIO(A1:A100)</code> — conta células vazias.</li>
      </ul>
      <h2>MÁXIMO e MÍNIMO</h2>
      <CodeBlock language="text" code={`=MÁXIMO(B2:B100)
  =MÍNIMO(B2:B100)
  =MAIOR(B2:B100;3)     → terceiro maior valor
  =MENOR(B2:B100;2)     → segundo menor valor`} />
      <h2>AutoSoma — Alt + =</h2>
      <p>Selecione a célula vazia abaixo (ou à direita) de uma sequência de números e pressione <code>Alt + =</code>. O Excel insere automaticamente <code>=SOMA(...)</code> com o intervalo certo.</p>
      <AlertBox type="tip" title="SOMA ignora texto">
        Se houver texto no intervalo, <code>SOMA</code> ignora silenciosamente. Já <code>=A1+A2</code> dará <code>#VALOR!</code> se A1 ou A2 forem texto.
      </AlertBox>
      <h2>AGREGAR — soma ignorando erros e ocultos</h2>
      <CodeBlock language="text" code={`=AGREGAR(9; 6; A1:A100)
          ↑   ↑    ↑
         SOMA ignora erros  intervalo

  Códigos de função: 9=SOMA, 1=MÉDIA, 2=CONT.NÚM, 4=MÁX, 5=MÍN
  Opções: 6=ignora erros, 7=ignora linhas ocultas, 5=ambos`} />
      </PageContainer>
    );
  }
  