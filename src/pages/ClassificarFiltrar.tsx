import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ClassificarFiltrar() {
    return (
      <PageContainer title="Classificar e Filtrar" subtitle="Sort, AutoFilter e Filtro Avançado." difficulty="iniciante" timeToRead="8 min">
        <h2>Classificar (Sort)</h2>
      <p>Selecione qualquer célula da lista e <strong>Dados → Classificar</strong>. Excel detecta os cabeçalhos automaticamente.</p>
      <ul>
        <li>Atalho rápido: A→Z (<code>Alt + A + S + A</code>) ou Z→A (<code>Alt + A + S + D</code>).</li>
        <li>Múltiplos níveis: classificar por Estado, depois por Vendedor, depois por Data.</li>
        <li>Por cor de célula ou cor de fonte (formatação condicional).</li>
        <li>Lista personalizada: ordenar por Janeiro, Fevereiro... (não alfabética).</li>
      </ul>
      <h2>AutoFiltro</h2>
      <p>Selecione célula da tabela e <strong>Dados → Filtro</strong> (ou <code>Ctrl + Shift + L</code>). Aparecem setinhas em cada cabeçalho. Tabelas (Ctrl+T) já vêm com filtro.</p>
      <CodeBlock language="text" code={`Cliques na setinha:
  • Ordenação rápida
  • Filtros de texto: contém, começa com, igual...
  • Filtros de número: maior que, top 10, acima da média...
  • Filtros de data: este mês, último trimestre, ano passado...
  • Caixas de seleção para escolher valores específicos
  • Filtrar por cor`} />
      <h2>Filtro Avançado</h2>
      <p><strong>Dados → Avançado</strong>. Permite filtros com regras complexas em outra área da planilha e copiar resultado para outro local. Suporta E (mesma linha) e OU (linhas diferentes).</p>
      <CodeBlock language="text" code={`Critérios em E10:F12:
  | Estado | Total |
  | SP     | >5000 |     ← E
  | RJ     | >3000 |     ← OU

  Resultado: SP com >5000  OU  RJ com >3000`} />
      <h2>FILTRO (função dinâmica)</h2>
      <CodeBlock language="text" code={`=FILTRO(tblVendas; tblVendas[Estado]="SP")
  =FILTRO(A:C; (B:B>1000)*(C:C="Pago"); "Sem dados")

  * representa E,  + representa OU.`} />
      <AlertBox type="tip" title="FILTRO + CLASSIFICAR + ÚNICO">
        Combine: <code>=CLASSIFICAR(ÚNICO(FILTRO(A:A; B:B="SP"))) </code> — lista única e ordenada de SP.
      </AlertBox>
      </PageContainer>
    );
  }
  