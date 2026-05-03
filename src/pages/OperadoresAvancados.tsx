import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function OperadoresAvancados() {
  return (
    <PageContainer title="Operadores e precedência" subtitle="Quando o Excel multiplica antes de somar — e como controlar." difficulty="intermediario" timeToRead="5 min">
      <h2>Tipos de operadores</h2>
      <CodeBlock language="text" code={`Aritméticos:    +  -  *  /  ^  %
Comparação:     =  <>  >  <  >=  <=
Texto:          &  (concatenação)
Referência:     :  (intervalo)   ;  (união)   ESPAÇO (interseção)`} />
      <h2>Ordem de precedência</h2>
      <CodeBlock language="text" code={`1. : (intervalo)
2. ESPAÇO (interseção)
3. ; (união)
4. - (negativo)        Ex: -2^2 = 4 (e não -4!)
5. % (porcentagem)
6. ^ (potência)
7. * /
8. + -
9. & (concatenação)
10. = <> > < >= <=`} />
      <h2>Use parênteses sempre que houver dúvida</h2>
      <CodeBlock language="text" code={`=2+3*4         → 14   (multiplica antes)
=(2+3)*4       → 20
=-2^2          → 4    (negativo aplica primeiro!)
=-(2^2)        → -4
=A1:A10 B1:B10 → interseção (vazio se não cruzam)`} />
      <h2>Operador de interseção (espaço)</h2>
      <p dangerouslySetInnerHTML={{ __html: "Pouco conhecido, mas útil com nomes definidos: se você nomeou colunas como <code>Janeiro</code> e linhas como <code>Vendas</code>, então <code>=Janeiro Vendas</code> retorna a célula no cruzamento." }} />
    </PageContainer>
  );
}
