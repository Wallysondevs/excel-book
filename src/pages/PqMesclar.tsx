import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PqMesclar() {
  return (
    <PageContainer title="Power Query — Mesclar consultas (JOIN)" subtitle="Junte tabelas relacionadas — left, inner, full, anti." difficulty="intermediario" timeToRead="7 min">
      <h2>Tipos de JOIN</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Esquerda Externa</strong> (LEFT) — todos da esquerda + correspondências" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Direita Externa</strong> (RIGHT) — todos da direita + correspondências" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Externa Completa</strong> (FULL) — tudo dos dois lados" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Interna</strong> (INNER) — só os que casam em ambos" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Anti à Esquerda</strong> — só os que NÃO têm correspondência (achar órfãos)" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Anti à Direita</strong> — espelho do anterior" }} />
      </ul>
      <h2>Como mesclar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Tenha 2 consultas no painel <strong>Consultas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Página Inicial → Mesclar Consultas</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Selecione coluna-chave em CADA tabela (Ctrl+clique para múltiplas chaves)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Escolha tipo de junção" }} />
        <li dangerouslySetInnerHTML={{ __html: "A coluna nova é uma 'tabela' — clique no <strong>↔</strong> e expanda os campos" }} />
      </ul>
      <h2>Casos práticos</h2>
      <CodeBlock language="text" code={`1. Vendas + Produtos       (LEFT) → adiciona Categoria a cada venda
2. Clientes - Compradores  (ANTI) → quem nunca comprou
3. Vendas + Vendas2024     (FULL) → unir histórico completo`} />
      <AlertBox type="warning" title="Performance">
        <span dangerouslySetInnerHTML={{ __html: "Mesclar tabelas grandes (>1M linhas) é caro. Prefira fazer no <strong>SQL/banco</strong> antes de importar quando possível." }} />
      </AlertBox>
    </PageContainer>
  );
}
