import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RemoverDuplicados() {
  return (
    <PageContainer title="Remover duplicados — 3 caminhos" subtitle="Botão clássico, fórmula ÚNICO ou Power Query." difficulty="iniciante" timeToRead="4 min">
      <h2>Caminho 1 — botão</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione qualquer célula da Tabela" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Dados → Remover Duplicados</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Marque as colunas que definem 'igualdade' (ex: só CPF)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Destrutivo</strong>: apaga linhas — faça backup antes" }} />
      </ul>
      <h2>Caminho 2 — fórmula (não-destrutivo)</h2>
      <CodeBlock language="text" code={`=ÚNICO( tbl[CPF] )                            só lista distinta
=ÚNICO( tbl )                                  linhas inteiras distintas
=ÚNICO( tbl ; FALSO ; VERDADEIRO )             apenas únicos (1 só vez)`} />
      <h2>Caminho 3 — Power Query</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Importe a tabela" }} />
        <li dangerouslySetInnerHTML={{ __html: "Selecione a(s) coluna(s) chave" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Remover Linhas → Remover Duplicatas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Aceita refresh: ao mudar a fonte, basta atualizar" }} />
      </ul>
      <h2>Encontrar (sem remover)</h2>
      <CodeBlock language="text" code={`Formatação Condicional → Realçar Regras → Valores Duplicados
   ou
=CONT.SE( \$A\$2:\$A\$1000 ; A2 ) > 1     → marca duplicados`} />
    </PageContainer>
  );
}
