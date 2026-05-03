import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CongelarPaineis() {
  return (
    <PageContainer title="Congelar e dividir painéis" subtitle="Cabeçalhos sempre visíveis e duas regiões da planilha lado a lado." difficulty="iniciante" timeToRead="3 min">
      <h2>Congelar primeira linha (cabeçalho)</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Exibir → Congelar Painéis → Congelar Linha Superior</strong>. A linha 1 fica fixa enquanto você rola." }} />
      <h2>Congelar linha + coluna</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Selecione a célula <strong>logo abaixo</strong> e <strong>à direita</strong> do que quer fixar." }} />
        <li dangerouslySetInnerHTML={{ __html: "Ex: para congelar A:B + linha 1, selecione <code>C2</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Exibir → Congelar Painéis → Congelar Painéis</strong>." }} />
      </ul>
      <h2>Dividir tela</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Exibir → Dividir</strong> cria 2 ou 4 regiões com barras de rolagem independentes — útil para comparar partes distantes da mesma planilha." }} />
      <h2>Nova janela</h2>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Exibir → Nova Janela</strong> abre a mesma pasta em outra janela. Pode mostrar Planilha1 em uma e Planilha5 em outra. Combine com <strong>Exibir → Lado a Lado</strong>." }} />
    </PageContainer>
  );
}
