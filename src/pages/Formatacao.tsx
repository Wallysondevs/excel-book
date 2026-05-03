import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Formatacao() {
    return (
      <PageContainer title="Formatação de Células" subtitle="Fonte, cor, bordas, alinhamento, formato de número e quebra de texto." difficulty="iniciante" timeToRead="9 min">
        <h2>Caixa de diálogo Formatar Células</h2>
      <p dangerouslySetInnerHTML={{ __html: "Atalho universal: <code>Ctrl + 1</code>. Abre uma caixa com 6 abas (Número, Alinhamento, Fonte, Borda, Preenchimento, Proteção)." }} />
      <h2>Formatos de número</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Geral:</strong> exibe como você digitou." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Número:</strong> casas decimais e separador de milhar." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Moeda:</strong> R$ junto ao número, sinal de menos para negativos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Contábil:</strong> R$ alinhado à esquerda, parênteses para negativos." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Data:</strong> 01/05/2026, 1-mai-26, 1 de maio de 2026 etc." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Porcentagem:</strong> multiplica por 100 e adiciona %." }} />
        <li dangerouslySetInnerHTML={{ __html: "<strong>Personalizado:</strong> permite criar máscaras." }} />
      </ul>
      <h2>Formato personalizado — máscaras</h2>
      <p dangerouslySetInnerHTML={{ __html: "Use a aba <strong>Personalizado</strong> para criar formatos com regras específicas:" }} />
      <CodeBlock language="text" code={`0;-0;"–"                       → mostra "–" para zero
  #.##0,00;[Vermelho]-#.##0,00   → negativos em vermelho
  "R\$ "#.##0,00                  → R\$ 1.234,56
  00000-000                      → CEP
  00.000.000/0000-00             → CNPJ
  [h]:mm                         → horas acumuladas (ex: 50:30)`} />
      <AlertBox type="info" title="Sintaxe do formato personalizado">
        <span dangerouslySetInnerHTML={{ __html: "São 4 seções separadas por ponto-e-vírgula: <code>positivo;negativo;zero;texto</code>. Use <code>0</code> para dígito obrigatório, <code>#</code> para dígito opcional." }} />
      </AlertBox>
      <h2>Alinhamento</h2>
      <p dangerouslySetInnerHTML={{ __html: "Mesclar Células deve ser evitado em listas — quebra ordenação e PROCV. Prefira <strong>Centralizar Seleção</strong> (Ctrl+1 → Alinhamento → Horizontal: Centralizar Seleção)." }} />
      <h2>Bordas e preenchimento</h2>
      <p dangerouslySetInnerHTML={{ __html: "Use <strong>bordas finas e cinza</strong> para legibilidade. Reserve cores fortes para destaque. Para tabelas reais, prefira a ferramenta <strong>Tabela</strong> (Ctrl+T) que aplica estilos automaticamente." }} />
      <h2>Pincel de Formatação</h2>
      <p dangerouslySetInnerHTML={{ __html: "Selecione célula formatada → clique no pincel (Página Inicial) → clique onde quer aplicar. Duplo clique no pincel = aplicar várias vezes (Esc para sair)." }} />
      </PageContainer>
    );
  }
  