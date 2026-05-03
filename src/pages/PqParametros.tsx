import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqParametros() {
  return (
    <PageContainer title="Power Query — Parâmetros e funções em M" subtitle="Reaproveite consultas variando entradas (caminho, ano, filial)." difficulty="avancado" timeToRead="6 min">
      <h2>Parâmetros</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Gerenciar Parâmetros → Novo</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Tipo: Text/Number/Date e valor padrão" }} />
        <li dangerouslySetInnerHTML={{ __html: "Use no código M: <code>= Folder.Files(Pasta)</code> onde <code>Pasta</code> é o parâmetro" }} />
      </ul>
      <h2>Função em M</h2>
      <CodeBlock language="text" code={`(ano as number) =>
let
    fonte = Excel.Workbook(File.Contents("C:\\dados\\vendas_" & Number.ToText(ano) & ".xlsx")),
    tabela = fonte{[Item="Vendas",Kind="Sheet"]}[Data]
in
    tabela

→ Use: =fnVendas(2025)`} />
      <h2>Combinar arquivos com função</h2>
      <p dangerouslySetInnerHTML={{ __html: "Quando você combina arquivos de pasta, o Power Query cria automaticamente uma função 'Transformar Arquivo de Exemplo' e aplica em cada arquivo. Edite essa função para customizar o tratamento de TODOS os arquivos." }} />
    </PageContainer>
  );
}
