import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqColunaCondicional() {
  return (
    <PageContainer title="Power Query — Coluna Condicional e Personalizada" subtitle="SE/CASO de Power Query com clique e Linguagem M." difficulty="intermediario" timeToRead="6 min">
      <h2>Coluna Condicional (sem código)</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Adicionar Coluna → Coluna Condicional</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina: SE [coluna] = X então 'Resultado' senão 'Outro'" }} />
        <li dangerouslySetInnerHTML={{ __html: "Adicione vários SE empilhados" }} />
        <li dangerouslySetInnerHTML={{ __html: "Equivalente a SE.MÚLTIPLO no Excel" }} />
      </ul>
      <h2>Coluna Personalizada (Linguagem M)</h2>
      <CodeBlock language="text" code={`= if [Status] = "A" then "Aprovado"
  else if [Status] = "R" then "Reprovado"
  else "Pendente"

= [Quantidade] * [PrecoUnit]
= Text.Upper([Cidade])
= Date.Year([DataVenda])
= Date.AddMonths([Data], 3)
= Number.Round([Valor], 2)
= List.Max({[Meta1], [Meta2], [Meta3]})`} />
      <h2>Coluna a partir de exemplos</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Adicionar Coluna → Coluna de Exemplos</strong>. Digite 1-2 resultados e o Power Query infere a fórmula M sozinho. Ótimo para extrair, formatar texto e juntar campos." }} />
    </PageContainer>
  );
}
