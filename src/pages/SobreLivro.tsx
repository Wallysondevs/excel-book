import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SobreLivro() {
  return (
    <PageContainer title="Sobre este livro" subtitle="Por que existe, para quem é e como foi feito." difficulty="iniciante" timeToRead="3 min">
      <h2>Para quem é</h2>
      <p dangerouslySetInnerHTML={{ __html: "Este livro é para você que <strong>nunca abriu o Excel</strong> e também para quem já trabalha com planilhas há anos e quer dominar fórmulas modernas, Power Query, DAX, VBA e Office Scripts. O conteúdo foi pensado para o usuário <strong>brasileiro</strong>: nomes de funções em português (PROCV, SOMASE, SE), separador <code>;</code> entre argumentos, vírgula decimal, formato R$." }} />
      <h2>Como o livro está organizado</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Boas-vindas</strong> — visão geral, história e versões." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Primeiros passos</strong> — interface, navegação, formatos de arquivo." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Formatação</strong> — números, datas, formatação condicional, estilos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Fórmulas</strong> — operadores, referências, auditoria, erros." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Funções</strong> — das essenciais às modernas (LET, LAMBDA, FILTRO, PROCX)." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Análise</strong> — Tabelas Dinâmicas, gráficos, dashboards." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Power Query, Power Pivot e DAX</strong> — BI dentro do Excel." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Macros, VBA e Office Scripts</strong> — automação." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Casos práticos</strong> — DRE, fluxo de caixa, dashboards prontos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Apêndice</strong> — atalhos, glossário, FAQ." }} />
      </ul>
      <h2>Convenções</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Funções aparecem em <code>MAIÚSCULAS</code>." }} />
        <li dangerouslySetInnerHTML={{ __html: "Atalhos aparecem como <kbd>Ctrl</kbd>+<kbd>C</kbd>." }} />
        <li dangerouslySetInnerHTML={{ __html: "Quando o atalho do Mac difere, mostramos <kbd>⌘</kbd>+<kbd>C</kbd>." }} />
        <li dangerouslySetInnerHTML={{ __html: "Exemplos usam separador <code>;</code> (Excel pt-BR)." }} />
      </ul>
      <AlertBox type="tip" title="Como aproveitar">
        <span dangerouslySetInnerHTML={{ __html: "Faça um exemplo por capítulo no seu próprio Excel. Aprender vendo é uma coisa, aprender <em>fazendo</em> é outra completamente diferente." }} />
      </AlertBox>
    </PageContainer>
  );
}
